import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import bgImage from "../../src/images/faculty-of-languages-2.png";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

export const FacultyOfLanguagePage = () => {
  return (
    <>
      <div>
        <Image src={bgImage} alt="pic"></Image>
      </div>
      <Wrapper>
        <Row>
          {/* <Title>Faculty of Languages</Title> */}
          <Col xs={24} sm={22} md={20} lg={18} xl={16}>
            <SubTitle>Overview:</SubTitle>
            <Content>
              The Faculty of Languages at{" "}
              <BoldText>Al-Huzaifi Academy</BoldText> is dedicated to offer
              multiple languages programs. While our long-term vision includes
              offering programs in German, Turkish, Spanish, and French, we are
              currently focusing on Arabic, English, and Urdu. Recognizing the
              pivotal role that these languages play in accessing and
              understanding Islamic texts and heritage, our programs are
              designed to equip students with the linguistic skills necessary to
              engage deeply with the language of the Quran, as well as other
              significant scholarships and contemporary communication.
            </Content>
            <Space />
            <Content>
              Our mission is to offer comprehensive language education that
              caters to learners at different levels, from beginners to advanced
              students. We aim to foster proficiency in these languages,
              enabling students to read, write, speak, and comprehend them with
              ease. Through our diverse and structured courses, we strive to
              provide an immersive learning experience that not only enhances
              linguistic capabilities but also enriches cultural and religious
              understanding.
            </Content>
            <SubTitle>Academic Programs</SubTitle>
            <SubTitle>Arabic Programs:</SubTitle>
            <ol>
              <Link to="/arabic-language-course">
                <List>Foundation Arabic Course</List>
              </Link>
              <Content>
                - This introductory course is designed for beginners with little
                or no prior knowledge of Arabic. It covers the basics of the
                Arabic alphabet, fundamental grammar, and essential vocabulary,
                providing a solid foundation for further Arabic studies.
                Completion of this course is compulsory for those seeking
                admission into the Alimiyat programs, ensuring that all students
                possess the necessary Arabic language skills to succeed in
                advanced Islamic studies.
              </Content>
              <Link to="/arabic-speaking-course">
                <List>Arabic Speaking Course</List>
              </Link>
              <Content>
                - Focused on developing conversational skills, this course
                emphasizes speaking and listening practice. Students will engage
                in practical exercises and dialogues to enhance their ability to
                communicate effectively in Arabic in everyday situations.
              </Content>
              <Link to="/quranic-arabic-course">
                <List>Quranic Arabic Course</List>
              </Link>
              <Content>
                - This course is tailored for those interested in understanding
                the language of the Quran. It covers Quranic vocabulary,
                grammar, and syntax, enabling students to comprehend and
                appreciate the linguistic beauty and depth of the Quranic text.
              </Content>
              <Link to="/classical-arabic-course">
                <List>Classical Arabic Course</List>
              </Link>
              <Content>
                - Aimed at advanced learners, this course delves into classical
                Arabic texts, including historical, literary, and religious
                works. Students will study the intricate grammar and stylistic
                features of classical Arabic, gaining proficiency in reading and
                interpreting traditional texts.
              </Content>
              <Link to="/arabic-grammar-course">
                <List>Nahw & Sarf Course</List>
              </Link>
              <Content>
                - This specialized course focuses on Arabic grammar (Nahw) and
                morphology (Sarf). Students will learn the rules and structures
                that govern Arabic sentence construction and word formation,
                essential for mastering the language at an advanced level.
              </Content>
              <Link to="/arabic-blaghat-course">
                <List>Balaghat Course</List>
              </Link>
              <Content>
                - Covering the science of Arabic rhetoric, this course explores
                the principles of eloquence and effective communication in
                Arabic. Students will study various rhetorical devices and
                techniques used in classical and modern Arabic literature.
              </Content>
              <Link to="/arabic-arooz-qafiyah-course">
                <List>Arooz & Qaafiyah Course</List>
              </Link>
              <Content>
                - This course is dedicated to the study of Arabic prosody
                (Arooz) and rhyme (Qaafiyah). Students will learn the meters and
                patterns used in Arabic poetry, as well as the art of crafting
                rhymed verses, enriching their appreciation of Arabic poetic
                traditions.
              </Content>
            </ol>
            <SubTitle>English Programs:</SubTitle>
            <ol>
              <Link to="/elementary-english-course">
                <List>Elementary English Courses</List>
              </Link>
              <Content>
                - Designed for those with little to no prior knowledge of
                English, these courses focus on basic vocabulary, grammar, and
                simple conversation skills.
              </Content>
              <Link to="/intermediate-english-course">
                <List>Intermediate English Course</List>
              </Link>
              <Content>
                - Suitable for want to improve fluency and accuracy in English
                language. These courses often include more complex grammar,
                vocabulary expansion, and practice in real-life scenarios.
              </Content>
              <Link to="/advanced-english-course">
                <List>Advanced English Course</List>
              </Link>
              <Content>
                - Aimed at learners who already have a good command of English
                but want to refine their skills further. These courses typically
                focus on advanced grammar structures, academic writing, and
                sophisticated vocabulary.
              </Content>
              {/* <List>English Pronunciation Course</List>
            <Content>
              - Focuses on improving pronunciation, intonation, and clarity in
              spoken English.
            </Content>
            <List>English Conversation Practice Course</List>
            <Content>
              - Emphasizes speaking and listening skills through interactive
              activities, discussions, and role-playing exercises.
            </Content> */}
            </ol>
            <SubTitle>Urdu Programs</SubTitle>
            <ol>
              <Link to="/elementary-urdu-course">
                <List>Elementary Urdu Course:</List>
              </Link>
              <Content>
                - Designed for those with little to no prior knowledge of Urdu,
                these courses focus on basic vocabulary, grammar, and simple
                conversation skills.
              </Content>
              <Link to="/intermediate-urdu-course">
                <List>Intermediate Urdu Course</List>
              </Link>
              <Content>
                - Suitable for learners who want to improve fluency and accuracy
                in Urdu language. These courses often include more complex
                grammar, vocabulary expansion, and practice in real-life
                scenarios.
              </Content>
              <Link to="/advanced-urdu-course">
                <List>Advanced Urdu Course</List>
              </Link>
              <Content>
                - Aimed at learners who already have a good command of Urdu but
                want to refine their skills further. These courses typically
                focus on advanced grammar structures, academic writing, and
                sophisticated vocabulary.
              </Content>
            </ol>
            <Content>
              The Faculty of Languages is committed to provide a robust and
              enriching educational experience. By offering a range of language
              programs, we aim to empower students with the skills and knowledge
              to engage deeply with these languages and their vast cultural and
              religious heritage. Our courses are designed to foster linguistic
              excellence and cultural fluency, preparing students to contribute
              meaningfully to the global community.
            </Content>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 850px;
  width: 100%;
  padding: 20px 0px;
  margin: auto;

  ${mq("sm")} {
    max-width: 850px;
    width: 100%;
    padding: 40px 0px;
    margin: auto;
  }
`;

const Image = styled.img`
  width: 100%;
`;

// const Title = styled.h1`
//   text-align: center;
//   padding: 16px 0px;
//   font-weight: 600;
//   color: ${(props) => props.theme.colors.themeColor};

//   ${mq("sm")} {
//     text-align: center;
//     padding: 30px 0px;
//     font-weight: 600;
//     color: ${(props) => props.theme.colors.themeColor};
//   }
// `;

const SubTitle = styled.h5`
  font-weight: 600;
  padding: 5px 0px;
  font-size: 18px;
  color: #137c8f;

  ${mq("sm")} {
    font-weight: 600;
    padding: 10px 0px;
    font-size: 20px;
    color: #137c8f;
  }
`;

const BoldText = styled.span`
  font-weight: 600;
  color: #137c8f;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.2px;

  ${mq("sm")} {
    font-size: 18px;
    letter-spacing: 0.5px;
    line-height: 32px;
  }
`;

const Space = styled.div`
  margin: 20px 0px;
`;

const List = styled.li`
  font-size: 16px;
  padding: 7px 0px;
  font-weight: 600;
  color: #137c8f;

  ${mq("sm")} {
    font-size: 18px;
    padding: 7px 0px;
    font-weight: 600;
    color: #137c8f;
  }
`;
