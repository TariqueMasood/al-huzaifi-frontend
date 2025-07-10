import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "../admin/components/sidebar";
import DashboardHeader from "../admin/components/dashboard-header";
import DashboardFooter from "../admin/components/dashboard-footer";

const { Header, Sider, Content, Footer } = Layout;

const DashboardLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={250}
        breakpoint="md"
        collapsedWidth="0"
        style={{
          backgroundColor: "#fff",
          boxShadow: "2px 0 8px rgba(0, 0, 0, 0.1)",
          zIndex: 10,
        }}
      >
        <Sidebar />
      </Sider>

      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: 0,
            height: 64,
            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
            zIndex: 9,
          }}
        >
          <DashboardHeader />
        </Header>

        <Content
          style={{
            margin: "24px 40px",
            padding: "24px",
            background: "#f5f5f5",
            minHeight: "calc(100vh - 128px)", // Adjust for header + footer
          }}
        >
          <Outlet />
        </Content>

        <Footer
          style={{
            textAlign: "center",
            background: "#fff",
            padding: "16px 40px",
            boxShadow: "0 -1px 4px rgba(0, 0, 0, 0.05)",
          }}
        >
          <DashboardFooter />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
