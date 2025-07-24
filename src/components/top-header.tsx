import {
  InstagramOutlined,
  FacebookFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import styled from "styled-components";
import { Tooltip } from "antd";
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
              aria-label="Instagram"
            >
              <InstagramOutlined />
            </a>
          </Tooltip>
          <Tooltip title="Facebook">
            <a
              href="https://www.facebook.com/alhuzaifiacademy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookFilled />
            </a>
          </Tooltip>
          <Tooltip title="YouTube">
            <a
              href="https://www.youtube.com/@alhuzaifiacademy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <YoutubeFilled />
            </a>
          </Tooltip>
        </SocialIcons>

        <UserActions>
          <ContactItem>
            <a href="mailto:info@alhuzaifi.com">info@alhuzaifi.com</a>
          </ContactItem>
          <Separator>|</Separator>
          <ContactItem>
            <a href="tel:+919535316943">+91 9535316943</a>
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
  flex-wrap: wrap;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;

  a {
    color: #555;
    font-size: 20px;
    transition: color 0.3s ease, transform 0.2s ease;

    &:hover {
      color: ${(props) => props.theme.colors.colorPrimary};
      transform: scale(1.15);
    }
  }
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

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
  color: #bbb;
`;
