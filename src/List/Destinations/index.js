import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { Arrow } from "../UI/Arrow";
import Card from "./Card";

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

const Cards = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 4px;
  overflow-y: auto;
`;

export default () => (
  <Container>
    <Wrapper>
      <Title>Featured destinations</Title>
    </Wrapper>
    <Cards>
      <Card
        src="https://a0.muscache.com/4ea/air/r:w284-h426-sfit,e:fjpg-c75/pictures/d915ce17-d822-426d-b549-0c7b641fec56.jpg"
        name="Paris"
      />
      <Card
        src="https://a0.muscache.com/4ea/air/r:w284-h426-sfit,e:fjpg-c75/pictures/04598d26-f40d-4c44-8725-99e157fbb7ab.jpg"
        name="Miami"
      />
      <Card
        src="https://a0.muscache.com/4ea/air/r:w284-h426-sfit,e:fjpg-c75/pictures/1d8ecdb4-da01-4d35-9c9e-2ef6ca604eca.jpg"
        name="Tokyo"
      />
      <Card
        src="https://a0.muscache.com/4ea/air/r:w284-h426-sfit,e:fjpg-c75/pictures/0e2e4ace-7f04-4895-b7c6-482c99e69908.jpg"
        name="Cape town"
      />
      <Card
        src="https://a0.muscache.com/4ea/air/r:w284-h426-sfit,e:fjpg-c75/pictures/0c79a1b5-333a-421b-b9e3-effb8b9b9958.jpg"
        name="Seoul"
      />
      <Card
        src="https://a0.muscache.com/4ea/air/r:w284-h426-sfit,e:fjpg-c75/pictures/7bff51c1-3c35-47a5-a86c-5ea75ab6be6c.jpg"
        name="Los Angeles"
      />
      <MediaQuery minDeviceWidth={992}>
        <Arrow top={90} />
      </MediaQuery>
    </Cards>
  </Container>
);
