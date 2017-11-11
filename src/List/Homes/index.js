import React from "react";
import styled from "styled-components";
import Card from "./Card";
import MediaQuery from "react-responsive";
import arrow from "../../img/arrow.svg";
import nextPage from "../../img/next-page.svg";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 29.5rem;
  max-width: 100%;

  @media screen and (min-width: 48rem) {
    margin-right: auto;
    margin-left: auto;
    width: 966px;
    max-width: 100%;
  }

  @media screen and (min-width: 62rem) {
    margin-right: auto;
    margin-left: auto;
    width: 982px;
    max-width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Title = styled.h2`
  display: inline-block;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  font-family: Circular Air Bold, Helvetica, sans-serif;
  font-size: 1.5rem;
  line-height: 31px;
  font-weight: 700;
  color: #383838;

  @media screen and (min-width: 48rem) {
    margin-bottom: 24px;
    margin-top: 3rem;
    font-size: 32px;
    line-height: 34px;
  }
`;

const More = styled.button`
  border: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  font-family: Circular Air Book, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 24px;
  font-weight: 400;
  color: #383838;
  background-color: #ffffff;

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

  @media screen and (min-width: 48rem) {
    font-size: 14px;
  }
`;

const CardsWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 2.5rem;
  overflow-y: auto;

  @media screen and (min-width: 48rem) {
    margin-bottom: 3rem;
  }
`;

const Arrow = styled.button`
  position: absolute;
  padding: 0;
  border-radius: 20px;
  background: url(${nextPage}) no-repeat top center;
  width: 40px;
  height: 40px;
  top: 82px;
  left: 942px;
  display: flex;
  box-shadow: 0px 2px 0px rgba(72, 72, 72, 0.16);
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  background-color: #ffffff;
`;

export default () => (
  <Container>
    <Wrapper>
      <Title>Homes</Title>
      <More>See all</More>
    </Wrapper>
    <CardsWrapper>
      <Card
        price={82}
        name="La Salentina, see, nature…"
        type="house"
        src="https://a0.muscache.com/im/pictures/47939708/e55cd32e_original.jpg"
        beds={9}
        reviews={97}
      />
      <Card
        price={82}
        name="Your private 3 bert"
        type="house"
        src="https://a0.muscache.com/im/pictures/11424118/e1fb3923_original.jpg"
        beds={5}
        reviews={161}
      />
      <Card
        price={200}
        name="Dreamy Tropical Tree House"
        type="treehouse"
        src="https://a0.muscache.com/im/pictures/35836380/a9a49e5f_original.jpg"
        beds={1}
        reviews={364}
      />
      <MediaQuery minDeviceWidth={992}>
        <Arrow />
      </MediaQuery>
    </CardsWrapper>
  </Container>
);
