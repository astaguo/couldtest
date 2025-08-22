import { Button, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import './Layout.index.scss';
import LeftMenu from "./component/Menu";
import { createStorage } from "../../utils/localStorageUtil";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Verify auth
    const result = createStorage().has('token');
    if (!result) {
      navigate('/login')
    }
  }, [])

  return (
    <Layout className="layout">
      <LeftMenu />
      <Layout>
        <Header>
          <Button type='primary' onClick={() => {
            createStorage().clearNamespace();
            navigate('/login')
          }} >Logout</Button>
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
};

export default Home;
