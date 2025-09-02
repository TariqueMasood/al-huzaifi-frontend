import styled from "styled-components";
import bgImg from "../../src/images/fazilat-5.png";
import { Col, Row } from "antd";
import CourseDescriptionSection from "../components/course-description-section";
import CourseDetailsCard from "../components/course-details-card";
import HeroSection from "../components/hero-section";
import PageHeader from "../components/page-header";
import Container from "../components/ui/container";

const descriptionSections = [
  {
    heading: "Course Objective",
    content: (
      <p>
        The <strong>Fazilat in Islamic Finance</strong> aims to equip students
        with an in-depth understanding of the principles and practices of
        Islamic finance, in accordance with Shariah law. The program is designed
        to offer students comprehensive knowledge of Islamic economic
        principles, financial instruments, risk management, and corporate
        governance within the framework of Islamic jurisprudence. By combining
        theoretical studies with practical applications, this program prepares
        students for careers in Islamic financial institutions, as well as for
        academic research in the field.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The <strong>Fazilat in Islamic Finance</strong> offers a comprehensive
          and structured curriculum that spans four semesters over two years.
          This program equips students with both theoretical knowledge and
          practical skills, preparing them for careers in the growing field of
          Islamic finance. Key areas of focus include:
        </p>
        <ol>
          <li>
            <strong>
              Principles of Islamic Economics (مبادئ الاقتصاد الإسلامي):
            </strong>
            <br />
            This course introduces the foundations of Islamic economics,
            including the core principles that differentiate it from
            conventional economics. Topics include the concept of economic
            justice, wealth distribution, and ethical guidelines for economic
            activity in Islam.
          </li>
          <li>
            <strong>Islamic Commercial Law (القانون التجاري الإسلامي):</strong>
            <br />A study of the legal framework that governs commercial
            transactions in Islam. The course focuses on contracts, sales,
            leasing, and other commercial dealings, ensuring they comply with
            Shariah law.
          </li>
          <li>
            <strong>Money and Banking (النقود والمصارف):</strong>
            <br />
            An examination of monetary systems and the role of Islamic banking
            within the financial sector. This course covers the unique
            mechanisms of Islamic banks, such as profit-sharing (Mudharabah) and
            leasing (Ijara), and how they differ from conventional banking
            practices.
          </li>
          <li>
            <strong>
              Financial Investment Theory (نظرية الاستثمار المالي):
            </strong>
            <br />A detailed analysis of investment strategies in Islamic
            finance, focusing on the prohibition of interest (Riba) and
            speculative transactions (Gharar). Students will learn how Islamic
            financial institutions structure investments and manage portfolios
            while adhering to Shariah principles.
          </li>
          <li>
            <strong>
              Fundamentals of Islamic Finance (أساسيات التمويل الإسلامي):
            </strong>
            <br />
            An overview of Islamic finance, including the key concepts, models,
            and instruments used in the Islamic financial system. This course
            lays the groundwork for understanding how Islamic finance operates
            in today's global economy.
          </li>
          <li>
            <strong>
              Islamic Financial Institutions (المؤسسات المالية الإسلامية):
            </strong>
            <br />
            This module explores the structure and functions of various Islamic
            financial institutions, such as banks, investment firms, and Takaful
            (Islamic insurance) companies. Students will learn about the
            governance and operational strategies unique to these institutions.
          </li>
          <li>
            <strong>
              Risk Management in Islamic Finance (إدارة المخاطر في التمويل
              الإسلامي):
            </strong>
            <br />
            This course covers the principles and practices of risk management
            within Islamic financial institutions. Topics include managing
            financial risk in compliance with Shariah and understanding the role
            of risk-sharing in Islamic finance contracts.
          </li>
          <li>
            <strong>Shariah Governance (الحوكمة الشرعية):</strong>
            <br />A comprehensive study of corporate governance from an Islamic
            perspective. This course focuses on the role of Shariah boards,
            governance structures, and the ethical standards required in Islamic
            finance to ensure compliance with religious principles.
          </li>
          <li>
            <strong>
              Companies in Islamic Jurisprudence (الشركات في الفقه الإسلامي):
            </strong>
            <br />A detailed study of how companies and corporate structures are
            governed by Islamic law. Students will explore different types of
            partnerships and companies recognized by Islamic jurisprudence and
            their legal implications.
          </li>
          <li>
            <strong>
              The Concept of Takaful in Islam (نظرية التكافل في الإسلام):
            </strong>
            <br />
            An exploration of the Islamic insurance model, Takaful, which is
            based on mutual cooperation and shared responsibility. The course
            covers the historical development of Takaful, its operational
            mechanisms, and its role in the modern financial system.
          </li>
          <li>
            <strong>
              Principles of Statistics and Mathematics (مبادئ الإحصاء
              والرياضيات):
            </strong>
            <br />
            This course provides students with the quantitative tools needed to
            analyze financial data. It covers statistical techniques and
            mathematical models used in financial analysis, tailored for Islamic
            finance professionals.
          </li>
          <li>
            <strong>
              Principles of Management and Accounting (مبادئ الإدارة والمحاسبة):
            </strong>
            <br />A study of the basic principles of management and accounting,
            with a focus on Islamic financial institutions. Students will learn
            how to manage operations, financial reporting, and performance
            evaluation in accordance with Islamic ethical standards.
          </li>
          <li>
            <strong>
              Research Methodology and Thesis (مناهج البحث والرسالة):
            </strong>
            <br />A research-focused course where students will develop their
            research skills, with emphasis on Islamic finance topics. Students
            will conduct independent research, culminating in a thesis that
            contributes to the academic and professional field of Islamic
            finance.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>
          Upon successful completion of the Fazilat in Islamic Finance, students
          will:
        </p>{" "}
        <ol>
          <li>
            Acquire a thorough understanding of the core principles of Islamic
            finance and how they differ from conventional financial systems.
          </li>
          <li>
            Develop expertise in Islamic banking, investment, and insurance,
            with a strong focus on compliance with Shariah law.
          </li>
          <li>
            Understand the role of risk management and corporate governance
            within Islamic financial institutions and apply these principles in
            real-world scenarios.
          </li>
          <li>
            Analyze and evaluate the structures of Islamic financial
            institutions, including banks, Takaful companies, and investment
            firms.
          </li>
          <li>
            Gain proficiency in financial analysis and decision-making using
            Islamic principles and ethical guidelines.
          </li>
          <li>
            Conduct advanced research in Islamic finance, contributing to the
            academic and professional discourse in this growing field.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>The Fazilat in Islamic Finance is ideal for:</p>
        <ol>
          <li>
            <strong>Finance Professionals: </strong>Individuals working in the
            financial sector who wish to specialize in Islamic finance and
            understand its principles and practices.
          </li>
          <li>
            <strong>Aspiring Islamic Finance Specialists: </strong>
            Students who aim to pursue a career in Islamic banking, investment,
            or insurance.
          </li>
          <li>
            <strong>Islamic Financial Scholars: </strong>
            Scholars interested in contributing to the development of Islamic
            finance through research and thought leadership.
          </li>
          <li>
            <strong>Business and Finance Graduates: </strong>Graduates looking
            to enhance their knowledge of Islamic finance and apply its
            principles in their professional careers.
          </li>
          <li>
            <strong>Entrepreneurs and Business Owners: </strong>
            Individuals who want to establish or manage businesses in accordance
            with Islamic finance principles.
          </li>
        </ol>
        <p>
          By the end of the course, students will have mastered the key
          principles of Islamic finance, enabling them to navigate the
          complexities of Islamic banking, investment, and risk management. They
          will be prepared to contribute to the growing field of Islamic
          finance, whether through professional practice or academic research,
          ensuring that financial activities are conducted in line with ethical
          and religious guidelines.
        </p>
      </>
    ),
  },
];

export const FazilatInIslamicFinancePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Fazilat in Islamic Finance Image" />

      <Wrapper>
        <Container>
          <PageHeader
            title="Fazilat in Islamic Finance"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Fazilat in Islamic Finance"
                courseCode="FZL05"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Full Time / Part Time"
                duration="4 Semesters"
                entryRequirement=" Must have successfully completed the Alim Course (ALM01 /
                  ALM02) or an equivalent course with proficiency in English
                  language"
                deadline="Fall & Spring Semester"
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 40px 0;
`;
