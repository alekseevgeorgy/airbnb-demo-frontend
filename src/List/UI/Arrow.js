import styled from "styled-components";
import nextPage from "../../img/next-page.svg";

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
