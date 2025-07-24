import { Form, Input, Select, Row, Col, Button } from "antd";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import bgImg from "../../src/images/darul-ifta.png";

const { TextArea } = Input;

export const DarulIftaPage = () => {
  return (
    <>
      <div>
        <Image src={bgImg} alt="pic" />
      </div>
      <Wrapper>
        <Container>
          <Title>Darul Ifta</Title>
          <SubHeading>A Center for Authentic Islamic Legal Guidance</SubHeading>
          <SubTitle>Al-Huzaifi Academy</SubTitle>
          <CourseDiscription>
            {/* Text content remains the same */}
            <h5>Darul Ifta Question Submission Form</h5>
            <p>
              If you have a question regarding Islamic rulings or require
              guidance on a specific matter, please complete the form below.
            </p>

            <FormContainer>
              <Form layout="vertical">
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Your Name"
                      name="name"
                      rules={[
                        { required: true, message: "Please enter your name" },
                      ]}
                    >
                      <Input placeholder="Enter your name" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Nationality"
                      name="nationality"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your nationality",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your nationality" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          type: "email",
                          message: "Enter a valid email",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your email" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Fiqhi School (Madhhab)"
                      name="madhhab"
                      rules={[
                        { required: true, message: "Please select madhhab" },
                      ]}
                    >
                      <Select placeholder="Select Madhhab">
                        <Select.Option value="hanafi">Hanafi</Select.Option>
                        <Select.Option value="shafii">Shafi’i</Select.Option>
                        <Select.Option value="maliki">Maliki</Select.Option>
                        <Select.Option value="hanbali">Hanbali</Select.Option>
                        <Select.Option value="salafi">
                          Salafi (Ahl-e-Hadith)
                        </Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>

                  <Col xs={24}>
                    <Form.Item
                      label="Subject of Your Question"
                      name="subject"
                      rules={[
                        { required: true, message: "Please enter subject" },
                      ]}
                    >
                      <Input placeholder="Enter the subject" />
                    </Form.Item>
                  </Col>

                  <Col xs={24}>
                    <Form.Item
                      label="Explain Your Question in Detail"
                      name="question"
                      rules={[
                        {
                          required: true,
                          message: "Please explain your question",
                        },
                      ]}
                    >
                      <TextArea
                        rows={5}
                        placeholder="Explain your question in detail"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} style={{ textAlign: "right" }}>
                    <SubmitBtn htmlType="submit">Submit</SubmitBtn>
                  </Col>
                </Row>
              </Form>
            </FormContainer>
          </CourseDiscription>
        </Container>
      </Wrapper>
    </>
  );
};

// Styled components below remain the same except Container
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Wrapper = styled.div``;
const Image = styled.img`
  width: 100%;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 600;
  color: ${(props) => props.theme.colors.colorPrimary};
  padding: 16px 0px;
  font-size: 20px;

  ${mq("sm")} {
    text-align: center;
    font-weight: 600;
    color: ${(props) => props.theme.colors.colorPrimary};
    padding: 24px 0px;
    font-size: 24px;
  }

  ${mq("md")} {
    text-align: center;
    font-weight: 600;
    color: ${(props) => props.theme.colors.colorPrimary};
    padding: 30px 0px;
    font-size: 36px;
  }
`;

const SubHeading = styled.h3`
  text-align: center;
  font-size: 20px;
  margin-bottom: 9px;
  color: ${(props) => props.theme.colors.colorPrimary};

  ${mq("sm")} {
    text-align: center;
    font-style: italic;
    font-size: 22px;
    color: ${(props) => props.theme.colors.colorPrimary};
  }

  ${mq("md")} {
    text-align: center;
    font-style: italic;
    margin-bottom: 20px;
    font-size: 26px;
    color: ${(props) => props.theme.colors.colorPrimary};
  }
`;

const SubTitle = styled.h4`
  text-align: center;
  font-style: italic;
  font-size: 18px;
  color: ${(props) => props.theme.colors.colorPrimary};

  ${mq("sm")} {
    text-align: center;
    font-style: italic;
    text-decoration: underline;
    font-size: 20px;
    color: ${(props) => props.theme.colors.colorPrimary};
  }

  ${mq("md")} {
    text-align: center;
    font-style: italic;
    text-decoration: underline;
    margin-bottom: 30px;
    font-size: 22px;
    color: ${(props) => props.theme.colors.colorPrimary};
  }
`;

const CourseDiscription = styled.div`
  h5 {
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
  }
  p {
    padding: 12px 0px;
    font-size: 16px;
    letter-spacing: 1px;
  }

  li {
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 26px;
  }

  ${mq("sm")} {
    margin: 12px 0px;

    h5 {
      font-size: 20px;
      font-weight: 600;
      text-transform: capitalize;
    }
    p {
      padding: 12px 0px;
      font-size: 18px;
      letter-spacing: 1px;
    }

    li {
      font-size: 18px;
      letter-spacing: 1px;
      line-height: 30px;
    }
  }


  ${mq("md")}{
  flex: 2;
    margin: 20px 0px;

    h5 {
      font-size: 20px;
      font-weight: 600;
      text-transform: capitalize;
    }
    p {
      padding: 12px 0px;
      font-size: 18px;
      letter-spacing: 1px;
    }

    li {
      font-size: 18px;
      letter-spacing: 1px;
      line-height: 30px;
    }
  }
  }
`;

const SubmitBtn = styled(Button)`
  padding: 6px 24px;
  margin: 24px 0px;
  border: 1px solid ${(props) => props.theme.colors.colorPrimary};
  color: ${(props) => props.theme.colors.colorPrimary};
  background-color: #ffffff;
  border-radius: 8px;
  transition: all ease-in 0.4s;

  &:hover {
    background-color: ${(props) => props.theme.colors.colorPrimary};
    color: #fff;
    border-color: ${(props) => props.theme.colors.colorPrimary};
  }
`;

const FormContainer = styled.div`
  padding: 7px;

  ${mq("sm")} {
    max-width: 950px;
    width: 100%;
    margin: 20px auto;
    padding: 35px;
    border: 2px solid ${(props) => props.theme.colors.colorPrimary};
    border-radius: 4px;
  }

  ${mq("md")} {
    max-width: 950px;
    width: 100%;
    margin: 40px auto;
    padding: 60px;
    border: 2px solid ${(props) => props.theme.colors.colorPrimary};
    border-radius: 4px;
  }
`;

// Reuse your styled components for Title, SubHeading, SubTitle, CourseDiscription exactly as is.
