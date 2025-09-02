import { Form, Input, Select, Row, Col } from "antd";
import styled from "styled-components";
import bgImg from "../../src/images/darul-ifta.png";
import HeroSection from "../components/hero-section";
import PageHeader from "../components/page-header";
import Container from "../components/ui/container";
import CourseDescriptionSection from "../components/course-description-section";
import { genderOptions } from "../constants/registration";

const { Option } = Select;

const descriptionSections = [
  // {
  //   heading: "Darul Ifta Question Submission Form",
  //   content: (
  //     <>
  //       <p>
  //         The Darul-Ifta at Al-Huzaifi Academy serves as a beacon of Islamic
  //         jurisprudence, offering trusted and reliable religious verdicts
  //         (fatwas) to Muslims around the world. Our mission is to provide clear
  //         and authentic guidance on Islamic rulings, ensuring that individuals,
  //         families, and communities can navigate their lives in accordance with
  //         the teachings of Islam in a modern context. Whether addressing
  //         traditional queries or contemporary issues, Darul-Ifta is committed to
  //         offering scholarly advice grounded in the Quran, Sunnah, and the
  //         established schools of Islamic jurisprudence.
  //       </p>
  //     </>
  //   ),
  // },
  {
    heading: "Services We Offer",
    content: (
      <>
        <p>
          <strong>Our Darul-Ifta</strong> department caters to a wide range of
          queries and legal matters, providing Muslims with a comprehensive
          resource for Islamic guidance. We address:
        </p>
        <p>
          <strong>- Personal Worship and Rituals</strong>: Detailed guidance on
          performing religious duties such as Salah (prayer), Sawm (fasting),
          Zakat (charity), and Hajj (pilgrimage), as well as rulings on
          purification (Tahara) and other acts of worship.
        </p>
        <p>
          <strong>- Family and Social Matters:</strong> Issuing fatwas on
          family-related concerns including marriage, divorce (Talaq), child
          custody, inheritance (Mirath), and other domestic affairs in line with
          Islamic law. We offer support on fostering Islamic family values and
          maintaining harmony in relationships.
        </p>
        <p>
          <strong>- Financial and Business Ethics:</strong> Comprehensive fatwas
          on financial transactions, investments, contracts, and Islamic
          banking. We provide guidance on zakat calculations, halal trade,
          interest (riba), and modern financial instruments, ensuring that
          business dealings are Shariah-compliant.
        </p>
        <p>
          <strong>- Health and Medical Ethics:</strong> Our Muftis offer rulings
          on sensitive issues related to medical procedures, organ donation,
          end-of-life care, and bioethical concerns such as in-vitro
          fertilization (IVF), cloning, and genetic research. We bridge the gap
          between Islamic ethics and modern medical challenges.
        </p>
        <p>
          <strong>- Modern Technological Concerns:</strong> In an era of rapid
          technological advancement, we provide fatwas on contemporary issues
          such as artificial intelligence, cryptocurrency, data privacy, and
          social media use, helping Muslims align their digital lives with
          Islamic principles.
        </p>
      </>
    ),
  },
  {
    heading: "- Modern Technological Concerns",
    content: (
      <>
        <p>
          The <strong>Darul-Ifta</strong> team is composed of esteemed Muftis
          and Islamic scholars with deep expertise in various fields of Islamic
          jurisprudence (fiqh). Each member of our team has undergone extensive
          education in both traditional Islamic sciences and contemporary
          fields, allowing them to address complex questions with wisdom and
          balance. Our scholars are trained in the classical schools of thought
          - Hanafi, Maliki, Shafi'i, and Hanbali - and are equipped to deliver
          rulings that reflect the diversity within Islamic jurisprudence.
        </p>
        <p>
          Beyond their expertise, our Muftis are committed to engaging with the
          unique cultural, social, and individual contexts of each questioner,
          ensuring that their fatwas are practical and applicable in real-life
        </p>
        <p>
          situations. Our goal is to uphold the integrity of Islamic law while
          providing flexible and compassionate solutions to today's challenges.
        </p>
      </>
    ),
  },
  {
    heading: "Darul-Ifta Question Submission Form",
    content: (
      <>
        <p>
          If you have a question regarding Islamic rulings or require guidance
          on a specific matter, please complete the form below. By providing
          clear and detailed information, you allow our scholars to address your
          question accurately and effectively.
        </p>
      </>
    ),
  },
];

