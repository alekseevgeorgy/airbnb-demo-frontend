import React from "react";
import styled from "styled-components";
import Card from "./Card";
import arrow from "../../img/arrow.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Title = styled.h2`
  display: inline-block;
  margin-top: 2.5rem;
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
  margin-bottom: 1rem;
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
  <div>
    <div className="container">
      <Wrapper>
        <Title>Experiences</Title>
        <More>See all</More>
      </Wrapper>
      <div className="row">
        <div className="col-xs-6">
          <Card
            src="https://a0.muscache.com/im/pictures/40e6b9f8-7a3e-424d-a622-a70ed4309291.jpg"
            price={29}
            name="Forest therapy"
            reviews={44}
          />
        </div>
        <div className="col-xs-6">
          <Card
            src="https://a0.muscache.com/im/pictures/87878152-fdce-425c-b807-b7909a23df1f.jpg?aki_policy=xl_poster"
            price={69}
            name="Forest Whale watching"
            reviews={46}
          />
        </div>
      </div>
    </div>
  </div>
);
