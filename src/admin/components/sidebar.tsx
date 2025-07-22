import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { menuConfig } from "../../config/menu-config";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const renderMenuItems = (items: typeof menuConfig): MenuProps["items"] =>
  items.map((item) => {
    if (item.children) {
      return {
        key: item.key,
        icon: item.icon,
        label: item.label,
        children: item.children.map((sub) => ({
          key: sub.key,
          label: <Link to={sub.path!}>{sub.label}</Link>,
        })),
      };
    }
    return {
      key: item.key,
      icon: item.icon,
      label: <Link to={item.path!}>{item.label}</Link>,
    };
  });

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      style={siderStyle}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={renderMenuItems(menuConfig)}
      />
    </Sider>
  );
};

export default Sidebar;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  // scrollbarGutter: "stable",
};
