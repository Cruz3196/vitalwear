import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.footer`
  background: hsla(0,0%,94.9%,.54);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 0;
`;

const FooterBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  margin-bottom: 100px;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 95%;
    margin-top: 70px;
    margin-bottom: 70px;
    flex-direction: column;
    align-items: center;
  }
`;

const CompanyInfo = styled.div`
  width: 25%;
  height: 90%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 50px;
    align-items: center;
    width: 90%;
  }
`;

const BrandName = styled.span`
  font-size: 40px;
  font-weight: bold;
  font-family: Poppins, sans-serif;
  color: black;
  margin-bottom: 10px;

  span {
    color: tomato;
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const BrandSlogan = styled.span`
  font-size: 20px;
  font-family: Roboto, sans-serif;
  color: #8e8e8e;
  margin-bottom: 35px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const SocialIcons = styled.div`
  a {
    display: inline-block;
    margin-right: 15px;
    color: #000000;
    &:hover {
      transform: scale(1.1);
    }
    &:hover {
      color: tomato;
    }
  }
  @media (max-width: 768px) {
    a {
      margin-right: 7.5px;
      margin-left: 7.5px;
    }
    .responsive-svg {
      width: 38px;
      height: 38px;
    }
  }
`;

const OtherLinks = styled.div`
  width: 50%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const LinkBox = styled.div`
  h3 {
    color: #000000;
  }
  a {
    display: block;
    margin: 15px 0px;
    color: #8e8e8e;
  }
  font-family: Roboto, sans-serif;
  font: 20px;
  color: #8e8e8e;

  @media (max-width: 768px) {
    text-align: center;
    h3 {
      font-size: 1em;
    }
    a {
      font-size: 0.8em;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <CompanyInfo>
          <BrandName>VITAL<span>WEAR</span></BrandName>
          <BrandSlogan>Where fashion meets comfort</BrandSlogan>
          <SocialIcons>
            <a
              href="https://github.com/Cruz3196"
              target="_blank"
              className="github_icon"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/cruzjos9619/"
              target="_blank"
              className="instagram_icon"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="twitter_icon"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/jose-cruz-6056322b3/"
              target="_blank"
              rel="noreferrer"
              className="linkedin_icon"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </SocialIcons>
        </CompanyInfo>
        <OtherLinks>
          <LinkBox>
            <h3>Company</h3>
            <a href="/about">About</a>
            <a href="/contact">Contact Us</a>
            <a href="/support">Support</a>
            <a href="/careers">Careers</a>
          </LinkBox>
          <LinkBox>
            <h3>Quick Links</h3>
            <a href="/share-location">Share Location</a>
            <a href="/order-tracking">Order Tracking</a>
            <a href="/size-guide">Size Guide</a>
            <a href="/faqs">FAQs</a>
          </LinkBox>
          <LinkBox>
            <h3>Legal</h3>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </LinkBox>
        </OtherLinks>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;
