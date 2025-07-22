import React from "react";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import DashboardFooter from "../admin/components/dashboard-footer";
import DashboardHeader from "../admin/components/dashboard-header";
import Sidebar from "../admin/components/sidebar";

const { Content } = Layout;

const DashboardLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sidebar />
      <Layout>
        <DashboardHeader />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: "24px",
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <DashboardFooter />
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
