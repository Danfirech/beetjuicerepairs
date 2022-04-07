import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../media/Logo.png";

const Container = styled.div`
  height: 120px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ComponentContainer = styled.div`
  height: 120px;
  width: 70%;
  background-color: white;
  border-bottom: 1px solid black;
  display: flex;
`;

const Left = styled.div`
  height: 120px;
  width: 20%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  height: 120px;
  width: 80%;
  background-color: red;
`;

const Header = () => {
  return (
    <>
      <Container>
        <ComponentContainer>
          <Left>
            <Image
              src={logo}
              layout="intrinsic"
              width={130}
              height={120}
              priority
              alt="Logo"
            />
          </Left>
          <Right></Right>
        </ComponentContainer>
      </Container>
    </>
  );
};

export default Header;
