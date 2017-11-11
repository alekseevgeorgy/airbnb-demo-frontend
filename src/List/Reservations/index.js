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
    width: 987px;
    max-width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  display: inline-block;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  font-family: Circular Air Bold, Helvetica, sans-serif;
  font-size: 1.5rem;
  line-height: 31px;
  font-weight: 700;
  color: #383838;

  @media screen and (min-width: 48rem) {
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 34px;
  }
`;

const Cards = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 4px;
  overflow-y: auto;
`;

export default () => (
  <Container>
    <Wrapper>
      <Title>Popular reservations around the world</Title>
      <More>See all</More>
    </Wrapper>
    <Cards>
      <Card
        src="https://a0.muscache.com/pictures/a9a1d433-bcde-4601-88a0-5f16871b8548.jpg"
        description="Speakeasy"
        name="Chumley’s"
        price={60}
      />
      <Card
        src="https://a0.muscache.com/pictures/1494ed7e-9e3a-474b-9db6-bc150874fec7.jpg"
        description="Korean Gastropub"
        name="Hanjan"
        price={50}
      />
      <Card
        src="https://a0.muscache.com/pictures/c08b31bb-e4b7-49d8-a640-ac14ca3dd431.jpg"
        description="German american"
        name="Prime Meats"
        price={55}
      />
      <Card
        src="https://a0.muscache.com/pictures/0827b14d-9a1a-4a7b-98e4-2293004dae1c.jpg"
        description="Fine seafood"
        name="Seaprice"
        price={70}
      />
      <MediaQuery minDeviceWidth={992}>
        <Arrow top={62} />
      </MediaQuery>
    </Cards>
  </Container>
);
