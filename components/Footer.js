import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 200px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ComponentContainer = styled.div`
  height: 200px;
  width: 70%;
  background-color: white;
  display: flex;
`;

const Left = styled.div`
  height: 200px;
  width: 33.3%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Middle = styled.div`
  height: 200px;
  width: 33.3%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Right = styled.div`
  height: 200px;
  width: 33.3%;
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <ComponentContainer>
          <Left>
            <h4>Thing 1</h4>
            <h4>Thing 1</h4>
            <h4>Thing 1</h4>
          </Left>
          <Middle>
            <h4>Social Media 1</h4>
            <h4>Social Media 1</h4>
          </Middle>
          <Right>
            <h4>B33t Ju1cs Enterntainment</h4>
            <h4>BookB33tJu1c3@gmail.com</h4>
          </Right>
        </ComponentContainer>
      </Container>
    </>
  );
};

export default Footer;
