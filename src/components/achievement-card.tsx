import { Card } from "antd";
import styled from "styled-components";

type cardProps = {
  counter: string;
  title: string;
  icon: React.ReactNode;
};

const AchievementCard = (props: cardProps) => {
  return (
    <StyledCard bordered={false}>
      <IconCircle>{props.icon}</IconCircle>
      <Counter>{props.counter}</Counter>
      <Title>{props.title}</Title>
    </StyledCard>
  );
};

export default AchievementCard;

const StyledCard = styled(Card)`
  min-width: 250px;
  width: 100%;
  text-align: center;
  padding: 40px 20px;
  border: 1px dashed ${({ theme }) => theme.colors.colorPrimary};
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  }
`;

const IconCircle = styled.div`
  width: 65px;
  height: 65px;
  margin: 0 auto 16px auto;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.colorPrimary + "20"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.colorPrimary};
`;

const Counter = styled.h2`
  color: ${({ theme }) => theme.colors.colorPrimary};
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 16px;
  color: #666;
`;
