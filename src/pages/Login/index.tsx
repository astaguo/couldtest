import { useState } from 'react';
import Button from './component/Button';
import Card from './component/Card';
import Input from './component/Input';
import Pattern from './component/Pattern';
import { useNavigate } from 'react-router';
import { createStorage } from '../../utils/localStorageUtil';
import { Alert } from 'antd';

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const submit = () => {
    if (username === 'asta' && password === '123456') {
      createStorage().set('token', '123456');
      navigate('/');
    } else {
      <Alert message="username or password is failed!!!" type="error" />
    }
  };
  return (
    <>
      <Pattern />
      <div style={{ position: 'fixed', zIndex: 1 }}>
        <Card
          children={
            <div>
              <div className="text-title">Login</div>
              <Input
                title="Username"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value)
                }
              />
              <Input
                title="Password"
                value={password}
                isHidden={true}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
              <Button title="Submit" onClick={submit} />
            </div>
          }
        />
      </div>
    </>
  );
}

export default Login;
