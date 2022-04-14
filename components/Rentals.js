import React from "react";
import styled from "styled-components";
import Image from "next/image";
import SoundSystem from "../media/SoundSystem.jpeg";

const Container = styled.div`
  height: 600px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 1000px;
    flex-direction: column;
  }
`;

const ComponentContainer = styled.div`
  height: 600px;
  width: 70%;
  background-color: white;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 700px;
    border-bottom: none;
  }
`;

const Left = styled.div`
  height: 600px;
  width: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    height: 600px;
    width: 100%;
    border-bottom: none;
  }
`;

const Right = styled.div`
  height: 600px;
  width: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    height: 300px;
    width: 100%;
    margin-top: -250px;
  }
`;

const Top = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-right: 70px;
  padding-left: 70px;
  padding-top: 70px;
  @media (max-width: 768px) {
    padding-right: 0px;
    padding-left: 0px;
    padding-top: 0px;
  }
`;

const Bottom = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-right: 70px;
  padding-left: 70px;
  padding-bottom: 170px;
  @media (max-width: 768px) {
    padding-right: 0px;
    padding-left: 0px;
    padding-top: 0px;
    height: 10%;
  }
`;

const ImageBox = styled.div`
  height: 400px;
  width: 400px;
  background-color: white;
  @media (max-width: 768px) {
    height: 200px;
    width: 200px;
  }
`;

const Rentals = () => {
  return (
    <>
      <Container>
        <ComponentContainer>
          <Left>
            <ImageBox>
              <Image
                src={SoundSystem}
                layout="intrinsic"
                width={400}
                height={350}
                priority
                alt="Logo"
              />
            </ImageBox>
          </Left>
          <Right>
            <Top>
              <h1>Rentals</h1>
              <h2>
                Find your gear here, have special request? We can take care of
                that for you. blah blah blah
              </h2>
            </Top>
            <Bottom>
              <h1>BUTTON</h1>
            </Bottom>
          </Right>
        </ComponentContainer>
      </Container>
    </>
  );
};

export default Rentals;
