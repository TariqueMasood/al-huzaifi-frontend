import { Layout, theme } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const DashboardHeader = () => {
  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <div
        className="header-content"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </Header>
  );
};

export default DashboardHeader;
