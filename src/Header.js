import React from "react";
import styled from "styled-components";
import logo from "./img/logo.svg";
import arrow from "./img/arrow.svg";
import magnify from "./img/magnify.svg";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  padding: 1rem 0.5rem;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

const LinkWrapper = styled.a`display: flex;`;

const Logo = styled.img``;

const Arrow = styled.img`
  margin-left: 5px;
  margin-right: 8px;
`;

const SearchWrapper = styled.div`
  position: relative;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  width: 100%;
`;

const Search = styled.input`
  margin-left: 23px;
  padding: 12px;
  font-family: Circular Air Book, Helvetica, sans-serif;
  line-height: 24px;
  font-size: 14px;
  color: #383838;
`;

const SearchImg = styled.img`
  position: absolute;
  top: 16px;
  left: 12px;
`;

export default () => (
  <Wrapper>
    <LinkWrapper>
      <Logo src={logo} />
      <Arrow src={arrow} />
    </LinkWrapper>
    <SearchWrapper>
      <SearchImg src={magnify} />
      <Search type="text" name="search_bar" placeholder="Try “Miami”" />
    </SearchWrapper>
  </Wrapper>
);
