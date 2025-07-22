import {
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ReactNode } from "react";

interface MenuItemConfig {
  label: string;
  key: string;
  icon?: ReactNode;
  path?: string;
  children?: MenuItemConfig[];
}

export const menuConfig: MenuItemConfig[] = [
  {
    label: "Dashboard",
    key: "dashboard",
    icon: <PieChartOutlined />,
    path: "/dashboard",
  },
  {
    label: "Users",
    key: "users",
    icon: <UserOutlined />,
    path: "/dashboard/users",
  },
  {
    label: "Registrations",
    key: "files",
    icon: <FileOutlined />,
    path: "/dashboard/registrations",
  },
  //   {
  //     label: "Teams",
  //     key: "teams",
  //     icon: <TeamOutlined />,
  //     children: [
  //       { label: "Team A", key: "team-a", path: "/teams/a" },
  //       { label: "Team B", key: "team-b", path: "/teams/b" },
  //     ],
  //   },
];
