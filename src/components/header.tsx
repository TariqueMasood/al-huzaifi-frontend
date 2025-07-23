import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { TopHeader } from "./top-header";
import useViewportWidth from "../hooks/use-viewport-width";
import { getMenuItems } from "../config/menu-items";
import logo from "../images/al-huzaifi-logo-blue.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useViewportWidth("md");

  const toggleDrawer = () => setOpen(!open);
  const closeDrawer = () => setOpen(false);

  const menuItems = getMenuItems(isMobile);

  return (
    <Wrapper>
      <TopHeader />

      <ContentWrapper>
        <LogoWrapper>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </LogoWrapper>

        {isMobile ? (
          <>
            <StyledMenu mode="horizontal" items={menuItems} />
          </>
        ) : (
          <>
            <MenuToggle
              type="text"
              icon={<MenuOutlined />}
              onClick={toggleDrawer}
            />
            <Drawer
              title="Menu"
              placement="right"
              onClose={closeDrawer}
              open={open}
            >
              <Menu
                mode="inline"
                items={menuItems}
                onClick={closeDrawer}
                style={{ borderRight: "none" }}
                overflowedIndicator={false}
              />
            </Drawer>
          </>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 25px 0 rgba(54, 66, 117, 0.12);
  z-index: 1000;
  position: sticky;
  top: 0;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 90px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: center;

  a {
    display: inline-block;
    height: 100%;
  }

  img {
    height: 100%;
    object-fit: contain;
  }
`;

const MenuToggle = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 0;
`;

const StyledMenu = styled(Menu)`
  flex: 1;
  justify-content: flex-end;
  border-bottom: none;

  .ant-menu-item {
    padding: 0 14px;
  }

  .ant-menu-item:hover {
    color: #1677ff;
  }
`;
