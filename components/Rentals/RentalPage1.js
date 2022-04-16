import React from "react";
import styled from "styled-components";
import Image from "next/image";

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

const RentalPage1 = () => {
  return (
    <>
      <Top>
        <h1>
          Beet Juice Rentals provides an easy DIY rental experience from start
          to finish for your audio needs. Simply select your package, pick your
          date, and when the time comes pick up your portable audio gear. Our
          DIY packages provide you with the needed instructions and guidence to
          set up and run your own audio equiptment!
        </h1>
        <button>PACKAGES</button>
      </Top>
      <Bottom></Bottom>
    </>
  );
};

export default RentalPage1;