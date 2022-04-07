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
  background-color: white;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  height: 200px;
  width: 100%;
  background color: black;
`;
const Bottom = styled.div`
  height: 400px;
  width: 100%;
  background-color: blue;
`;

const BeetJuiceLogo = () => {
  return (
    <>
      <Container>
        <ComponentContainer>
          <Top></Top>
          <Bottom></Bottom>
        </ComponentContainer>
      </Container>
    </>
  );
};

export default BeetJuiceLogo;
