import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import logo from "./img/logo.svg";
import arrow from "./img/arrow.svg";
import magnify from "./img/magnify.svg";

const Wrapper = styled.header`padding: 1rem 0.5rem;`;

const LinkWrapper = styled.a`
  display: flex;
  text-align: center;
`;

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
  border: none;
  font-family: Circular Air Book, Helvetica, sans-serif;
  line-height: 24px;
  font-size: 14px;
  font-weight: 400;
  color: #383838;

  @media screen and (min-width: 48rem) {
    font-size: 16px;
    margin-left: 33px;
  }
`;

const SearchImg = styled.img`
  position: absolute;
  top: 16px;
  left: 12px;

  @media screen and (min-width: 48rem) {
    width: 20.02px;
    height: 21.15px;
    left: 16px;
  }
`;

const Link = styled.a`
  margin-right: 31px;
  font-family: Circular Air Book, Helvetica, sans-serif;
  line-height: 24px;
  font-size: 14px;
  font-weight: 400;
  color: #383838;
`;

const Line = styled.hr`
  border: none;
  height: 1px;
  background-color: #c8c8c8;
  size: 1px;
  opacity: 0.5;
  margin: 0;
  margin-bottom: 2.5rem;

  @media screen and (min-width: 48rem) {
    margin-bottom: 3rem;
  }
`;

export default () => (
  <div>
    <div className="container">
      <Wrapper>
        <div className="row middle-xs">
          <div className="col-xs-2 col-md-1 col-lg-1">
            <LinkWrapper>
              <Logo src={logo} />
              <Arrow src={arrow} />
            </LinkWrapper>
          </div>
          <div className="col-xs-10 col-md-7 col-lg-5">
            <SearchWrapper>
              <SearchImg src={magnify} />
              <Search type="text" name="search_bar" placeholder="Try “Miami”" />
            </SearchWrapper>
          </div>
          <div className="col-lg-offset-2 col-lg-4">
            <MediaQuery minDeviceWidth={1124}>
              <Link>Become a host</Link>
              <Link>Help</Link>
              <Link>Sign Up</Link>
              <Link>Log In</Link>
            </MediaQuery>
          </div>
        </div>
      </Wrapper>
    </div>
    <Line />
  </div>
);
