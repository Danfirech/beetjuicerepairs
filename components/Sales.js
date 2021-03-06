import React from "react";
import styled from "styled-components";
import Image from "next/image";
import GuitarAmp from "../media/GuitarAmp.jpeg";

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
  background-color: white;
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
  flex-direction: column;
  border-bottom: 1px solid black;
`;

const Right = styled.div`
  height: 600px;
  width: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
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
`;

const ImageBox = styled.div`
  height: 400px;
  width: 400px;
  background-color: white;
`;

const Sales = () => {
  return (
    <>
      <Container>
        <ComponentContainer>
          <Left>
            <Top>
              <h1>Sales</h1>
              <h2>
                Our Guitar Techs can set up and fix your guitars blah blah blah
              </h2>
            </Top>
            <Bottom>
              <h1>BUTTON</h1>
            </Bottom>
          </Left>
          <Right>
            <ImageBox>
              {" "}
              <Image
                src={GuitarAmp}
                layout="intrinsic"
                width={400}
                height={350}
                priority
                alt="Logo"
              />
            </ImageBox>
          </Right>
        </ComponentContainer>
      </Container>
    </>
  );
};

export default Sales;
