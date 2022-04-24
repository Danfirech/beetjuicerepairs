import React from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PackageContainer = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
`;
const Left = styled.div`
  height: 700px;
  width: 50%;
  background-color: blue;
`;

const Right = styled.div`
  height: 700px;
  width: 50%;
  background-color: green;
`;

const Package1 = () => {
  return (
    <>
      <Header></Header>
      <PackageContainer>
        <Left></Left>
        <Right></Right>
      </PackageContainer>

      <Footer></Footer>
    </>
  );
};

export default Package1;
