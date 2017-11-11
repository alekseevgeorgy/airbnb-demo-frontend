import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  display: block;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08),
    inset 0 0 0 1px rgba(72, 72, 72, 0.2);
  border-radius: 4px;

  @media screen and (min-width: 48rem) {
    display: flex;
    min-width: 304px;
    align-items: center;
  }

  @media screen and (min-width: 62rem) {
    display: flex;
    min-width: 310px;
    align-items: center;
  }
`;

const Image = styled.img`
  object-fit: cover;
  display: flex;
  width: 144px;
  height: 78px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  @media screen and (min-width: 48rem) {
    width: 96px;
    height: 72px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 4px;
  }
`;

const Text = styled.p`
  display: inline-block;
  margin: 0;
  margin-left: 12px;
  padding: 12px 0;
  font-family: Circular Air Bold, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
  color: #383838;

  @media screen and (min-width: 48rem) {
    font-size: 17px;
    line-height: 22px;
    margin-left: 24px;
  }
`;

export default props => (
  <Wrapper>
    <Image src={props.src} />
    <Text>{props.text}</Text>
  </Wrapper>
);
