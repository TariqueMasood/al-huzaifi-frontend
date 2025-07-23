import {
  InstagramOutlined,
  FacebookFilled,
  YoutubeFilled,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Space, Tooltip, Button } from "antd";

export const TopHeader = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <SocialIcons>
          <Tooltip title="Instagram">
            <a
              href="https://www.instagram.com/alhuzaifiacademy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramOutlined />
            </a>
          </Tooltip>
          <Tooltip title="Facebook">
            <a
              href="https://www.facebook.com/alhuzaifiacademy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookFilled />
            </a>
          </Tooltip>
          <Tooltip title="YouTube">
            <a
              href="https://www.youtube.com/@alhuzaifiacademy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeFilled />
            </a>
          </Tooltip>
        </SocialIcons>

        <UserActions>
          <Link to="/registration">
            <Button type="primary" icon={<UserAddOutlined />} size="small">
              Register
            </Button>
          </Link>
        </UserActions>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ffffff; /* Matches the main header */
  color: #333;
  padding: 6px 0;
  font-size: 14px;
  border-bottom: 1px solid #eaeaea; /* subtle bottom separator */
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialIcons = styled(Space)`
  font-size: 20px;

  a {
    color: #555;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #1890ff;
  }
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .ant-btn {
    font-size: 13px;
  }

  a {
    text-decoration: none;
  }
`;
