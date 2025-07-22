import { Layout } from "antd";
const { Footer } = Layout;

const DashboardFooter = () => (
  <Footer style={{ textAlign: "center" }}>
    Ant Design ©{new Date().getFullYear()} Created by Ant UED
  </Footer>
);

export default DashboardFooter;
