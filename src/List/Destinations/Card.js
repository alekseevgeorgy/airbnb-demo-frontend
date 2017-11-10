import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`display: block;`;

const Image = styled.img`
  object-fit: cover;
  display: flex;
  width: 91px;
  height: 138px;
`;

const Name = styled.p`
  margin: 0;
  padding-top: 4px;
  font-family: Circular Air Bold, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #383838;
`;

export default props => (
  <Wrapper>
    <Image src={props.src} />
    <Name>{props.name}</Name>
  </Wrapper>
);
