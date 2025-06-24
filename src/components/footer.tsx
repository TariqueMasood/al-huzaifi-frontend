// Footer.tsx
import { Row, Col, Divider, Typography } from "antd";
import {
  InstagramOutlined,
  FacebookFilled,
  YoutubeFilled,
  WhatsAppOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fLogo from "../../src/images/al-hozaifi-academy-logo-white.png";

const { Title, Paragraph } = Typography;

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <Row gutter={[32, 32]}>
          {/* Logo and Socials */}
          <Col xs={24} md={12} lg={8}>
            <FooterLogo src={fLogo} alt="Logo" />
            <Paragraph>
              An online hub for authentic Islamic and academic education,
              serving a global community with a focus on faith, excellence, and
              holistic development.
            </Paragraph>
            <Title level={5}>Follow Us On:</Title>
            <IconRow>
              <a
                href="https://www.instagram.com/alhuzaifiacademy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramOutlined />
              </a>
              <a
                href="https://www.facebook.com/alhuzaifiacademy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookFilled />
              </a>
              <a
                href="https://www.youtube.com/@alhuzaifiacademy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeFilled />
              </a>
            </IconRow>
          </Col>

          {/* Useful Links */}
          <Col xs={24} md={12} lg={8}>
            <Title level={5}>Useful Links</Title>
            <StyledList>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/why-choose-us">About</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
              <li>
                <Link to="/tution-fee">Tution Fee</Link>
              </li>
              <li>
                <Link to="/scholarship-program">Scholarship</Link>
              </li>
              <li>
                <Link to="/acadmic-calendar">Academic Calendar</Link>
              </li>
              <li>
                <Link to="/darul-ifta">Ask Fatwa</Link>
              </li>
            </StyledList>
          </Col>

          {/* Contact Info */}
          <Col xs={24} md={12} lg={8}>
            <Title level={5}>Contact Us</Title>
            <ContactRow>
              <WhatsAppOutlined />
              <a
                href="https://wa.me/919535316943"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 9535316943
              </a>
            </ContactRow>
            <ContactRow>
              <MailOutlined />
              <a
                href="mailto:info@alhuzaifi.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@alhuzaifi.com
              </a>
            </ContactRow>
            <div style={{ marginTop: "16px", fontWeight: "bold" }}>
              Our Offices
            </div>
            <ul>
              <li>USA</li>
              <li>India</li>
              <li>Egypt</li>
              <li>Turkiye</li>
            </ul>
          </Col>
        </Row>
        <StyledDivider />
        <CopyRight>© 2024 Al-Huzaifi. All rights reserved.</CopyRight>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  padding: 40px 0 20px;
  background-color: #137c8f;
  color: #f2f2f2;

  .container {
    max-width: 1200px;
    margin: auto;
  }
`;

const FooterLogo = styled.img`
  max-width: 220px;
  margin-bottom: 16px;
`;

const IconRow = styled.div`
  display: flex;
  gap: 24px;
  font-size: 24px;
  margin-top: 12px;

  a {
    color: #f2f2f2;

    &:hover {
      color: #f2f2f2;
    }
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 16px;

  li {
    margin-bottom: 10px;

    a {
      color: #f2f2f2;
      &:hover {
        color: 004353;
        transition: 0.3s;
      }
    }
  }
`;

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 18px;

  svg {
    margin-right: 10px;
    font-size: 20px;
  }

  a {
    color: #f2f2f2;
    text-decoration: none;

    &:hover {
      color: #004353;
    }
  }
`;

const StyledDivider = styled(Divider)`
  background-color: #72819f;
  opacity: 0.2;
`;

const CopyRight = styled.div`
  text-align: center;
  padding-top: 20px;
  font-size: 16px;
`;
