import React from "react";
import styled from "styled-components";
import arrow from "./img/arrow.svg";
import logoFooter from "./img/logoFooter.svg";
import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";
import instagram from "./img/instagram.svg";

const Wrapper = styled.div`
  position: relative;
  padding: 1rem 0;
  margin-top: 2.5rem;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
`;

const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Select = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 8px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background: #ffffff;
  font-family: Circular Air Light, Helvetica, sans-serif;
  font-size: 12px;
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

const SelectHidden = styled.select`
  position: absolute;
  width: 144px;
  padding: 12px 0;
  opacity: 0;
`;

const CopyrightWrapper = styled.div`
  border-top: 1px solid #f0f0f0;
  padding-top: 1rem;
  display: flex;
  align-items: center;
`;

const Logo = styled.img``;

const Copyright = styled.p`
  margin: 0;
  margin-left: 0.5rem;
  font-family: Circular Air Book, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #636363;
`;

const MiscWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
`;

const Link = styled.a`
  margin-right: 0.75rem;
  text-decoration: none;
  font-family: Circular Air Book, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #636363;
`;

const Social = styled.img`margin-right: 0.5rem;`;

export default () => (
  <Wrapper>
    <div className="container">
      <div className="row">
        <div className="col-xs-6">
          <SelectWrapper>
            <SelectHidden name="language">
              <option value="English">English</option>
            </SelectHidden>
            <Select>English</Select>
          </SelectWrapper>
        </div>
        <div className="col-xs-6">
          <SelectWrapper>
            <SelectHidden name="currency">
              <option value="United States dollar">United States dollar</option>
            </SelectHidden>
            <Select>United States dollar</Select>
          </SelectWrapper>
        </div>
      </div>
      <CopyrightWrapper>
        <Logo src={logoFooter} />
        <Copyright>© Airbnb Inc.</Copyright>
      </CopyrightWrapper>
      <MiscWrapper>
        <Link>Terms</Link>
        <Link>Privacy</Link>
        <Link>Site map</Link>
        <Social src={facebook} />
        <Social src={twitter} />
        <Social src={instagram} />
      </MiscWrapper>
    </div>
  </Wrapper>
);
