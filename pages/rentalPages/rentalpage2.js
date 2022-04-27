import React from "react";
import styled from "styled-components";
// import Image from 'next/image';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import Speaker from "../../media/Speakers.jpeg";

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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
`;

const Bottom = styled.div`
  height: 500px;
  width: 100vw;
  background-color: pink;
`;

const BottomTop = styled.div`
  height: 20%;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomBottom = styled.div`
  height: 80%;
  width: 100%;
  padding-right: 200px;
  padding-left: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const AddOnBox = styled.div`
  height: 250px;
  width: 300px;
  background-color: white;
`;

const Button = styled.div`
  height: 30px;
  width: 100px;
  background-color: white;
`;

const RentalPage2 = () => {
  return (
    <>
      <Header></Header>
      <Top>
        <PackageBox>
          <PackageBoxTop>
            <Image
              src={Speaker}
              layout="responsive"
              // width={400}
              // height={0}
              priority
              alt="Logo"
            />
          </PackageBoxTop>
          <PackageBoxBottom>
            <Button>
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
            </Button>
          </PackageBoxBottom>
        </PackageBox>
        <PackageBox>
          <PackageBoxTop>
            <Image
              src={Speaker}
              layout="responsive"
              // width={400}
              // height={0}
              priority
              alt="Logo"
            />
          </PackageBoxTop>
          <PackageBoxBottom>
            <Button>
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
            </Button>
          </PackageBoxBottom>
        </PackageBox>
        <PackageBox>
          <PackageBoxTop>
            <Image
              src={Speaker}
              layout="responsive"
              // width={400}
              // height={0}
              priority
              alt="Logo"
            />
          </PackageBoxTop>
          <PackageBoxBottom>
            <Button>
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
            </Button>
          </PackageBoxBottom>
        </PackageBox>
        <PackageBox>
          <PackageBoxTop>
            <Image
              src={Speaker}
              layout="responsive"
              // width={400}
              // height={0}
              priority
              alt="Logo"
            />
          </PackageBoxTop>
          <PackageBoxBottom>
            <Button>
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
            </Button>
          </PackageBoxBottom>
        </PackageBox>
        <PackageBox>
          <PackageBoxTop>
            <Image
              src={Speaker}
              layout="responsive"
              // width={400}
              // height={0}
              priority
              alt="Logo"
            />
          </PackageBoxTop>
          <PackageBoxBottom>
            <Button>
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
            </Button>
          </PackageBoxBottom>
        </PackageBox>
      </Top>
      <Bottom>
        <BottomTop>
          <h1>Add On's</h1>
        </BottomTop>
        <BottomBottom>
          <AddOnBox></AddOnBox>
          <AddOnBox></AddOnBox>
          <AddOnBox></AddOnBox>
        </BottomBottom>
      </Bottom>
      <Footer></Footer>
    </>
  );
};

export default RentalPage2;
