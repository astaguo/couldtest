// storage.ts
type SetOpts = { ttlMs?: number };

function isLSAvailable(): boolean {
  try {
    if (typeof window === 'undefined') return false;
    const k = '__t__';
    localStorage.setItem(k, '1');
    localStorage.removeItem(k);
    return true;
  } catch {
    return false;
  }
}

export function createStorage(prefix = 'cloudtest') {
  const enabled = isLSAvailable();
  const p = (k: string) => `${prefix}:${k}`;

  return {
    set<T>(key: string, value: T, opts?: SetOpts) {
      if (!enabled) return;
      const payload = JSON.stringify({
        v: value,
        e: opts?.ttlMs ? Date.now() + opts.ttlMs : undefined,
      });
      localStorage.setItem(p(key), payload);
    },

    get<T>(key: string): T | null {
      if (!enabled) return null;
      const raw = localStorage.getItem(p(key));
      if (!raw) return null;
      try {
        const { v, e } = JSON.parse(raw) as { v: T; e?: number };
        if (e && Date.now() > e) {
          localStorage.removeItem(p(key));
          return null;
        }
        return v;
      } catch {
        localStorage.removeItem(p(key));
        return null;
      }
    },

    has(key: string): boolean {
      return this.get(key) !== null;
    },

    remove(key: string) {
      if (!enabled) return;
      localStorage.removeItem(p(key));
    },

    clearNamespace() {
      if (!enabled) return;
      Object.keys(localStorage)
        .filter(k => k.startsWith(`${prefix}:`))
        .forEach(k => localStorage.removeItem(k));
    },

    // Cross-tab subscribe to a specific key (returns unsubscribe)
    subscribe<T>(key: string, cb: (val: T | null) => void): () => void {
      if (!enabled) return () => { };
      const handler = (e: StorageEvent) => {
        if (e.key === p(key)) cb(this.get<T>(key));
      };
      window.addEventListener('storage', handler);
      return () => window.removeEventListener('storage', handler);
    },
  };
}
