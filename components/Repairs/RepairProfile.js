import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../media/Logo.png";

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
`;

const Middle = styled.div`
  height: 600px;
  width: 100vw;
  background-color: white;
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
            <TopPic></TopPic>
          </TopTop>
          <TopBottom>
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
        <Middle></Middle>
        <Bottom></Bottom>
      </Container>
    </>
  );
};

export default EzraPage;
