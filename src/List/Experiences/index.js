import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Arrow } from "../UI/Arrow";
import MediaQuery from "react-responsive";
import arrow from "../../img/arrow.svg";

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
  margin-top: 2.25rem;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  font-family: Circular Air Bold, Helvetica, sans-serif;
  font-size: 1.5rem;
  line-height: 31px;
  font-weight: 700;
  color: #383838;

  @media screen and (min-width: 48rem) {
    margin-top: 3rem;
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
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  font-family: Circular Air Book, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 24px;
  font-weight: 400;
  background-color: #ffffff;
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

export default () => (
  <Container>
    <Wrapper>
      <Title>Experiences</Title>
      <More>See all</More>
    </Wrapper>
    <Cards>
      <Card
        src="https://a0.muscache.com/im/pictures/40e6b9f8-7a3e-424d-a622-a70ed4309291.jpg"
        price={29}
        name="Forest therapy"
        reviews={44}
      />
      <Card
        src="https://a0.muscache.com/im/pictures/87878152-fdce-425c-b807-b7909a23df1f.jpg?aki_policy=xl_poster"
        price={69}
        name="Forest Whale watching"
        reviews={46}
      />
      <Card
        src="https://a0.muscache.com/im/pictures/27858797-d9df-436b-8740-a5b7f5521260.jpg"
        price={69}
        name="Table Mountain Summit, Cable Car Down"
        reviews={44}
      />
      <Card
        src="https://a0.muscache.com/im/pictures/4e31e354-e37b-42af-aed5-1148f87fe5e3.jpg"
        price={69}
        name="Salsa Night"
        reviews={44}
      />
      <MediaQuery minDeviceWidth={992}>
        <Arrow top={153} />
      </MediaQuery>
    </Cards>
  </Container>
);
