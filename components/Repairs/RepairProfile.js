import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../../media/logo1.jpeg';

const Container = styled.div`
  height: 2200px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const Banner = styled.div`
  height: 200px;
  width: 100%;
  background-color: #a4613a;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: 'Nunito';
  }
`;

const Top = styled.div`
  height: 40%;
  width: 100%;
  background-color: #eee3b7;
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
  padding-bottom: 100px;
`;

const Middle = styled.div`
  height: 40%;
  width: 100vw;
  background-color: #a4613a;
  display: flex;
  padding-right: 400px;
  padding-left: 400px;
`;

const MiddleLeft = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  background-color: #a4613a;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
`;

const MiddleRight = styled.div`
  height: 100%;
  width: 70%;

  background-color: #a4613a;
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
  display: flex;
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
  width: 80%;
  background-color: red;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

const ServiceBoxLeft = styled.div`
  height: 60px;
  width: 20%;
  background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  height: 20%;
  width: 100vw;
  display: flex;
  background-color: #eee3b7;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
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
          <h1>B33t Ju1c3 Guitar Repair and Service</h1>
        </Banner>
        <Top>
          <TopTop>
            <TopPic />
          </TopTop>
          <TopBottom>
            <h1>Lead Guitar Tech: Ezra Bogmas</h1>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
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
                <ServiceBoxRight>Intonation</ServiceBoxRight>
              </ServiceBox>
              <ServiceBox>
                <ServiceBoxLeft></ServiceBoxLeft>
                <ServiceBoxRight>Nut Replacment/Modification</ServiceBoxRight>
              </ServiceBox>
              <ServiceBox>
                <ServiceBoxLeft></ServiceBoxLeft>
                <ServiceBoxRight>Electric Work and Sodering</ServiceBoxRight>
              </ServiceBox>
              <ServiceBox>
                <ServiceBoxLeft></ServiceBoxLeft>
                <ServiceBoxRight>Truss Rod Adjustment</ServiceBoxRight>
              </ServiceBox>
            </ServicesLeft>
            <ServicesRight>
              <ServiceBox>
                <ServiceBoxLeft></ServiceBoxLeft>
                <ServiceBoxRight>
                  Hardware Replacment/Modification
                </ServiceBoxRight>
              </ServiceBox>
              <ServiceBox>
                <ServiceBoxLeft></ServiceBoxLeft>
                <ServiceBoxRight>Consultations</ServiceBoxRight>
              </ServiceBox>
              <ServiceBox>
                <ServiceBoxLeft></ServiceBoxLeft>
                <ServiceBoxRight>Relic Work/Fret Polishing</ServiceBoxRight>
              </ServiceBox>
              <ServiceBox>
                <ServiceBoxLeft></ServiceBoxLeft>
                <ServiceBoxRight>Edge Filing</ServiceBoxRight>
              </ServiceBox>
            </ServicesRight>
          </MiddleRight>
        </Middle>
        <Bottom>
          <h1>Pricing</h1>
          <Button>Contact for a free quote</Button>
        </Bottom>
      </Container>
    </>
  );
};

export default EzraPage;
