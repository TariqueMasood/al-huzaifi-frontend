import React from "react";
import {
  InstagramOutlined,
  FacebookFilled,
  YoutubeFilled,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
// import { Link } from "react-router-dom";

export const TopHeader = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <SocialIcon>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/alhuzaifiacademy/?igsh=MWswMzl6NGM3Z25zcw%3D%3D&utm_source=qr#"
          >
            <InstagramOutlined />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/alhuzaifiacademy?mibextid=wwXIfr&rdid=QVVmcr6dT9Z3LCEn&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FGoKAA3Pg%2F%3Fmibextid%3DwwXIfr#"
          >
            <FacebookFilled />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/@alhuzaifiacademy"
          >
            <YoutubeFilled />
          </a>
        </SocialIcon>

        <LoginRegister>
          <LoginBtn>
            <UserOutlined />
            {/* <Link to="/login">Login</Link> */}
          </LoginBtn>
          <RegBtn>
            <UserAddOutlined />
            {/* <Link to="/login">Register</Link> */}
          </RegBtn>
        </LoginRegister>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #f2f2f2;
  padding: 7px 0px;
  border-bottom: 1px solid #ccc;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;

  ${mq("md")} {
    gap: 24px;
    font-size: 24px;
  }

  a {
    transition: all ease-in-out 0.4s;
    color: inherit;
  }

  a:hover {
    color: rgb(133, 156, 162);
  }
`;

const LoginRegister = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 12px;

  ${mq("md")} {
    font-size: 16px;
  }

  a {
    color: #f2f2f2;
    text-decoration: none;
  }
`;

const LoginBtn = styled.button`
  background: transparent;
  border: none;
  color: #f2f2f2;
  display: flex;
  gap: 5px;
  align-items: center;
`;

const RegBtn = styled(LoginBtn)``;
