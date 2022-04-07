import React from "react";
import styled from "styled-components";

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
`;

const Left = styled.div`
  height: 600px;
  width: 50%;
  background-color: white;
`;

const Right = styled.div`
  height: 600px;
  width: 50%;
  background-color: grey;
`;

const Rentals = () => {
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

export default Rentals;
