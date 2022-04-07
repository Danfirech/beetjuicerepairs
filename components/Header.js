import React from "react";
import styled from "styled-components";

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
          <Left></Left>
          <Right></Right>
        </ComponentContainer>
      </Container>
    </>
  );
};

export default Header;
