import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import RentalPage2 from "./RentalPage2";

const HandleClick = (props) => {
  return (
    <>
      <RentalPage2 />
    </>
  );
};

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
  background-color: white;
  display: flex;
  flex-direction: row;
`;

const BottomLeft = styled.div`
  height: 500px;
  width: 33.33vw;
  background-color: red;
`;

const BottomMiddle = styled.div`
  height: 500px;
  width: 33.33vw;
  background-color: white;
`;

const BottomRight = styled.div`
  height: 500px;
  width: 33.33vw;
  background-color: red;
`;

const RentalPage1 = () => {
  const router = useRouter();
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
        <div>
          <h3>Get Started</h3>
          <button onClick={() => router.push("/RentalPage2")}>Packages</button>
        </div>
      </Top>
      <Bottom>
        <BottomLeft></BottomLeft>
        <BottomMiddle></BottomMiddle>
        <BottomRight></BottomRight>
      </Bottom>
    </>
  );
};

export default RentalPage1;
