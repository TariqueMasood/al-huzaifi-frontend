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
import Container from "./ui/container";

const { Title, Paragraph } = Typography;

const usefulLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/why-choose-us" },
  { name: "Registration", path: "/registration" },
  { name: "Tuition Fee", path: "/tution-fee" },
  { name: "Scholarship", path: "/scholarship-program" },
  { name: "Academic Calendar", path: "/acadmic-calendar" },
  { name: "Ask Fatwa", path: "/darul-ifta" },
];

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row gutter={[32, 32]}>
          {/* Logo and Socials */}
          <Col xs={24} md={12} lg={8}>
            <FooterLogo src={fLogo} alt="Al-Huzaifi Academy Logo" />
            <FooterParagraph>
              An online hub for authentic Islamic and academic education,
              serving a global community with a focus on faith, excellence, and
              holistic development.
            </FooterParagraph>
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
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
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

const Wrapper = styled.footer`
  background-color: #101d2c;
  color: ${({ theme }) => theme.colors.grey400};
  padding: 50px 20px 30px;

  @media (min-width: 768px) {
    padding: 70px 32px 40px;
  }
`;

const FooterLogo = styled.img`
  max-width: 220px;
  margin-bottom: 20px;
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.3));
`;

const FooterParagraph = styled(Paragraph)`
  color: inherit;
  font-size: 14px;
  line-height: 1.6;
  max-width: 480px;
`;

const IconRow = styled.div`
  display: flex;
  gap: 20px;
  font-size: 22px;
  margin-top: 12px;

  a {
    transition: all 0.3s ease;

    &:hover {
      color: #00bfa5;
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
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #00bfa5;
        text-decoration: underline;
      }
    }
  }
`;

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  font-size: 18px;

  svg {
    margin-right: 10px;
    font-size: 20px;
  }

  a {
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #00bfa5;
    }
  }
`;

const OfficesTitle = styled.div`
  margin-top: 20px;
  font-weight: 600;
  font-size: 18px;
`;

const OfficesList = styled.ul`
  margin-top: 8px;
  padding-left: 0;
  list-style: none;
  font-size: 16px;

  li {
    margin-bottom: 6px;
  }
`;

const StyledDivider = styled(Divider)`
  background-color: #72819f;
  opacity: 0.15;
  margin: 40px 0 20px 0;
`;

const CopyRight = styled.div`
  text-align: center;
  padding-top: 16px;
  font-size: 15px;
`;
