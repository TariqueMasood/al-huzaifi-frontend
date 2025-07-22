import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import DashboardFooter from "../admin/components/dashboard-footer";
import DashboardHeader from "../admin/components/dashboard-header";
import Sidebar from "../admin/components/sidebar";

const { Content } = Layout;

const DashboardLayout: React.FC = () => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Layout>
        <DashboardHeader />
        <Content style={{ margin: "24px", overflow: "initial" }}>
          <Outlet />
        </Content>
        <DashboardFooter />
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
