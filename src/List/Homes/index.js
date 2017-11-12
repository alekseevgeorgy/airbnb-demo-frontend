import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Arrow, More } from "../UI";
import MediaQuery from "react-responsive";

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

const CardsWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 2.5rem;
  overflow-y: auto;

  @media screen and (min-width: 48rem) {
    margin-bottom: 3rem;
  }
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
        <Arrow top={82} />
      </MediaQuery>
    </CardsWrapper>
  </Container>
);
