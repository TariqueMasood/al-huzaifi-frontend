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
import {
  parsePhoneNumberFromString,
  getExampleNumber,
  CountryCode,
} from "libphonenumber-js";
import examples from "libphonenumber-js/examples.mobile.json";
import { CountryData } from "react-phone-input-2";

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
        <RowWrap>
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true, message: "First Name is required" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true, message: "Last Name is required" }]}
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
                message: "Age is required and must be a number",
              },
            ]}
          >
            <Input type="number" placeholder="Age" />
          </Form.Item>
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
        </RowWrap>

        <Form.Item
          name="phone"
          label="WhatsApp Number"
          rules={[
            {
              required: true,
              message: "Please enter your WhatsApp number",
            },
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
              event: React.ChangeEvent<HTMLInputElement>,
              formattedValue: string
            ) => {
              const newCountryCode =
                "countryCode" in country ? country.countryCode : "in";

              // If country changed, reset the phone value and clear the touched flag
              if (selectedCountry !== newCountryCode) {
                setSelectedCountry(newCountryCode);
                setPhoneTouched(false); // avoid showing validation error
                form.setFieldsValue({ phone: "" }); // clear input field
                return;
              }

              // Now user is typing (same country), allow validation
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

        <RowWrap>
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

          <Form.Item
            name="nativeLanguage"
            label="Native Language"
            rules={[{ required: true, message: "Native Language is required" }]}
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
        </RowWrap>

        <RowWrap>
          <Form.Item
            name="guardianName"
            label="Guardian Name"
            rules={[{ required: true, message: "Guardian Name is required" }]}
          >
            <Input placeholder="Guardian Name" />
          </Form.Item>

          <Form.Item
            name="relationship"
            label="Relationship"
            rules={[{ required: true, message: "Relationship is required" }]}
          >
            <Input placeholder="Relationship" />
          </Form.Item>
        </RowWrap>

        <RowWrap>
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
        </RowWrap>

        <RowWrap>
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
                  label="Why deserve this scholarship?"
                  rules={[
                    {
                      required: true,
                      message:
                        "Scholarship reason is required when applying for a scholarship",
                    },
                  ]}
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
