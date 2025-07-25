import { useState } from "react";
import styled from "styled-components";
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button as AntButton,
  Row,
  Col,
  message,
} from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  parsePhoneNumberFromString,
  getExampleNumber,
  CountryCode,
} from "libphonenumber-js";
import examples from "libphonenumber-js/examples.mobile.json";
import { CountryData } from "react-phone-input-2";

import CountryList from "./country-list";
import { useRegistrationMutation } from "../hooks/use-queries";
import {
  facultyOptions,
  genderOptions,
  languageOptions,
  timingOptions,
} from "../constants/registration";
import { RegistrationPayload } from "../@types/registration";

const { Option } = Select;
const { TextArea } = Input;

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const [courses, setCourses] = useState<string[]>([]);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("in");

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
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[{ required: true, message: "First Name is required" }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[{ required: true, message: "Last Name is required" }]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Form.Item
              name="age"
              label="Age"
              rules={[
                {
                  required: true,
                  type: "number",
                  transform: (val) => Number(val),
                  message: "Age is required and must be a number",
                },
              ]}
            >
              <Input type="number" placeholder="Age" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true, message: "Gender is required" }]}
            >
              <Select placeholder="Select gender">
                {genderOptions.map((g) => (
                  <Option key={g} value={g}>
                    {g}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <CountryList
              name="country"
              value={form.getFieldValue("country")}
              onChange={(val) => form.setFieldsValue({ country: val })}
            />
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="phone"
          label="WhatsApp Number"
          rules={[
            { required: true, message: "Please enter your WhatsApp number" },
            {
              validator: (_, value) => {
                if (!phoneTouched || !value) return Promise.resolve();
                try {
                  const phoneNumber = parsePhoneNumberFromString("+" + value);
                  if (!phoneNumber?.isValid()) {
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
            country={selectedCountry}
            enableSearch
            countryCodeEditable={false}
            inputStyle={{ width: "100%" }}
            containerStyle={{ width: "100%" }}
            specialLabel=""
            value={form.getFieldValue("phone")}
            onChange={(
              value: string,
              country: CountryData | {},
              _,
              formattedValue: string
            ) => {
              const newCountryCode =
                "countryCode" in country ? country.countryCode : "in";

              if (selectedCountry !== newCountryCode) {
                setSelectedCountry(newCountryCode);
                setPhoneTouched(false);
                form.setFieldsValue({ phone: "" });
                return;
              }

              setPhoneTouched(value.length > 0);

              const example = getExampleNumber(
                newCountryCode.toUpperCase() as CountryCode,
                examples
              );
              const maxLength = example?.nationalNumber.length || 15;

              const digitsOnly = value.replace(/\D/g, "");
              if (digitsOnly.length <= maxLength) {
                form.setFieldsValue({ phone: value });
              }
            }}
            inputProps={{
              name: "phone",
              id: "phoneInput",
              autoComplete: "off",
            }}
          />
        </Form.Item>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Form.Item
              name="religion"
              label="Religion"
              rules={[{ required: true, message: "Religion is required" }]}
            >
              <Select placeholder="Select religion">
                <Option value="Muslim">Muslim</Option>
                <Option value="Non-Muslim">Non-Muslim</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} md={8}>
            <Form.Item
              name="nativeLanguage"
              label="Native Language"
              rules={[
                { required: true, message: "Native Language is required" },
              ]}
            >
              <Select placeholder="Select native language">
                {languageOptions.map((lang) => (
                  <Option key={lang} value={lang}>
                    {lang}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} md={8}>
            <Form.Item
              name="knownLanguage"
              label="Known Languages"
              rules={[
                {
                  required: true,
                  message: "At least one known language must be selected",
                },
              ]}
            >
              <Select mode="multiple" placeholder="Select known languages">
                {languageOptions.map((lang) => (
                  <Option key={lang} value={lang}>
                    {lang}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Form.Item
              name="guardianName"
              label="Guardian Name"
              rules={[{ required: true, message: "Guardian Name is required" }]}
            >
              <Input placeholder="Guardian Name" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              name="relationship"
              label="Relationship"
              rules={[{ required: true, message: "Relationship is required" }]}
            >
              <Input placeholder="Relationship" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Form.Item
              name="faculty"
              label="Faculty"
              rules={[{ required: true, message: "Faculty is required" }]}
            >
              <Select onChange={onFacultyChange} placeholder="Select faculty">
                {Object.keys(facultyOptions).map((f) => (
                  <Option key={f} value={f}>
                    {f}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              name="course"
              label="Course"
              rules={[{ required: true, message: "Course is required" }]}
            >
              <Select placeholder="Select course">
                {courses.map((c) => (
                  <Option key={c} value={c}>
                    {c}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Form.Item
              name="availability"
              label="Availability"
              rules={[{ required: true, message: "Availability is required" }]}
            >
              <Select placeholder="Select availability">
                <Option value="Weekdays">Weekdays</Option>
                <Option value="Weekend">Weekend</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              name="timing"
              label="Timing"
              rules={[{ required: true, message: "Timing is required" }]}
            >
              <Select placeholder="Select timing">
                {timingOptions.map((t) => (
                  <Option key={t} value={t}>
                    {t}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

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
                  rules={[
                    {
                      required: true,
                      message: "Please select a scholarship type",
                    },
                  ]}
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
                  label="Why do you deserve this scholarship?"
                  rules={[
                    {
                      required: true,
                      message: "Please explain your scholarship reason",
                    },
                  ]}
                >
                  <TextArea rows={3} placeholder="Your reason..." />
                </Form.Item>
              </>
            )
          }
        </Form.Item>

        <SubmitButtonWrapper>
          <AntButton
            type="primary"
            htmlType="submit"
            size="large"
            block
            loading={registrationMutation.isPending}
          >
            Register
          </AntButton>
        </SubmitButtonWrapper>
      </FormWrapper>
    </Wrapper>
  );
};

export default RegistrationForm;

const Wrapper = styled.div`
  padding: 60px 1rem;
  background-color: #fafafa;
`;

const FormHeading = styled.h2`
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
`;

const FormSubTitle = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 30px;
`;

const FormWrapper = styled(Form)`
  max-width: 900px;
  margin: 0 auto;
  background: #fff;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
`;

const SubmitButtonWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
`;

export const scholarshipTypeLabels: Record<string, string> = {
  meritBased: "Merit-Based",
  siblingScholarship: "Sibling Scholarship",
  specialCircumstances: "Special Circumstances",
};
