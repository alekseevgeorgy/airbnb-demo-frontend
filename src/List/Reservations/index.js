import React from "react";
import styled from "styled-components";
import Card from "./Card";
import arrow from "../../img/arrow.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  display: inline-block;
  margin-bottom: 1rem;
  font-family: Circular Air Bold, Helvetica, sans-serif;
  font-size: 1.5rem;
  line-height: 31px;
  font-weight: 700;
  color: #383838;
`;

const More = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  white-space: nowrap;
  font-family: Circular Air Book, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 24px;
  font-weight: 400;
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

export default () => (
  <div className="container">
    <Wrapper>
      <Title>Popular reservations around the world</Title>
      <More>See all</More>
    </Wrapper>
    <div className="row">
      <div className="col-xs-6">
        <Card
          src="https://a0.muscache.com/pictures/a9a1d433-bcde-4601-88a0-5f16871b8548.jpg"
          description="Speakeasy"
          name="Chumley’s"
          price={60}
        />
      </div>
      <div className="col-xs-6">
        <Card
          src="https://a0.muscache.com/pictures/1494ed7e-9e3a-474b-9db6-bc150874fec7.jpg"
          description="Korean Gastropub"
          name="Hanjan"
          price={50}
        />
      </div>
    </div>
  </div>
);
