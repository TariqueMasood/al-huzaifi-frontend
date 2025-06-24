// Converted Contact.tsx: Bootstrap + React Icons removed, Ant Design added

import styled from "styled-components";
import bgImg from "../../src/images/contact-bg-img.jpeg";
import { Row, Col, Form, Input } from "antd";
import { WhatsAppOutlined, MailOutlined } from "@ant-design/icons";
import { mq } from "../styles/breakpoints";

const Contact = () => {
  return (
    <>
      <div>
        <Image src={bgImg} alt="pic" />
      </div>
      <ContainerWrapper>
        <FormContainer>
          <h3>
            We are here to help you. <br />
            Reach out anytime.
          </h3>
          <Form layout="vertical">
            <StyledFormGroup>
              <LabelField>Name:</LabelField>
              <InputField>
                <Input placeholder="First Name" name="firstName" />
              </InputField>
            </StyledFormGroup>
            <StyledFormGroup>
              <LabelField>Email:</LabelField>
              <InputField>
                <Input placeholder="Email Address" name="email" type="email" />
              </InputField>
            </StyledFormGroup>
            <StyledFormGroup>
              <LabelField>Subject:</LabelField>
              <InputField>
                <Input placeholder="Subject" name="subject" />
              </InputField>
            </StyledFormGroup>
            <StyledFormGroup>
              <LabelField>Message:</LabelField>
              <InputField>
                <Input.TextArea placeholder="Message" name="message" rows={4} />
              </InputField>
            </StyledFormGroup>
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
      </ContainerWrapper>
    </>
  );
};

export default Contact;

const ContainerWrapper = styled.div`
  padding: 0 16px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
`;

const FormContainer = styled.div`
  text-align: center;
  margin: auto;
  padding: 20px 0;
  max-width: 700px;
  width: 100%;

  ${mq("sm")} {
    padding: 30px 0;
  }

  ${mq("md")} {
    padding: 40px 0;
  }

  h3 {
    font-size: 18px;
    color: #004353;
    font-weight: 600;

    ${mq("sm")} {
      font-size: 24px;
    }

    ${mq("md")} {
      font-size: 32px;
    }
  }
`;

const StyledFormGroup = styled(Form.Item)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 12px;
`;

const LabelField = styled.div`
  max-width: 80px;
  width: 100%;
`;

const InputField = styled.div`
  width: 100%;
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
