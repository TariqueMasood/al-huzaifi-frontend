import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import CountryList from "./country-list"; // keep this or rewrite with AntD
import {
  facultyOptions,
  genderOptions,
  languageOptions,
  timingOptions,
} from "../constants/registration";
import * as Yup from "yup";
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button as AntButton,
  message,
} from "antd";
import { RegistrationPayload } from "../@types/registration";
import { useRegistrationMutation } from "../hooks/use-queries";

const { Option } = Select;
const { TextArea } = Input;

const validationSchema = Yup.object().shape({
  /* your existing validation schema */
});

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const [courses, setCourses] = useState<string[]>([]);
  const registrationMutation = useRegistrationMutation();

  const onFacultyChange = (value: keyof typeof facultyOptions) => {
    setCourses(facultyOptions[value] || []);
    form.setFieldsValue({ course: undefined });
  };

  const handleFinish = (values: any) => {
    registrationMutation.mutate(values as RegistrationPayload, {
      onSuccess: () => message.success("Registration successful!"),
      onError: (err: any) =>
        message.error(
          err?.response?.data?.message || err.message || "Registration failed"
        ),
    });
  };

  const validateForm = async () => {
    const values = await form.validateFields().catch((err) => {
      const errors = err.errorFields.reduce((acc: any, cur: any) => {
        acc[cur.name[0]] = cur.errors[0];
        return acc;
      }, {});
      return Promise.reject(errors);
    });
    return validationSchema.validate(values, { abortEarly: false });
  };

  return (
    <Wrapper>
      <FormHeading>Registration</FormHeading>
      <FormSubTitle>Please fill the form below to register</FormSubTitle>

      <FormWrapper form={form} layout="vertical" onFinish={handleFinish}>
        <RowWrap>
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
        </RowWrap>

        <RowWrap>
          <Form.Item
            name="age"
            label="Age"
            rules={[
              {
                required: true,
                type: "number",
                transform: (val) => Number(val),
              },
            ]}
          >
            <Input type="number" placeholder="Age" />
          </Form.Item>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select placeholder="Select gender">
              {genderOptions.map((g) => (
                <Option key={g} value={g}>
                  {g}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </RowWrap>

        <RowWrap>
          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true }]}
          >
            <CountryList
              name="country"
              value={form.getFieldValue("country")}
              onChange={(val) => form.setFieldsValue({ country: val })}
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
        </RowWrap>

        <Form.Item
          name="phone"
          label="WhatsApp Number"
          rules={[{ required: true }]}
        >
          <Input placeholder="Phone" />
        </Form.Item>

        <RowWrap>
          <Form.Item
            name="religion"
            label="Religion"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select religion">
              <Option value="Muslim">Muslim</Option>
              <Option value="Non-Muslim">Non-Muslim</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="nativeLanguage"
            label="Native Language"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select native language">
              {languageOptions.map((lang) => (
                <Option key={lang} value={lang}>
                  {lang}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="knownLanguage"
            label="Known Languages"
            rules={[{ required: true }]}
          >
            <Select mode="multiple" placeholder="Select known languages">
              {languageOptions.map((lang) => (
                <Option key={lang} value={lang}>
                  {lang}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </RowWrap>

        <RowWrap>
          <Form.Item
            name="guardianName"
            label="Guardian Name"
            rules={[{ required: true }]}
          >
            <Input placeholder="Guardian Name" />
          </Form.Item>

          <Form.Item
            name="relationship"
            label="Relationship"
            rules={[{ required: true }]}
          >
            <Input placeholder="Relationship" />
          </Form.Item>
        </RowWrap>

        <RowWrap>
          <Form.Item
            name="faculty"
            label="Faculty"
            rules={[{ required: true }]}
          >
            <Select onChange={onFacultyChange} placeholder="Select faculty">
              {Object.keys(facultyOptions).map((f) => (
                <Option key={f} value={f}>
                  {f}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="course" label="Course" rules={[{ required: true }]}>
            <Select placeholder="Select course">
              {courses.map((c) => (
                <Option key={c} value={c}>
                  {c}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </RowWrap>

        <RowWrap>
          <Form.Item
            name="availability"
            label="Availability"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select availability">
              <Option value="Weekdays">Weekdays</Option>
              <Option value="Weekend">Weekend</Option>
            </Select>
          </Form.Item>

          <Form.Item name="timing" label="Timing" rules={[{ required: true }]}>
            <Select placeholder="Select timing">
              {timingOptions.map((t) => (
                <Option key={t} value={t}>
                  {t}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </RowWrap>

        <Form.Item name="applyForScholarship" valuePropName="checked">
          <Checkbox>Apply for scholarship?</Checkbox>
        </Form.Item>

        {form.getFieldValue("applyForScholarship") && (
          <>
            <Form.Item
              name="scholarshipType"
              label="Scholarship Type"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select scholarship type">
                <Option value="meritBased">Merit-Based</Option>
                <Option value="siblingScholarship">Sibling Scholarship</Option>
                <Option value="specialCircumstances">
                  Special Circumstances
                </Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="scholarshipReason"
              label="Why deserve this scholarship?"
              rules={[{ required: true }]}
            >
              <TextArea rows={3} placeholder="Your reason..." />
            </Form.Item>
          </>
        )}

        <AntButton type="primary" htmlType="submit">
          Register
        </AntButton>
      </FormWrapper>
    </Wrapper>
  );
};

export default RegistrationForm;

const Wrapper = styled.div`
  padding: 60px 0;
`;

const FormHeading = styled.h3`
  font-weight: 600;
  padding-bottom: 30px;
`;

const FormSubTitle = styled.p`
  font-weight: 600;
  padding-bottom: 20px;
`;

const RowWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  ${mq("md")} {
    flex-wrap: wrap;
  }
`;

const FormWrapper = styled(Form)`
  max-width: 800px;
  margin: 0 auto;
`;

export const scholarshipTypeLabels: Record<string, string> = {
  meritBased: "Merit-Based",
  siblingScholarship: "Sibling Scholarship",
  specialCircumstances: "Special Circumstances",
};
