import React from "react";
import styled from "styled-components";
import star from "../../img/star.svg";

const Wrapper = styled.a`
  display: block;
  margin-right: 20px;
`;

const Image = styled.img`
  object-fit: cover;
  display: flex;
  width: 196px;
  height: 156px;
`;

const TextWrapper = styled.div`padding: 8px 0 4px 0;`;

const Price = styled.p`
  display: inline-block;
  margin: 0;
  font-family: Circular Air Bold, Helvetica, sans-serif;
  font-size: 13px;
  line-height: 16px;
  color: #383838;
`;

const Name = styled.p`
  display: inline;
  margin: 0;
  font-family: Circular Air Bold, Helvetica, sans-serif;
  font-size: 13px;
  line-height: 16px;
  color: #383838;
`;

const Desciption = styled.p`
  margin: 0;
  padding-bottom: 8px;
  font-family: Circular Air Light, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
`;

const ReviewsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Stars = styled.img`margin-right: 4px;`;

const Reviews = styled.p`
  display: inline;
  margin: 0;
  margin-left: 4px;
  font-family: Circular Air Book;
  font-size: 12px;
  line-height: 14px;
  color: #383838;
  &middot;
`;

// function getStars(stars) {
//   if (stars === 1) {
//     return { star };
//   } else {
//     return `no rating`;
//   }
// }

export default props => (
  <Wrapper>
    <Image src={props.src} />
    <TextWrapper>
      <Price>{props.price}&nbsp;</Price>
      <Name>{props.name}</Name>
    </TextWrapper>
    <Desciption>Entrie house &nbsp;&middot;&nbsp; {props.beds} beds</Desciption>
    {/* {getStars(props.stars)}; */}
    <ReviewsWrapper>
      <Stars src={star} />
      <Stars src={star} />
      <Stars src={star} />
      <Stars src={star} />
      <Stars src={star} />
      <Reviews>{props.reviews} &nbsp;&middot;&nbsp; Superhost</Reviews>
    </ReviewsWrapper>
  </Wrapper>
);