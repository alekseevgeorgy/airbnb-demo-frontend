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

const More = styled.button`
  border: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 0.5rem;
  white-space: nowrap;
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

const Cards = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 4px;
  overflow-y: auto;
`;

const Arrow = styled.button`
  position: absolute;
  padding: 0;
  border-radius: 20px;
  background: url(${nextPage}) no-repeat top center;
  width: 40px;
  height: 40px;
  top: 62px;
  left: 942px;
  display: flex;
  box-shadow: 0px 2px 0px rgba(72, 72, 72, 0.16);
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  background-color: #ffffff;
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
        <Arrow />
      </MediaQuery>
    </Cards>
  </Container>
);
