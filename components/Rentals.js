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
`;

const ComponentContainer = styled.div`
  height: 600px;
  width: 70%;
  background-color: grey;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  height: 600px;
  width: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  height: 600px;
  width: 50%;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
`;

const ImageBox = styled.div`
  height: 400px;
  width: 400px;
  background-color: black;
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
                height={400}
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
