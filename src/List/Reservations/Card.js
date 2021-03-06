import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  display: block;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const Image = styled.img`
  object-fit: cover;
  display: flex;
  width: 144px;
  height: 108px;

  @media screen and (min-width: 48rem) {
    width: 240px;
    height: 164px;
  }

  @media screen and (min-width: 62rem) {
    width: 229px;
    height: 164px;
  }
`;

const Desciption = styled.small`
  display: block;
  padding: 8px 0 2px 0;
  font-family: Circular Air Bold, Helvetica, sans-serif;
  font-size: 8px;
  line-height: 9px;
  font-weight: 700;
  text-transform: uppercase;
  color: #383838;

  @media screen and (min-width: 48rem) {
    font-size: 10px;
    line-height: 13px;
  }
`;

const Name = styled.p`
  margin: 0;
  padding-bottom: 4px;
  font-family: Circular Air Bold, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: #383838;

  @media screen and (min-width: 48rem) {
    font-size: 18px;
    line-height: 23px;
  }
`;

const Price = styled.p`
  display: inline-block;
  margin: 0;
  font-family: Circular Air Light, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;
  color: #383838;

  @media screen and (min-width: 48rem) {
    font-size: 18px;
    line-height: 23px;
  }
`;

export default props => (
  <Wrapper>
    <Image src={props.src} />
    <Desciption>{props.description}</Desciption>
    <Name>{props.name}</Name>
    <Price>About ${props.price} per person</Price>
  </Wrapper>
);
