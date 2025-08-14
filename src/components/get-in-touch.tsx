import React from "react";
import styled from "styled-components";
import { Form, Input } from "antd";
import Container from "./ui/container";

export const GetInTouch = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form submitted: ", values);
  };

  return (
    <Wrapper>
      <Container>
        <ContentWrap>
          <Heading>Get in touch</Heading>
          <SubHeading>
            Get daily updates, Upcoming Events and Courses!
          </SubHeading>
          <FormContainer>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
              size="large"
            >
              <Form.Item
                label="Name"
                name="firstName"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <StyledInput placeholder="First Name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Enter a valid email" },
                ]}
              >
                <StyledInput placeholder="Email Address" />
              </Form.Item>

              <ButtonWrapper>
                <StyledButton type="submit">Submit</StyledButton>
              </ButtonWrapper>
            </Form>
          </FormContainer>
        </ContentWrap>
      </Container>
    </Wrapper>
  );
};

export default GetInTouch;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;

  @media (min-width: 768px) {
    padding: 60px 0;
  }
`;

const ContentWrap = styled.div`
  max-width: 750px;
  width: 100%;
  padding: 24px;
  margin: auto;
  border-radius: 20px;
  border: 2px solid ${(props) => props.theme.colors.colorPrimary};
  box-shadow: 0 4px 16px ${(props) => props.theme.colors.colorPrimary}33; /* 20% opacity */

  @media (min-width: 768px) {
    padding: 40px;
    border-width: 3px;
  }
`;

const Heading = styled.h2`
  font-size: 26px;
  font-weight: 700;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.colorPrimary};
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const SubHeading = styled.p`
  font-size: 18px;
  color: #cdad7e;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 32px;
  }
`;

const FormContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: left;
`;

const StyledInput = styled(Input)`
  height: 44px;
  font-size: 16px;
  border-radius: 8px;

  &:focus,
  &:hover {
    border-color: ${(props) => props.theme.colors.colorPrimary};
    box-shadow: 0 0 6px ${(props) => props.theme.colors.colorPrimary}66;
  }
`;

const StyledButton = styled.button`
  padding: 8px 28px;
  border-radius: 8px;
  font-weight: 600;
  border: 1.5px solid ${(props) => props.theme.colors.colorPrimary};
  color: ${(props) => props.theme.colors.colorPrimary};
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  min-width: 120px;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.colorPrimary};
    color: #fff;
    border-color: ${(props) => props.theme.colors.colorPrimary};
  }

  @media (min-width: 768px) {
    padding: 6px 36px;
    font-size: 18px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 28px;
  text-align: center;
`;
