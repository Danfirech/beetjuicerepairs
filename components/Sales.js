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
  background-color: orange;
  border-bottom: 1px solid black;
`;

const Sales = () => {
  return (
    <>
      <Container>
        <ComponentContainer></ComponentContainer>
      </Container>
    </>
  );
};

export default Sales;
