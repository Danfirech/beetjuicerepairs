import React from "react";
import styled from "styled-components";
// import Image from 'next/image';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

const Container = styled.div`
  height: 1000px;
  width: 100vw;
`;

const Top = styled.div`
  height: 500px;
  width: 100vw;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-right: 200px;
  padding-left: 200px;
`;

const Bottom = styled.div`
  height: 500px;
  width: 100vw;
  background-color: pink;
`;

const RentalPage2 = () => {
  return (
    <>
      <Header></Header>
      <Top></Top>
      <Bottom></Bottom>
      <Footer></Footer>
    </>
  );
};

export default RentalPage2;
