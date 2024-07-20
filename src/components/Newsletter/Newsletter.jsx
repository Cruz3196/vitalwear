import React, { useState } from "react";
import styled from "styled-components";
// import AOS from "aos"
// import "aos/dist/aos.css";

const NewsletterContainer = styled.div`
  font-family: "Jost", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
  padding: 60px;

  @media (max-width: 768px) {
    padding: 40px 30px 40px 30px;
  }
`;

const NewsletterTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.4em;
  }
`;

const NewsletterSubtitle = styled.span`
  font-size: 25px;
  color: #fffcf8;

  @media (max-width: 768px) {
    font-size: 15px;
    text-align: center;
    margin-bottom: 0px;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  margin-top: 20px;
  width: 474px;
  height: 67px;
  background: #ffffff;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 40px;
    width: 95%;
  }
`;

const NewsletterInput = styled.input`
  padding: 10px;
  width: 350px;
  border: none;
  padding-left: 30px;
  font-size: 18px;
  outline: none;

  @media (max-width: 768px) {
    width: 70%;
    font-size: 12px;
    margin-left: 5px;
  }
`;

const NewsletterButton = styled.button`
  width: 110px;
  height: 90%;
  font-size: 18px;
  background: #000000;
  border-radius: 8px;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  margin-right: 5px;
  text-align: center;

  @media (max-width: 768px) {
    width: 25%;
    font-size: 12px;
    margin-right: 2px;
  }
`;

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   AOS.init({duration:1000});
  // }, []); 

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
