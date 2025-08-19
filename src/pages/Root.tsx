import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { createStorage } from "../utils/localStorageUtil";

export default function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    // Verify auth
    const result = createStorage().has('token');
    if (!result) {
      navigate('/login')
    }
  }, [])

  return <Outlet />;
};