import React from "react";
import { useParams, Link } from "react-router-dom";
import { Spin, Alert, Card, Button } from "antd";
import styled from "styled-components";
import { useRegistrationDetails } from "../../hooks/use-queries";
import { scholarshipTypeLabels } from "../../components/registration-form";

export function formatPhoneWithCountryCode(phone: string): string {
  let display = phone;
  if (!phone) return "";
  if (phone.startsWith("00")) {
    display = "+" + phone.slice(2);
  } else if (phone.startsWith("+")) {
    display = phone;
  } else if (/^\d+$/.test(phone)) {
    let code = "";
    let number = "";
    if (phone.length > 10) {
      code = phone.slice(0, phone.length - 10);
      number = phone.slice(phone.length - 10);
    } else {
      number = phone;
    }
    display = code ? `+${code} ${number}` : number;
  }
  return display;
}

const RegistrationDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useRegistrationDetails(id);

  if (isLoading)
    return (
      <Centered>
        <Spin tip="Loading..." />
      </Centered>
    );
  if (isError || !data) {
    console.error("Registration details error:", error);
    return (
      <Alert type="error" message="Failed to load registration details." />
    );
  }

  return (
    <Wrapper>
      <Card
        title="Registration Details"
        extra={
          <Button type="link">
            <Link to="/dashboard/registrations">Back to List</Link>
          </Button>
        }
      >
        <DetailList>
          <li>
            <strong>First Name:</strong> {data.firstName}
          </li>
          <li>
            <strong>Last Name:</strong> {data.lastName}
          </li>
          <li>
            <strong>Age:</strong> {data.age}
          </li>
          <li>
            <strong>Gender:</strong> {data.gender}
          </li>
          <li>
            <strong>Email:</strong> {data.email}
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            {formatPhoneWithCountryCode(data.phone || "")}
          </li>
          <li>
            <strong>Religion:</strong> {data.religion}
          </li>
          <li>
            <strong>Native Language:</strong> {data.nativeLanguage}
          </li>
          <li>
            <strong>Known Languages:</strong>{" "}
            {Array.isArray(data.knownLanguage)
              ? data.knownLanguage.join(", ")
              : data.knownLanguage}
          </li>
          <li>
            <strong>Guardian Name:</strong> {data.guardianName}
          </li>
          <li>
            <strong>Relationship:</strong> {data.relationship}
          </li>
          <li>
            <strong>Faculty:</strong> {data.faculty}
          </li>
          <li>
            <strong>Course:</strong> {data.course}
          </li>
          <li>
            <strong>Availability:</strong> {data.availability}
          </li>
          <li>
            <strong>Timing:</strong> {data.timing}
          </li>
          <li>
            <strong>Country:</strong> {data.country}
          </li>
          <li>
            <strong>Scholarship Type:</strong>{" "}
            {data.scholarshipType
              ? scholarshipTypeLabels[data.scholarshipType] ||
                data.scholarshipType
              : "-"}
          </li>
          <li>
            <strong>Scholarship Reason:</strong> {data.scholarshipReason || "-"}
          </li>
          <li>
            <strong>Created At:</strong>{" "}
            {new Date(data.createdAt).toLocaleString()}
          </li>
          <li>
            <strong>Updated At:</strong>{" "}
            {new Date(data.updatedAt).toLocaleString()}
          </li>
        </DetailList>
      </Card>
    </Wrapper>
  );
};

export default RegistrationDetails;

const Wrapper = styled.div`
  max-width: 700px;
  margin: 40px auto;
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    margin-bottom: 12px;
    font-size: 1rem;
  }
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;
