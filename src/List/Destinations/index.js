import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export default () => (
  <div className="container">
    <Wrapper>
      <Title>Featured destination</Title>
    </Wrapper>
    <div className="row">
      <div className="col-xs-4">
        <Card
          src="https://a0.muscache.com/4ea/air/r:w284-h426-sfit,e:fjpg-c75/pictures/d915ce17-d822-426d-b549-0c7b641fec56.jpg"
          name="Paris"
        />
      </div>
      <div className="col-xs-4">
        <Card
          src="https://a0.muscache.com/4ea/air/r:w284-h426-sfit,e:fjpg-c75/pictures/04598d26-f40d-4c44-8725-99e157fbb7ab.jpg"
          name="Miami"
        />
      </div>
      <div className="col-xs-4">
        <Card
          src="https://a0.muscache.com/4ea/air/r:w284-h426-sfit,e:fjpg-c75/pictures/1d8ecdb4-da01-4d35-9c9e-2ef6ca604eca.jpg"
          name="Cape town"
        />
      </div>
    </div>
  </div>
);
