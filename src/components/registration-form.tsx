import { useState } from "react";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import CountryList from "./country-list";
import {
  facultyOptions,
  genderOptions,
  languageOptions,
  timingOptions,
} from "../constants/registration";
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
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const { Option } = Select;
const { TextArea } = Input;

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
      onSuccess: () => {
        message.success("Registration successful!");
        form.resetFields();
        setCourses([]);
      },
      onError: (err: any) =>
        message.error(
          err?.response?.data?.message || err.message || "Registration failed"
        ),
    });
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
          <CountryList
            name="country"
            value={form.getFieldValue("country")}
            onChange={(val) => form.setFieldsValue({ country: val })}
          />
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
          rules={[
            { required: true, message: "Please enter your WhatsApp number" },
            {
              validator: (_, value) => {
                try {
                  const phoneNumber = parsePhoneNumberFromString("+" + value);
                  if (!phoneNumber || !phoneNumber.isValid()) {
                    return Promise.reject(
                      "Invalid phone number for selected country"
                    );
                  }
                  return Promise.resolve();
                } catch {
                  return Promise.reject("Invalid phone number format");
                }
              },
            },
          ]}
        >
          <PhoneInput
            country={"in"}
            enableSearch
            countryCodeEditable={false}
            inputStyle={{ width: "100%" }}
            containerStyle={{ width: "100%" }}
            specialLabel=""
            value={form.getFieldValue("phone")}
            onChange={(value) => {
              form.setFieldsValue({ phone: value });
            }}
            inputProps={{
              name: "phone",
              required: true,
              id: "phoneInput",
              autoComplete: "off",
            }}
          />
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
          <Checkbox>Do you want to apply for a scholarship?</Checkbox>
        </Form.Item>

        <Form.Item
          shouldUpdate={(prev, curr) =>
            prev.applyForScholarship !== curr.applyForScholarship
          }
        >
          {({ getFieldValue }) =>
            getFieldValue("applyForScholarship") && (
              <>
                <Form.Item
                  name="scholarshipType"
                  label="Scholarship Type"
                  rules={[{ required: true }]}
                >
                  <Select placeholder="Select scholarship type">
                    <Option value="meritBased">Merit-Based</Option>
                    <Option value="siblingScholarship">
                      Sibling Scholarship
                    </Option>
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
            )
          }
        </Form.Item>

        <AntButton
          type="primary"
          htmlType="submit"
          loading={registrationMutation.isPending}
        >
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
