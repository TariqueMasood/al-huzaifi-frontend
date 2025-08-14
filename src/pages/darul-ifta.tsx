import { Form, Input, Select, Row, Col } from "antd";
import styled from "styled-components";
import bgImg from "../../src/images/darul-ifta.png";
import HeroSection from "../components/hero-section";
import PageHeader from "../components/page-header";
import Container from "../components/ui/container";
import CourseDescriptionSection from "../components/course-description-section";

const descriptionSections = [
  {
    heading: "Darul Ifta Question Submission Form",
    content: (
      <>
        <p>
          If you have a question regarding Islamic rulings or require guidance
          on a specific matter, please complete the form below.
        </p>
      </>
    ),
  },
];

const { TextArea } = Input;

export const DarulIftaPage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Darul Ifta Page Image" />
      <Wrapper>
        <PageHeader
          title="Darul Ifta"
          subtitle="A Center for Authentic Islamic Legal Guidance"
        />
        <Container>
          <CourseDescriptionSection sections={descriptionSections} />
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

                <Col xs={24} style={{ textAlign: "center" }}>
                  <SubmitBtn type="submit">Submit</SubmitBtn>
                </Col>
              </Row>
            </Form>
          </FormContainer>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 40px 0;
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

const FormContainer = styled.div`
  padding: 24px;
  border-radius: 8px;
  max-width: 950px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid ${(props) => props.theme.colors.colorPrimary};
`;
