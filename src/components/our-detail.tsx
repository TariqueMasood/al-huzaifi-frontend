import styled from "styled-components";
import { Row, Col, Button } from "antd";
import { mq } from "../styles/breakpoints";

export const OurDetail = () => {
  return (
    <Wrapper>
      <div className="container">
        <Row justify="center">
          <Col>
            <ContentWrapper>
              <h2>
                Embark on a journey of discovery and spiritual growth with
                Al-Huzaifi Academy.
              </h2>
              <p>
                We offer an array of courses designed to make Islamic education
                accessible to everyone, from young learners to adults. Led by a
                team of passionate educators from around the world, we are
                committed to supporting each student's unique learning path.
              </p>
              <StyledButton type="primary" size="large">
                Learn More
              </StyledButton>
            </ContentWrapper>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 30px 0;
  border-bottom: 2px solid #f4f1ec;
  background-color: #fdfdfc;

  ${mq("md")} {
    padding: 60px 0;
  }
`;

const ContentWrapper = styled.div`
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.colors.colorPrimary};
    font-style: italic;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 18px;
    letter-spacing: 0.5px;

    ${mq("md")} {
      font-size: 48px;
      margin-bottom: 32px;
    }
  }

  p {
    color: #4a4a4a;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 1.6;

    ${mq("md")} {
      font-size: 24px;
      max-width: 960px;
      margin: 0 auto 32px;
    }
  }
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.colorPrimary};
  border-color: ${({ theme }) => theme.colors.colorPrimary};
  font-size: 16px;
  padding: 0 24px;
  height: auto;

  ${mq("md")} {
    font-size: 20px;
    padding: 8px 40px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.colorPrimary};
    background-color: #fff;
    border-color: ${({ theme }) => theme.colors.colorPrimary};
  }
`;
