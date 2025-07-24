import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useRegisterMutation } from "../../hooks/use-auth";
import { message } from "antd";

const { Option } = Select;

const Login: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const loginMutation = useLoginMutation();
  const registerMutation = useRegisterMutation();

  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    const payload = {
      name: values.name || "",
      email: values.email,
      password: values.password,
      role: values.role || "user",
    };

    if (isRegister) {
      registerMutation.mutate(payload, {
        onSuccess: () => {
          message.success("Registration successful!");
          setIsRegister(false);
          form.resetFields();
        },
        onError: (error: any) => {
          message.error(error.response?.data?.message || "Registration failed");
        },
      });
    } else {
      loginMutation.mutate(payload, {
        onSuccess: (data: { token: string }) => {
          localStorage.setItem("token", data.token);
          navigate("/dashboard");
        },
        onError: (error: any) => {
          if (!error.response) {
            message.error(
              "Network error: Please check your internet connection."
            );
          } else {
            message.error(error.response.data?.message || "Login failed");
          }
        },
      });
    }
  };

  return (
    <PageContainer>
      <FormWrapper>
        <Title>{isRegister ? "Register" : "Login"}</Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ role: "user" }}
        >
          {isRegister && (
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>
          )}

          <Form.Item
            label="Email address"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input type="email" placeholder="Enter email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          {isRegister && (
            <Form.Item
              label="Role"
              name="role"
              rules={[{ required: true, message: "Please select a role" }]}
            >
              <Select>
                <Option value="admin">Admin</Option>
                <Option value="user">User</Option>
              </Select>
            </Form.Item>
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loginMutation.status === "pending"}
              disabled={loginMutation.status === "pending"}
            >
              {isRegister ? "Register" : "Login"}
            </Button>
          </Form.Item>
        </Form>

        {/* <ToggleText>
          {isRegister ? "Already registered? " : "Not registered yet? "}
          <Button type="link" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Login" : "Register"}
          </Button>
        </ToggleText> */}
      </FormWrapper>
    </PageContainer>
  );
};

export default Login;

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  width: 100%;
`;

const FormWrapper = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.colorPrimary};
  text-align: center;
  margin-bottom: 1.5rem;
`;
