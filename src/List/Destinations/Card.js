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
  width: 91px;
  height: 138px;

  @media screen and (min-width: 48rem) {
    width: 176px;
    height: 264px;
  }

  @media screen and (min-width: 62rem) {
    width: 147px;
    height: 220px;
  }
`;

const Name = styled.p`
  margin: 0;
  padding-top: 4px;
  font-family: Circular Air Bold, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: #383838;

  @media screen and (min-width: 48rem) {
    font-size: 14px;
    line-height: 16px;
  }
`;

export default props => (
  <Wrapper>
    <Image src={props.src} />
    <Name>{props.name}</Name>
  </Wrapper>
);
