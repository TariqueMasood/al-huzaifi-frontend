import React from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import { mq } from "../styles/breakpoints";
// import Title from "./title"; // assuming you're still using Title component

export const GetInTouch = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form submitted: ", values);
    // Submit logic here
  };

  return (
    <Wrapper>
      <Container>
        <ContentWrap>
          <Heading>get in touch</Heading>
          <SubHeading>
            Get daily updates, Upcoming Events and Courses!
          </SubHeading>
          <FormContainer>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
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
                <StyledButton htmlType="submit">Submit</StyledButton>
              </ButtonWrapper>
            </Form>
          </FormContainer>
        </ContentWrap>
      </Container>
    </Wrapper>
  );
};

export default GetInTouch;

// Styled Components

const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 0 16px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 20px 0px;

  ${mq("sm")} {
    padding: 30px 0px;
  }

  ${mq("md")} {
    padding: 60px 0px;
  }
`;

const Heading = styled.div`
  font-size: 22px;
  font-weight: 600;
  text-transform: capitalize;
  color: #137c8f;

  ${mq("sm")} {
    font-size: 26px;
    font-weight: 700;
  }

  ${mq("md")} {
    font-size: 32px;
    font-weight: 700;
  }
`;

const SubHeading = styled.div`
  font-size: 16px;
  color: #cdad7e;

  ${mq("sm")} {
    font-size: 18px;
    padding: 12px 0px;
    font-weight: 500;
  }

  ${mq("md")} {
    font-size: 22px;
    padding: 20px 0px;
    font-weight: 600;
  }
`;

const ContentWrap = styled.div`
  max-width: 750px;
  margin: auto;
  padding: 7px;
  border-radius: 20px;
  border: 1px solid #137c8f;

  ${mq("sm")} {
    padding: 20px;
    border: 2px solid #137c8f;
  }

  ${mq("md")} {
    padding: 30px;
    border: 3px solid #137c8f;
  }
`;

const FormContainer = styled.div`
  max-width: 700px;
  margin: auto;
  text-align: left;
`;

const StyledInput = styled(Input)`
  height: 40px;
  font-size: 16px;
`;

const StyledButton = styled(Button)`
  padding: 6px 24px;
  border: 1px solid #137c8f;
  color: #137c8f;
  background-color: #ffffff;
  border-radius: 8px;
  transition: all ease-in 0.4s;

  &:hover {
    background-color: #137c8f;
    color: #fff;
  }

  ${mq("md")} {
    padding: 9px 36px;
    font-size: 18px;
    font-weight: 600;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 24px;
  text-align: center;
`;
