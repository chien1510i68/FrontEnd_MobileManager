import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
function DefaultLayoutUser(props) {
    const { Header, Content, Footer } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout className="layout">
        <Header className="flex">
          <div className="logo">
            {/* <h2>this is image</h2> */}
            this is the image
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1" >
              <Link to="/admin/staff"> Quản lí nhân viên </Link>
            </Menu.Item>
            <Menu.Item key="2" >
              <Link to="/admin/managerproduct"> Quản lí sản phẩm</Link>
            </Menu.Item>
            <Menu.Item key="3" >
              <Link to="/admin/bill"> Quản lí đơn hàng</Link>
            </Menu.Item>
            <Menu.Item key="4" >
              <Link to="/admin/statistical"> Thống kê doanh thu</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-content"
            style={{ background: colorBgContainer }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
}

export default DefaultLayoutUser;
