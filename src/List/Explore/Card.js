import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  display: block;
  border: 0.4px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`;

const Image = styled.img`
  object-fit: cover;
  display: flex;
  width: 144px;
  height: 78px;
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
`;

export default props => (
  <Wrapper>
    <Image src={props.src} />
    <Text>{props.text}</Text>
  </Wrapper>
);
