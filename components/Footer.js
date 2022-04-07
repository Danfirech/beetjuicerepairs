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
  background-color: red;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <ComponentContainer></ComponentContainer>
      </Container>
    </>
  );
};

export default Footer;
