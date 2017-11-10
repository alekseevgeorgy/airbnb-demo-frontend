import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Title = styled.h2`
  margin-bottom: 1rem;
  font-family: Circular Air Bold, Helvetica, sans-serif;
  font-size: 1.5rem;
  line-height: 31px;
  color: #383838;
`;

export default () => (
  <div>
    <div className="container">
      <Title>Explore Airbnb</Title>
      <div className="row">
        <div className="col-xs-6">
          <Card
            src="https://a0.muscache.com/ac/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
            text="Homes"
          />
        </div>
        <div className="col-xs-6">
          <Card
            src="https://a0.muscache.com/ac/pictures/d3811ff7-cc34-471b-8aee-b0d613db0052.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
            text="Experiences"
          />
        </div>
      </div>
    </div>
  </div>
);
