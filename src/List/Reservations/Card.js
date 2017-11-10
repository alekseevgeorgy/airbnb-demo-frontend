import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`display: block;`;

const Image = styled.img`
  object-fit: cover;
  display: flex;
  width: 144px;
  height: 108px;
`;

const Desciption = styled.small`
  display: block;
  padding: 8px 0 2px 0;
  font-family: Circular Air Bold, Helvetica, sans-serif;
  font-size: 8px;
  line-height: 9px;
  text-transform: uppercase;
  color: #383838;
`;

const Name = styled.p`
  display: inline;
  margin: 0;
  padding-bottom: 4px;
  font-family: Circular Air Bold, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #383838;
`;

const Price = styled.p`
  display: inline-block;
  margin: 0;
  font-family: Circular Air Light, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #383838;
`;

export default props => (
  <Wrapper>
    <Image src={props.src} />
    <Desciption>{props.description}</Desciption>
    <Name>{props.name}</Name>
    <Price>About {props.price} per person</Price>
  </Wrapper>
);
