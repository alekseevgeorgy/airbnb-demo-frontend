import React from "react";
import styled from "styled-components";
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
    width: 982px;
    max-width: 100%;
  }
`;

const Title = styled.h2`
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

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 4px;
  overflow-y: auto;
`;

export default () => (
  <Container>
    <Title>Explore Airbnb</Title>
    <Wrapper>
      <Card
        src="https://a0.muscache.com/ac/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
        text="Homes"
      />
      <Card
        src="https://a0.muscache.com/ac/pictures/d3811ff7-cc34-471b-8aee-b0d613db0052.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
        text="Experiences"
      />
      <Card
        src="https://a0.muscache.com/ac/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
        text="Restaurants"
      />
    </Wrapper>
  </Container>
);
