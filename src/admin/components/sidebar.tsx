import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import {
  PieChartOutlined,
  UserOutlined,
  FileOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const items = [
  {
    key: "/dashboard",
    icon: <PieChartOutlined />,
    label: <NavLink to="/dashboard">Dashboard</NavLink>,
  },
  {
    key: "/dashboard/registered-users",
    icon: <UserOutlined />,
    label: <NavLink to="/dashboard/registered-users">Users</NavLink>,
  },
  {
    key: "/dashboard/registrations",
    icon: <FileOutlined />,
    label: <NavLink to="/dashboard/registrations">Registrations</NavLink>,
  },
];

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <h4>Admin Panel</h4>
      <Menu mode="inline" items={items} />
      <SidebarFooter>&copy; 2025 Admin Dashboard</SidebarFooter>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  padding: 2rem 1rem;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const SidebarFooter = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.themeTextColor2};
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.themeTextColor};
`;
