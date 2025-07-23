import React, { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useViewportWidth("md");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setOpen(!open);
  const closeDrawer = () => setOpen(false);

  const menuItems = getMenuItems(isMobile);

  return (
    <>
      {isMobile && <TopHeader />}

      <Wrapper className={scrolled ? "scrolled" : ""}>
        <ContentWrapper>
          <LogoWrapper>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </LogoWrapper>

          {isMobile ? (
            <>
              <RightContent>
                <StyledMenu mode="horizontal" items={menuItems} />
                <RegisterButton type="primary">
                  <Link to="/registration">Register</Link>
                </RegisterButton>
              </RightContent>
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
                <RegisterButton type="primary" block>
                  <Link to="/registration">Register</Link>
                </RegisterButton>
                <Menu
                  mode="inline"
                  items={menuItems}
                  onClick={closeDrawer}
                  style={{ borderRight: "none" }}
                />
              </Drawer>
            </>
          )}
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default Header;

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #ffffff;
  transition: all 0.3s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  height: 90px;

  &.scrolled {
    height: 64px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    height: 100%;
  }

  img {
    height: 70%;
    object-fit: contain;
    transition: all 0.3s ease;
  }

  ${Wrapper}.scrolled & img {
    height: 60%;
  }
`;

const MenuToggle = styled(Button)`
  font-size: 20px;
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

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const RegisterButton = styled(Button)`
  font-weight: 500;
  padding: 0 20px;
  height: 38px;
  border-radius: 20px;
  background: #1677ff;
  color: #fff;
  transition: all 0.3s ease;

  a {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    background: #0958d9;
  }
`;
