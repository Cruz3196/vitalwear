import React, { useState } from "react";
import styled from "styled-components";

const NewsletterContainer = styled.div`
  font-family: "Jost", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
  padding: 60px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const NewsletterTitle = styled.h1`
  font-size: 2.5em;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const NewsletterSubtitle = styled.span`
  font-size: 1.5em;
  color: #fffcf8;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 10px;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
  height: 67px;
  background: #ffffff;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  @media (max-width: 768px) {
    height: 50px;
    padding: 0 5px;
  }
`;

const NewsletterInput = styled.input`
  padding: 10px;
  width: 70%;
  border: none;
  padding-left: 20px;
  font-size: 1em;
  outline: none;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: 5px;
    font-size: 0.9em;
  }
`;

const NewsletterButton = styled.button`
  width: 30%;
  height: 90%;
  font-size: 1em;
  background: #000000;
  border-radius: 8px;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  margin-left: 5px;
  text-align: center;
  border: none;

  @media (max-width: 768px) {
    font-size: 0.8em;
    padding: 5px;
    margin-left: 2px;
  }
`;

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <NewsletterContainer>
      <NewsletterTitle>
        JOIN SHOPPING COMMUNITY <br /> TO GET MONTHLY PROMO
      </NewsletterTitle>
      <NewsletterSubtitle>
        Type your email down below and be young wild generation
      </NewsletterSubtitle>
      <NewsletterForm onSubmit={handleSubmit}>
        <NewsletterInput
          type="email"
          placeholder="Add your mail here"
          onChange={handleChange}
          value={email}
        />
        <NewsletterButton>Subscribe</NewsletterButton>
      </NewsletterForm>
      {visible && <div>You have successfully subscribed!</div>}
    </NewsletterContainer>
  );
};

export default Newsletter;
