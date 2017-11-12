import styled from "styled-components";
import nextPage from "../../img/next-page.svg";
import arrow from "../../img/arrow.svg";

export const Arrow = styled.button`
  position: absolute;
  padding: 0;
  border-radius: 20px;
  background: url(${nextPage}) no-repeat top center;
  width: 40px;
  height: 40px;
  top: ${props => props.top}px;
  right: 0px;
  display: flex;
  box-shadow: 0px 2px 0px rgba(72, 72, 72, 0.16);
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  background-color: #ffffff;
`;

export const More = styled.button`
  border: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  white-space: nowrap;
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
