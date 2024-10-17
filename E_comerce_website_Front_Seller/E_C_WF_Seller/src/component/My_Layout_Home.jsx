import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShopOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
const { Header, Sider } = Layout;
const My_Layout_Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: colorBgContainer,
      }}
    >
      <Sider
        style={{
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
         
          items={[
            {
              key: "1",
              icon: <ShopOutlined />,
              label: "Sản Phẩm",
              children: [
                {
                  key: "1",
                  icon: <PlusSquareOutlined />,
                  label: <>
                    <Link to="/seller/home/add-product">Thêm sản phẩm</Link>
                  </>
                },
              ],
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Outlet />
      </Layout>
    </Layout>
  );
};
export default My_Layout_Home;
