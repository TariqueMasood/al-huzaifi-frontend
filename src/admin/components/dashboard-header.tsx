// src/components/common/DashboardHeader.tsx
import { Breadcrumb, Button, Layout, theme } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const { Header } = Layout;

const DashboardHeader: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const breadcrumbItems = location.pathname
    .split("/")
    .filter(Boolean)
    .map((segment, index, arr) => ({
      title: segment.charAt(0).toUpperCase() + segment.slice(1),
      path: "/" + arr.slice(0, index + 1).join("/"),
    }));

  return (
    <StyledHeader>
      <Breadcrumb
        items={breadcrumbItems.map(({ title, path }) => ({ title }))}
      />

      <LogoutButton type="primary" onClick={handleLogout}>
        Logout
      </LogoutButton>
    </StyledHeader>
  );
};

export default DashboardHeader;

const StyledHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 0 24px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoutButton = styled(Button)`
  background-color: #f5222d;
  color: white;
  border: none;

  &:hover {
    background-color: #cf1322;
    color: white;
  }
`;
