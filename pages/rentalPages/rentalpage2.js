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
  height: 1000px;
  width: 100vw;
  background-color: blue;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding-right: 200px;
  padding-left: 200px;
`;

const PackageBox = styled.div`
  height: 450px;
  width: 330px;
  background-color: white;
`;

const PackageBoxTop = styled.div`
  height: 70%;
  width: 100%;
  background-color: grey;
`;

const PackageBoxBottom = styled.div`
  height: 30%;
  width: 100%;
  background-color: pink;
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
      <Top>
        <PackageBox>
          <PackageBoxTop></PackageBoxTop>
          <PackageBoxBottom>
            <h2>Package 1</h2>
            <button>
              <Link
                href="/rentalPages/package1"
                passHref
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
              >
                Package 1
              </Link>
            </button>
          </PackageBoxBottom>
        </PackageBox>
        <PackageBox>
          <PackageBoxTop></PackageBoxTop>
          <PackageBoxBottom></PackageBoxBottom>
        </PackageBox>
        <PackageBox></PackageBox>
        <PackageBox></PackageBox>
        <PackageBox></PackageBox>
      </Top>
      <Bottom></Bottom>
      <Footer></Footer>
    </>
  );
};

export default RentalPage2;
