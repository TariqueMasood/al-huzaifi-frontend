import styled from "styled-components";

type CardProps = {
  cardImage: string;
  courseFee: string | number;
  cardTitle: string;
  student: string;
  notes: string;
  hour: string;
  userName: string;
  designation: string;
  link: string;
};

const PopularCourseCard = (props: CardProps) => {
  return (
    <div>
      <Wrapper>
        <ImageContainer>
          <Image src={props.cardImage} alt="Card-Image" />
          {/* <Fee>{props.courseFee}</Fee> */}
        </ImageContainer>
        <CardContent>
          <CardHeading href={props.link}>{props.cardTitle}</CardHeading>
          <CardDetailWrapper>
            <CardDetail>
              <span>{props.student}</span>
            </CardDetail>
            <CardDetail>
              <span>{props.notes}</span>
            </CardDetail>
            <CardDetail>
              <span>{props.hour}</span>
            </CardDetail>
          </CardDetailWrapper>
          {/* <Author>
            <AuthorDeatil>
              <span>
                <NameLink href="#">{props.userName}</NameLink>
              </span>
            </AuthorDeatil>
            <span>
              <DesignationLink href="#">{props.designation}</DesignationLink>
            </span>
          </Author> */}
        </CardContent>
      </Wrapper>
    </div>
  );
};

export default PopularCourseCard;

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 420px;
  width: 100%;
  height: auto;
  box-shadow: 0px 3px 6px 0px rgba(140, 149, 159, 0.15);
  margin-bottom: 20px;
  border: 1px solid #434343;
  border-radius: 8px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  max-width: 420px;
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const CardContent = styled.div`
  padding: 12px;
`;

const CardHeading = styled.a`
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 700;
  // line-height: 24px;
  font-size: 20px;
  color: #137c8f;
  transition: ease-in-out 0.4s;

  // &:hover {
  //   color: #137C8F;
  //   transform: scale(1.1);
  // }
`;

const CardDetail = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 0px;
  color: #cdad7e;
  font-size: 12px;
  font-weight: 600;
`;

const CardDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
