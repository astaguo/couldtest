import Sider from "antd/es/layout/Sider";
import {
  ContainerOutlined,
  DesktopOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu, type MenuProps } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '/home', icon: <UserOutlined />, label: 'User' },
  { key: '/login', icon: <DesktopOutlined />, label: 'Option 2' },
  { key: '/', icon: <ContainerOutlined />, label: 'Option 3' },
];

export default function LeftMenu() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key);
  }

  return (
    <>
      <Sider width="25%" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Menu onClick={onClick} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
    </>
  );
}
