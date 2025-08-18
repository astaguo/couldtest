import './index.css';

type IProps = {
  title: string;
  value: string;
  isHidden?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: IProps) => {
  return (
    <div className="form-control">
      <input
        type={props.isHidden ? 'password' : 'value'}
        value={props.value}
        onChange={props.onChange}
        required
      />
      <label>
        {Array.from(props.title ?? '').map((ch, i) => (
          <span key={`${ch}-${i}`} style={{ transitionDelay: `${i * 50}ms` }}>
            {ch}
          </span>
        ))}
        {/* <span style={{ transitionDelay: '0ms' }}>U</span>
        <span style={{ transitionDelay: '50ms' }}>s</span>
        <span style={{ transitionDelay: '100ms' }}>e</span>
        <span style={{ transitionDelay: '150ms' }}>r</span>
        <span style={{ transitionDelay: '200ms' }}>n</span>
        <span style={{ transitionDelay: '250ms' }}>a</span>
        <span style={{ transitionDelay: '300ms' }}>m</span>
        <span style={{ transitionDelay: '350ms' }}>e</span> */}
      </label>
    </div>
  );
};

export default Input;