const { TextArea } = Input;

export const DarulIftaPage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Darul Ifta Page Image" />
      <Wrapper>
        <PageHeader
          title="Darul Ifta"
          subtitle="A Center for Authentic Islamic Legal Guidance"
        />
        <Container>
          <CourseContainer>
            <IftaDescreption>
              The Darul-Ifta at Al-Huzaifi Academy serves as a beacon of Islamic
              jurisprudence, offering trusted and reliable religious verdicts
              (fatwas) to Muslims around the world. Our mission is to provide
              clear and authentic guidance on Islamic rulings, ensuring that
              individuals, families, and communities can navigate their lives in
              accordance with the teachings of Islam in a modern context.
              Whether addressing traditional queries or contemporary issues,
              Darul-Ifta is committed to offering scholarly advice grounded in
              the Quran, Sunnah, and the established schools of Islamic
              jurisprudence.
            </IftaDescreption>

            <CourseDescriptionSection sections={descriptionSections} />
          </CourseContainer>
          <FormContainer>
            <Form layout="vertical">
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Your Name"
                    name="name"
                    rules={[
                      { required: true, message: "Please enter your name" },
                    ]}
                  >
                    <Input placeholder="Enter your name" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Age"
                    name="age"
                    rules={[
                      {
                        required: true,
                        type: "number",
                        transform: (val) => Number(val),
                        message: "Age is required and must be a number",
                      },
                    ]}
                  >
                    <Input type="number" placeholder="Enter your age" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
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

                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Nationality"
                    name="nationality"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your nationality",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your nationality" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Enter a valid email",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your email" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Fiqhi School (Madhhab)"
                    name="madhhab"
                    rules={[
                      { required: true, message: "Please select madhhab" },
                    ]}
                  >
                    <Select placeholder="Select Madhhab">
                      <Select.Option value="hanafi">Hanafi</Select.Option>
                      <Select.Option value="shafii">Shafi'i</Select.Option>
                      <Select.Option value="maliki">Maliki</Select.Option>
                      <Select.Option value="hanbali">Hanbali</Select.Option>
                      <Select.Option value="salafi">
                        Salafi (Ahl-e-Hadith)
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    label="Subject of Your Question"
                    name="subject"
                    rules={[
                      { required: true, message: "Please enter subject" },
                    ]}
                  >
                    <Input placeholder="Enter the subject" />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    label="Explain Your Question in Detail"
                    name="question"
                    rules={[
                      {
                        required: true,
                        message: "Please explain your question",
                      },
                    ]}
                  >
                    <TextArea
                      rows={5}
                      placeholder="Explain your question in detail"
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} style={{ textAlign: "center" }}>
                  <SubmitBtn type="submit">Submit</SubmitBtn>
                </Col>
              </Row>
            </Form>
          </FormContainer>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 40px 0;
`;

const SubmitBtn = styled.button`
  padding: 6px 24px;
  margin: 24px 0px;
  border: 1px solid ${(props) => props.theme.colors.colorPrimary};
  color: ${(props) => props.theme.colors.colorPrimary};
  background-color: #ffffff;
  border-radius: 8px;
  transition: all ease-in 0.4s;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.colorPrimary};
    color: #fff;
    border-color: ${(props) => props.theme.colors.colorPrimary};
  }
`;

const CourseContainer = styled.div`
  margin-bottom: 30px;
`;

const IftaDescreption = styled.p`
  padding: 28px 0px;
  font-size: 16px;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.colorPrimaryText};
`;

const FormContainer = styled.div`
  padding: 24px;
  border-radius: 8px;
  max-width: 950px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid ${(props) => props.theme.colors.colorPrimary};
`;
