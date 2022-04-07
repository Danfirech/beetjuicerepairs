import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../media/Logo.png";

const Container = styled.div`
  height: 700px;
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
  flex-direction: column;
`;

const Top = styled.div`
  height: 200px;
  width: 100%;
  background color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
const Bottom = styled.div`
  height: 400px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BeetJuiceLogo = () => {
  return (
    <>
      <Container>
        <ComponentContainer>
          <Top>
            <h1>Beet Juice Repairs/Rentals/Sales</h1>
          </Top>
          <Bottom>
            <Image
              src={logo}
              layout="intrinsic"
              width={400}
              height={400}
              priority
              alt="Logo"
            />
          </Bottom>
        </ComponentContainer>
      </Container>
    </>
  );
};

export default BeetJuiceLogo;
