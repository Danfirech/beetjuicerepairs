import React from "react";
import styled from "styled-components";
import Insta from "../media/insta.png";
import FB from "../media/Facebook.jpeg";
import Image from "next/image";

const InstgramLink = (e) => {
  window.location = "https://www.instagram.com/b33tju1c3/?hl=en";
};

const Container = styled.div`
  height: 200px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 700px;
  }
`;

const ComponentContainer = styled.div`
  height: 200px;
  width: 70%;
  background-color: white;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    height: 700px;
  }
`;

const Left = styled.div`
  height: 200px;
  width: 33.3%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Middle = styled.div`
  height: 200px;
  width: 33.3%;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Right = styled.div`
  height: 200px;
  width: 33.3%;
  padding-left: 200px;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: center;
    padding-left: 0px;
  }
`;

const Footer = () => {
  return (
    <>
      <Container>
        <ComponentContainer>
          <Left>
            <h4>Copyright 2022 B33t Ju1c3 Entertainment</h4>
            <h4>B33t Ju1c3 Entertainnment</h4>
          </Left>
          <Middle>
            <div onClick={InstgramLink}>
              <Image
                src={Insta}
                layout="intrinsic"
                width={35}
                height={35}
                priority
                alt="Insta"
              />
            </div>
            <div>
              <Image
                src={FB}
                layout="intrinsic"
                width={35}
                height={35}
                priority
                alt="Facebook"
              />
            </div>
          </Middle>
          <Right>
            <h4>B33t Ju1cs Enterntainment</h4>
            <h4>BookB33tJu1c3@gmail.com</h4>
          </Right>
        </ComponentContainer>
      </Container>
    </>
  );
};

export default Footer;
