import { Button, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import './Layout.index.scss';
import LeftMenu from "./component/Menu";
import { createStorage } from "../../utils/localStorageUtil";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout className="layout">
      <LeftMenu />
      <Layout>
        <Header>Header</Header>
        <Content>
          <Button type='primary' onClick={() => {
            createStorage().clearNamespace();
            navigate('/login')
          }} >Go to login</Button>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
};

export default Home;
