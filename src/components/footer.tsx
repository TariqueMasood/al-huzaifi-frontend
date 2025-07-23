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
      <Container>
        <Row gutter={[32, 32]}>
          {/* Logo and Socials */}
          <Col xs={24} md={12} lg={8}>
            <FooterLogo src={fLogo} alt="Al-Huzaifi Academy Logo" />
            <Paragraph>
              An online hub for authentic Islamic and academic education,
              serving a global community with a focus on faith, excellence, and
              holistic development.
            </Paragraph>
            <Title level={5} style={{ color: "inherit", marginTop: "1.5rem" }}>
              Follow Us On:
            </Title>
            <IconRow>
              <a
                href="https://www.instagram.com/alhuzaifiacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramOutlined />
              </a>
              <a
                href="https://www.facebook.com/alhuzaifiacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookFilled />
              </a>
              <a
                href="https://www.youtube.com/@alhuzaifiacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <YoutubeFilled />
              </a>
            </IconRow>
          </Col>

          {/* Useful Links */}
          <Col xs={24} md={12} lg={8}>
            <Title level={5} style={{ color: "inherit" }}>
              Useful Links
            </Title>
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
                <Link to="/tution-fee">Tuition Fee</Link>
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
            <Title level={5} style={{ color: "inherit" }}>
              Contact Us
            </Title>
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
            <OfficesTitle>Our Offices</OfficesTitle>
            <OfficesList>
              <li>USA</li>
              <li>India</li>
              <li>Egypt</li>
              <li>Turkiye</li>
            </OfficesList>
          </Col>
        </Row>
        <StyledDivider />
        <CopyRight>© 2024 Al-Huzaifi. All rights reserved.</CopyRight>
      </Container>
    </Wrapper>
  );
};

export default Footer;

// ===== Styled Components ===== //

const Wrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.colorPrimary};
  color: #f2f2f2;
  padding: 40px 16px 20px;

  @media (min-width: 768px) {
    padding: 60px 32px 30px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterLogo = styled.img`
  max-width: 220px;
  margin-bottom: 16px;
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.25));
`;

const IconRow = styled.div`
  display: flex;
  gap: 24px;
  font-size: 24px;
  margin-top: 12px;

  a {
    color: #f2f2f2;
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: ${(props) => props.theme.colors.colorSecondary || "#004353"};
      outline: none;
    }
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 16px;
  margin-top: 1rem;

  li {
    margin-bottom: 10px;

    a {
      color: #f2f2f2;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover,
      &:focus {
        color: ${(props) => props.theme.colors.colorSecondary};
        text-decoration: underline;
        outline: none;
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
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: ${(props) => props.theme.colors.colorSecondary || "#004353"};
      outline: none;
    }
  }
`;

const OfficesTitle = styled.div`
  margin-top: 16px;
  font-weight: bold;
  font-size: 18px;
`;

const OfficesList = styled.ul`
  margin-top: 8px;
  list-style: none;
  padding-left: 0;
  font-size: 16px;

  li {
    margin-bottom: 6px;
  }
`;

const StyledDivider = styled(Divider)`
  background-color: #72819f;
  opacity: 0.2;
  margin: 32px 0 16px 0;
`;

const CopyRight = styled.div`
  text-align: center;
  padding-top: 20px;
  font-size: 16px;
  color: #ddd;
`;
