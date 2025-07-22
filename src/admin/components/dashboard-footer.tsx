import { Layout } from "antd";
const { Footer } = Layout;

const DashboardFooter = () => (
  <Footer style={{ textAlign: "center", backgroundColor: "#fff" }}>
    ©{new Date().getFullYear()} All Rights Reserved | Al-Huzaifi
  </Footer>
);

export default DashboardFooter;
