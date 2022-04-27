import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Container = styled.div`
  height: 1000px;
  width: 100vw;
`;

const Top = styled.div`
  height: 500px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-right: 200px;
  padding-left: 200px;
  background-color: white;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottomMiddle = styled.div`
  height: 500px;
  width: 33.33vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottomRight = styled.div`
  height: 500px;
  width: 33.33vw;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Rental = () => {
  return (
    <>
      <Header></Header>
      <Top>
        <h1>
          Beet Juice Rentals provides an easy DIY rental experience from start
          to finish for your audio needs. Simply select your package, pick your
          date, and when the time comes pick up your portable audio gear. Our
          DIY packages provide you with the needed instructions and guidence to
          set up and run your own audio equiptment!
        </h1>
        <div>
          <Link
            href="/rentalPages/rentalpage2"
            passHref
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Get Started!
          </Link>
        </div>
      </Top>
      <Bottom>
        <BottomLeft>
          <h1>About</h1>
          <h3>Button To About</h3>
        </BottomLeft>
        <BottomMiddle>
          <h1>Set Up Instructions</h1>
          <h3>Find your systems detailed set up instrctions here.</h3>
          <h1>Button to Instructions</h1>
        </BottomMiddle>
        <BottomRight>
          <h1>Location: Nashville, TN</h1>
          <h1>Contact: 616-616-6166</h1>
        </BottomRight>
      </Bottom>
      <Footer></Footer>
    </>
  );
};

export default Rental;
