import React from "react";
import styled from "styled-components";
import star from "../../img/star.svg";

const Wrapper = styled.a`
  display: block;
  padding-left: 8px;
  padding-right: 8px;
`;

const Image = styled.img`
  object-fit: cover;
  display: flex;
  width: 144px;
  height: 216px;

  @media screen and (min-width: 48rem) {
    width: 240px;
    height: 346px;
  }

  @media screen and (min-width: 62rem) {
    width: 229px;
    height: 346px;
  }
`;

const TextWrapper = styled.div`padding: 8px 0;`;

const Price = styled.p`
  display: inline-block;
  margin: 0;
  font-family: Circular Air Bold, Helvetica, sans-serif;
  font-size: 13px;
  line-height: 16px;
  font-weight: 700;
  color: #383838;

  @media screen and (min-width: 48rem) {
    font-size: 15px;
    line-height: 19px;
  }
`;

const Name = styled.p`
  display: inline;
  margin: 0;
  font-family: Circular Air Light, Helvetica, sans-serif;
  font-size: 13px;
  line-height: 16px;
  font-weight: 300;
  color: #383838;

  @media screen and (min-width: 48rem) {
    font-size: 15px;
    line-height: 19px;
  }
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
  line-height: 15px;
  font-weight: 400;
  color: #383838;
`;

export default props => (
  <Wrapper>
    <Image src={props.src} />
    <TextWrapper>
      <Price>${props.price}&nbsp;</Price>
      <Name>{props.name}</Name>
    </TextWrapper>
    <ReviewsWrapper>
      <Stars src={star} />
      <Stars src={star} />
      <Stars src={star} />
      <Stars src={star} />
      <Stars src={star} />
      <Reviews>{props.reviews} reviews</Reviews>
    </ReviewsWrapper>
  </Wrapper>
);
