import {
  InstagramOutlined,
  FacebookFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import styled from "styled-components";
import { Space, Tooltip, Button } from "antd";
import { mq } from "../styles/breakpoints";

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
          <ContactItem>
            <a href="mailto:info@alhuzaifiacademy.com">
              info@alhuzaifiacademy.com
            </a>
          </ContactItem>
          <Separator>|</Separator>
          <ContactItem>
            <a href="tel:+919876543210">+91 98765 43210</a>
          </ContactItem>
        </UserActions>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ffffff;
  color: #333;
  padding: 6px 0;
  font-size: 14px;
  border-bottom: 1px solid #eaeaea;
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
    color: ${(props) => props.theme.colors.colorPrimary};
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

const ContactItem = styled.div`
  color: #555;
  font-size: 12px;

  ${mq("md")} {
    font-size: 14px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Separator = styled.span`
  padding: 0 10px;
  color: #ddd;
`;
