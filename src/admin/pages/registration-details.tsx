import React from "react";
import { useParams, Link } from "react-router-dom";
import { Spin, Alert, Card, Button, Row, Col, Typography, Avatar } from "antd";
import styled from "styled-components";
import { useRegistrationDetails } from "../../hooks/use-queries";
import { scholarshipTypeLabels } from "../../components/registration-form";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { DownloadOutlined, PrinterOutlined } from "@ant-design/icons";
import html2pdf from "html2pdf.js";

const { Title } = Typography;

export function formatPhoneWithCountryCode(phone: string): string {
  if (!phone) return "";
  try {
    const parsed = parsePhoneNumberFromString(
      "+" + phone.replace(/[^0-9]/g, "")
    );
    if (parsed && parsed.isValid()) {
      return `+${parsed.countryCallingCode} ${parsed.nationalNumber}`;
    }
  } catch (e) {
    console.warn("Phone formatting failed:", e);
  }
  return phone;
}

const RegistrationDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useRegistrationDetails(id);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    const element = document.getElementById("printable-area");
    if (!element) return;

    html2pdf()
      .set({
        margin: 0.5,
        filename: `registration-${id}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(element)
      .save();
  };

  if (isLoading)
    return (
      <Centered>
        <Spin tip="Loading..." />
      </Centered>
    );

  if (isError || !data) {
    console.error("Registration details error:", error);
    return (
      <Centered>
        <Alert type="error" message="Failed to load registration details." />
      </Centered>
    );
  }

  const renderItem = (label: string, value: React.ReactNode) => (
    <Col xs={24} sm={12} md={12} lg={12} key={label}>
      <Item>
        <strong>{label}:</strong> {value || "-"}
      </Item>
    </Col>
  );

  return (
    <Wrapper>
      <StyledCard
        title="Registration Details"
        extra={
          <Button type="link">
            <Link to="/dashboard/registrations">← Back to List</Link>
          </Button>
        }
      >
        <HeaderBar>
          <Button icon={<PrinterOutlined />} onClick={handlePrint}>
            Print
          </Button>
          <Button icon={<DownloadOutlined />} onClick={handleDownload}>
            Download
          </Button>
        </HeaderBar>

        <PrintSection id="printable-area">
          <Row gutter={[16, 16]}>
            {renderItem(
              "Name",
              `${data.firstName || ""} ${data.lastName || ""}`.trim()
            )}
            {renderItem("Age", data.age)}
            {renderItem("Gender", data.gender)}
            {renderItem("Email", data.email)}
            {renderItem("Phone", formatPhoneWithCountryCode(data.phone || ""))}
            {renderItem("Country", data.country)}
            {renderItem("Faculty", data.faculty)}
            {renderItem("Course", data.course)}
            {renderItem("Availability", data.availability)}
            {renderItem("Timing", data.timing)}
            {renderItem("Guardian Name", data.guardianName)}
            {renderItem("Relationship", data.relationship)}
            {renderItem("Religion", data.religion)}
            {renderItem("Native Language", data.nativeLanguage)}
            {renderItem(
              "Known Languages",
              Array.isArray(data.knownLanguage)
                ? data.knownLanguage.join(", ")
                : data.knownLanguage
            )}
            {renderItem(
              "Scholarship Type",
              data.scholarshipType
                ? scholarshipTypeLabels[data.scholarshipType] ||
                    data.scholarshipType
                : "-"
            )}
            {renderItem("Scholarship Reason", data.scholarshipReason)}
            {renderItem(
              "Created At",
              new Date(data.createdAt).toLocaleString()
            )}
            {renderItem(
              "Updated At",
              new Date(data.updatedAt).toLocaleString()
            )}
          </Row>
        </PrintSection>
      </StyledCard>
    </Wrapper>
  );
};

export default RegistrationDetails;

// Styled Components
const Wrapper = styled.div`
  padding: 40px 1rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const StyledCard = styled(Card)`
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
`;

const Item = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

const HeaderBar = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const PrintSection = styled.div`
  @media print {
    button,
    .ant-card-extra {
      display: none !important;
    }
  }
`;
