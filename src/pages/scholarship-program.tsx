import styled from "styled-components";
import bgImg from "../../src/images/scholarship-bg-img.jpeg";
import PageHeader from "../components/page-header";
import HeroSection from "../components/hero-section";
import Container from "../components/ui/container";
import CourseDescriptionSection from "../components/course-description-section";

const descriptionSections = [
  {
    heading: "Breaking Financial Barriers to Islamic Knowledge",
    content: (
      <>
        <p>
          At <strong>Al-Huzaifi Academy</strong>, our mission is to spread the
          light of Islamic knowledge far and wide, and we firmly believe that
          financial limitations should never be a reason for someone to be
          deprived of learning. To support this goal, we have established a
          comprehensive scholarship program that caters to students from all
          backgrounds, ensuring that everyone who is passionate about gaining
          Islamic education has the opportunity to do so.
          <br />
          Our scholarship program is not just about financial assistance—it's
          about empowering students, rewarding dedication, and nurturing a love
          for Islamic learning. Whether you are facing financial challenges or
          have proven your academic excellence, we have scholarship
          opportunities tailored for you.
        </p>
        <h5>Scholarships Offered:</h5>
        <br />
        <h5>1. Merit-Based Scholarship:</h5>
        <p>
          <strong>Purpose: </strong>To reward students who have shown
          exceptional academic performance in their previous studies.
        </p>
        <p>
          <strong>Eligibility: </strong>Students applying for this scholarship
          must demonstrate high academic achievements, consistent class
          attendance, and active participation in academy activities.
        </p>
        <h5>Key Features:</h5>
        <ul>
          <li>
            Awarded to students who stand out for their academic excellence.
          </li>
          <li>
            Helps motivate students to continue excelling in their studies.
          </li>
          <li>
            These scholarships recognize hard work, discipline, and consistent
            effort in the pursuit of knowledge.
          </li>
        </ul>
        <h5>2. Sibling Scholarship:</h5>
        <p>
          <strong>Purpose:</strong> To assist families who are committed to
          enrolling multiple children in the academy.
        </p>
        <p>
          <strong>Eligibility:</strong> Families with more than one child
          enrolled at the academy are eligible for this scholarship, aimed at
          reducing the financial strain of tuition fees.
        </p>
        <h5>Key Features:</h5>
        <ul>
          <li>
            Discount on tuition fees for siblings, making it easier for parents
            to afford quality Islamic education for all their children.
          </li>
          <li>
            Supports family values and encourages parents to provide religious
            education to all their children without financial worry.
          </li>
        </ul>
        <h5>3. Special Circumstances Scholarship:</h5>
        <p>
          <strong>Purpose: </strong>To support students facing extraordinary
          situations such as health challenges, family emergencies, or other
          unexpected hardships.
        </p>
        <p>
          <strong>Eligibility: </strong>Each case is reviewed individually, and
          the scholarship is tailored to meet the unique needs of the student.
        </p>
        <h5>Key Features:</h5>
        <ul>
          <li>
            Financial relief for students facing difficult circumstances beyond
            their control.
          </li>
          <li>
            A flexible scholarship program that considers special cases and
            offers a helping hand to those in need during tough times.
          </li>
        </ul>
        <h5>Application Process:</h5>
        <p>
          Applying for a scholarship at Al-Huzaifi Academy is a simple and
          integrated process:
        </p>
        <h5>1. Admission Registration:</h5>
        <ul>
          <li>
            When registering for admission on our website, you will find a
            section dedicated to scholarships as part of the registration pages.
          </li>
          <li>
            Fill out this section during the registration process, providing the
            necessary details about your financial situation or academic
            background based on the type of scholarship you are applying for
            (Merit-Based, Sibling, or Special Circumstances).
          </li>
          <li>
            Ensure that you provide accurate and honest information to help us
            evaluate your eligibility for the scholarship.
          </li>
        </ul>
        <h5>2. Interview / Assessment:</h5>
        <ul>
          <li>
            After successfully completing your registration, students opted for
            Special Circumstance Scholarship may be invited to attend an
            interview for clarification. This will help us better understand
            your needs, commitment to learning, and suitability for the
            scholarship.
          </li>
          <li>
            The interview or assessment may focus on your academic performance,
            financial situation, and future goals in Islamic education.
          </li>
        </ul>
        <h5>3. Approval and Notification:</h5>
        <ul>
          <li>
            Once the application process is complete, successful applicants will
            be notified by email or phone.
          </li>
          <li>
            You will receive an official approval letter outlining the
            scholarship amount, any terms and conditions, and other relevant
            details.
          </li>
          <li>
            The awarded scholarship will be valid for the upcoming academic
            term.
          </li>
        </ul>
        <h5>Terms and Conditions-</h5>
        <p>
          <strong>Scholarship Duration: </strong>Scholarships are granted for
          one academic term initially. However, based on your performance,
          attendance, and continued financial need, scholarships can be renewed.
        </p>
        <p>
          <strong>Academic Performance: </strong>Recipients are required to
          maintain satisfactory academic progress to retain their scholarship.
        </p>
        <p>
          <strong>Code of Conduct: </strong>All scholarship recipients must
          adhere to the academy's rules and guidelines, ensuring that their
          behavior and academic performance reflect the values of the academy.
        </p>
        <p>
          <strong>Scholarship Availability: </strong>The availability of
          scholarships is subject to the academy's resources and budget.
          Scholarships are awarded based on the discretion of the academy.
        </p>
        <h5>How Scholarships Benefit Students?</h5>
        <p>
          <strong>Reduction of Financial Pressure: </strong>Scholarships can
          significantly reduce or even cover the entire cost of tuition fees,
          allowing students to focus on their studies without the burden of
          financial stress.
        </p>
        <p>
          <strong>Motivation and Encouragement: </strong>Scholarships recognize
          academic excellence, dedication, and commitment. This motivates
          students to continue striving for their best in both academic and
          personal growth.
        </p>
        <p>
          <strong>Inclusive and Accessible Education: </strong>By offering
          scholarships, Al-Huzaifi Academy is taking a step towards making
          Islamic education accessible to all, ensuring that financial barriers
          do not limit a student's potential.
        </p>
        <h5>Contact Information-</h5>
        <p>
          If you need more information or assistance with the scholarship
          application process, please don't hesitate to contact our support team
          at:{" "}
          <a
            href="mailto:info@alhuzaifi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@alhuzaifi.com
          </a>
          . We are here to guide you and ensure that your pursuit of Islamic
          knowledge is not hindered by financial challenges.
        </p>
      </>
    ),
  },
];

export const ScholarshipProgramPage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Scholarship Program Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Scholarship Program"
            subtitle="Al-Huzaifi Academy"
          />
          <CourseDescriptionSection sections={descriptionSections} />
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 40px 0;
`;
