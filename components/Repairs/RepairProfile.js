import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../media/Logo.png";
import { useState } from "react";

function EzraServiceMenu() {
  const [toggle, setToggele] = useState(true);
}

const Container = styled.div`
  height: 2200px;
  width: 100vw;
  background-color: pink;
  display: flex;
  flex-direction: column;
`;

const Banner = styled.div`
  height: 200px;
  width: 100vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Top = styled.div`
  height: 800px;
  width: 100vw;
`;

const TopTop = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TopPic = styled.div`
  height: 400px;
  width: 600px;
  background-color: blue;
`;

const TopBottom = styled.div`
  height: 30%;
  width: 100%;
  padding-right: 400px;
  padding-left: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Middle = styled.div`
  height: 600px;
  width: 100vw;
  background-color: white;
  display: flex;
`;

const MiddleLeft = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: Column;
  align-items: center;
  justify-content: center;
`;

const MiddleRight = styled.div`
  height: 100%;
  width: 60%;
  background-color: white;
  padding-left: 200px;
  padding-right: 200px;
  display: flex;
`;

const ServicesLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 100px;
  padding-bottom: 100px;
`;
const ServicesRight = styled.div`
  height: 100%;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const ServiceBox = styled.div`
  height: 60px;
  width: 300px;
  display: flex;
`;

const ServiceBoxRight = styled.div`
  height: 60px;
  width: 70%;
  background-color: red;
`;

const ServiceBoxLeft = styled.div`
  height: 60px;
  width: 30%;
  background-color: purple;
`;

const Bottom = styled.div`
  height: 600px;
  width: 100vw;
`;

const EzraPage = () => {
  return (
    <>
      <Container>
        <Banner>
          <Image
            src={logo}
            layout="intrinsic"
            width={200}
            height={200}
            priority
            alt="Logo"
          />
        </Banner>
        <Top>
          <TopTop>
            <h1>B33t Ju1c3 Guitar Repair and Service</h1>
            <TopPic></TopPic>
          </TopTop>
          <TopBottom>
            <h1>Lead Guitar Tech: Ezra Bogmas</h1>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </h3>
          </TopBottom>
        </Top>
        <Middle>
          <MiddleLeft>
            <h1>Services</h1>
            <h3>We Repair Guitars, We Know Guitars</h3>
          </MiddleLeft>
          <MiddleRight>
            <ServicesLeft>
              <ServiceBox>
                <ServiceBoxLeft></ServiceBoxLeft>
                <ServiceBoxRight></ServiceBoxRight>
              </ServiceBox>
              <ServiceBox>
                <ServiceBoxLeft></ServiceBoxLeft>
                <ServiceBoxRight></ServiceBoxRight>
              </ServiceBox>
              <ServiceBox>
                <ServiceBoxLeft></ServiceBoxLeft>
                <ServiceBoxRight></ServiceBoxRight>
              </ServiceBox>
              <ServiceBox>
                <ServiceBoxLeft></ServiceBoxLeft>
                <ServiceBoxRight></ServiceBoxRight>
              </ServiceBox>
            </ServicesLeft>
            <ServicesRight></ServicesRight>
          </MiddleRight>
        </Middle>
        <Bottom></Bottom>
      </Container>
    </>
  );
};

export default EzraPage;
