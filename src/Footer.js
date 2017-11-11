import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
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

  @media screen and (min-width: 48rem) {
    padding: 3rem 0 2.75rem 0;
    margin-top: 3.75rem;
  }
`;

const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 48rem) {
    margin-bottom: 1rem;
  }
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
  font-weight: 300;
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
    font-size: 15px;
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

  @media screen and (min-width: 48rem) {
    padding-top: 2rem;
    border-top: none;
  }
`;

const Logo = styled.img``;

const Copyright = styled.p`
  margin: 0;
  margin-left: 0.5rem;
  font-family: Circular Air Book, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
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
  font-weight: 400;
  color: #636363;
`;

const LinkExtended = Link.extend`
  display: block;
  margin-bottom: 11px;
  white-space: nowrap;
`;

const Social = styled.img`
  display: flex;
  margin-right: 0.5rem;
`;

const Heading = styled.h3`
  margin: 0;
  margin-bottom: 19px;
  font-family: Circular Air Bold, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #383838;
`;

const Line = styled.hr`
  margin: 0;
  margin-top: 2.375rem;
  color: #484848;
  opacity: 0.08;
`;

export default () => (
  <div>
    <MediaQuery maxDeviceWidth={767}>
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <SelectWrapper>
                <SelectHidden name="language">
                  <option value="English">English</option>
                </SelectHidden>
                <Select>English</Select>
              </SelectWrapper>
            </div>
            <div className="col-xs-6 col-md-3">
              <SelectWrapper>
                <SelectHidden name="currency">
                  <option value="United States dollar">
                    United States dollar
                  </option>
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
    </MediaQuery>
    <MediaQuery minDeviceWidth={768}>
      <Wrapper>
        <div
          className="container"
          style={{ "margin-left": "0", "margin-right": "0" }}
        >
          <div className="row between-lg">
            <div className="col-md-3 col-lg-3">
              <SelectWrapper>
                <SelectHidden name="language">
                  <option value="English">English</option>
                </SelectHidden>
                <Select>English</Select>
              </SelectWrapper>
              <SelectWrapper>
                <SelectHidden name="currency">
                  <option value="United States dollar">
                    United States dollar
                  </option>
                </SelectHidden>
                <Select>United States dollar</Select>
              </SelectWrapper>
            </div>
            <div className="col-md-offset-1 col-md-3 col-lg-offstet-1 col-lg-3">
              <Heading>Airbnb</Heading>
              <LinkExtended>About us</LinkExtended>
              <LinkExtended>Careers</LinkExtended>
              <LinkExtended>Press</LinkExtended>
              <LinkExtended>Policies</LinkExtended>
              <LinkExtended>Help</LinkExtended>
              <LinkExtended>Diversity & Belongin</LinkExtended>
            </div>
            <div className="col-md-3 col-lg-3">
              <Heading>Discover</Heading>
              <LinkExtended>Trust & Safety</LinkExtended>
              <LinkExtended>Travel Credit</LinkExtended>
              <LinkExtended>Gift Cards</LinkExtended>
              <LinkExtended>Airbnb Citizen</LinkExtended>
              <LinkExtended>Business Travel</LinkExtended>
              <LinkExtended>Guidebooks</LinkExtended>
              <LinkExtended>Airbnbmag</LinkExtended>
            </div>
            <div className="col-md-2 col-lg-2">
              <Heading>Hosting</Heading>
              <LinkExtended>Why Host</LinkExtended>
              <LinkExtended>Hospitality</LinkExtended>
              <LinkExtended>Responsible Hosting</LinkExtended>
              <LinkExtended>Community Center</LinkExtended>
            </div>
          </div>
        </div>
        <div className="container">
          <Line />
          <div className="row between-md bottom-md">
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
        </div>
      </Wrapper>
    </MediaQuery>
  </div>
);
