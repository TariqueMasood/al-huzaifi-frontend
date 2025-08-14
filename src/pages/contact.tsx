import styled from "styled-components";
import bgImg from "../../src/images/contact-bg-img.jpeg";
import { Row, Col, Form, Input } from "antd";
import { WhatsAppOutlined, MailOutlined } from "@ant-design/icons";
import { mq } from "../styles/breakpoints";
import HeroSection from "../components/hero-section";
import Container from "../components/ui/container";
import PageHeader from "../components/page-header";

const Contact = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Contact Page Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="We are here to help you"
            subtitle="Reach out anytime."
          />
          <FormContainer>
            <Form layout="vertical">
              <Row gutter={[8, 8]}>
                <Col xs={24}>
                  <Form.Item
                    label="Your Name"
                    name="name"
                    rules={[
                      { required: true, message: "Please Enter Your Name" },
                    ]}
                  >
                    <Input placeholder="Enter your name" />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    label="Your Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please Enter Your Email" },
                    ]}
                  >
                    <Input placeholder="Enter your email" />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    label="Your Subject"
                    name="subject"
                    rules={[
                      { required: true, message: "Please Enter Your Subjects" },
                    ]}
                  >
                    <Input placeholder="your subject" />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    label="Your Message"
                    name="message"
                    rules={[
                      { required: true, message: "Please Enter Your Message" },
                    ]}
                  >
                    <Input placeholder="your message" />
                  </Form.Item>
                </Col>
                <Col xs={24} style={{ textAlign: "center" }}>
                  <SubmitBtn type="submit">Submit</SubmitBtn>
                </Col>
              </Row>
            </Form>
          </FormContainer>

          <EmailContact>
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <ContactContainer>
                  <a
                    href="https://wa.me/919535316943"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <WhatsAppOutlined />
                    </div>
                    <div>WhatsApp:</div>
                    <div>+91 9535316943</div>
                  </a>
                </ContactContainer>
              </Col>
              <Col xs={24} md={12}>
                <ContactContainer>
                  <a
                    href="mailto:info@alhuzaifi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <MailOutlined />
                    </div>
                    <div>Email:</div>
                    <div>info@alhuzaifi.com</div>
                  </a>
                </ContactContainer>
              </Col>
            </Row>
          </EmailContact>
        </Container>
      </Wrapper>
    </>
  );
};

export default Contact;

const Wrapper = styled.div`
  padding: 40px 0;
`;

const FormContainer = styled.div`
  padding: 24px;
  border-radius: 8px;
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid ${(props) => props.theme.colors.colorPrimary};
`;

const SubmitBtn = styled.button`
  padding: 6px 24px;
  margin: 24px 0px;
  border: 1px solid ${(props) => props.theme.colors.colorPrimary};
  color: ${(props) => props.theme.colors.colorPrimary};
  background-color: #ffffff;
  border-radius: 8px;
  transition: all ease-in 0.4s;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.colorPrimary};
    color: #fff;
    border-color: ${(props) => props.theme.colors.colorPrimary};
  }
`;

const EmailContact = styled.div`
  max-width: 700px;
  width: 100%;
  margin: auto;
  padding: 30px 0;
  font-size: 24px;
`;

const ContactContainer = styled.div`
  max-width: 350px;
  width: 100%;
  margin: auto;
  text-align: center;
  border: 3px solid #004353;
  border-radius: 8px;
  margin-top: 20px;

  div {
    padding: 5px 0;
  }

  div:nth-child(1) {
    font-size: 48px;
    color: #cdad7e;
  }

  div:nth-child(2) {
    font-weight: 700;
    color: #004353;
  }

  div:nth-child(3) {
    font-weight: 700;
    color: #cdad7e;
  }

  ${mq("md")} {
    margin: 16px 0;
  }

  ${mq("sm")} {
    margin: 16px 0;
  }
`;
