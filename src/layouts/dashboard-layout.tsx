import { Outlet } from "react-router-dom";
import styled from "styled-components";

const DashboardLayout = () => {
  return (
    <LayoutContainer>
      <ContentWrapper>
        <MainContent>
          <Outlet />
        </MainContent>
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default DashboardLayout;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const MainContent = styled.div`
  margin-left: 250px;
  padding: 2rem;
  padding-right: 5rem;
  margin-top: 60px;
  min-height: calc(100vh - 130px);
  background-color: ${({ theme }) => theme.secondaryBg};
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: 100%;
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
  }
`;
