import React from "react";
import styled from "styled-components";
import Card from "./Card";
import arrow from "../../img/arrow.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Title = styled.h2`
  display: inline-block;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-family: Circular Air Bold, Helvetica, sans-serif;
  font-size: 1.5rem;
  line-height: 31px;
  color: #383838;
`;

const More = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: 1rem;
  font-family: Circular Air Book, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 24px;
  color: #383838;

  &:after {
    content: "";
    margin-left: 0.5rem;
    background-color: #000000;
    mask-image: url(${arrow});
    background-size: contain;
    background-repeat: no-repeat;
    width: 11px;
    height: 5.55px;
    transform: rotate(270deg);
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
  overflow-y: auto;
`;

export default () => (
  <div className="container">
    <Wrapper>
      <Title>Homes</Title>
      <More>See all</More>
    </Wrapper>
    <CardsWrapper>
      <Card
        price="$82"
        name="La Salentina, see, nature…"
        src="https://a0.muscache.com/im/pictures/47939708/e55cd32e_original.jpg"
        beds="9"
        reviews="97"
      />
      <Card
        price="$82"
        name="Your private 3 bert"
        src="https://a0.muscache.com/im/pictures/11424118/e1fb3923_original.jpg"
        beds="5"
        reviews="161"
      />
    </CardsWrapper>
  </div>
);
