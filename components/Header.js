import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  height: 120px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ComponentContainer = styled.div`
  height: 120px;
  width: 70%;
  background-color: white;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 400px;
  padding-left: 400px;
`;

const Header = () => {
  return (
    <>
      <Container>
        <ComponentContainer>
          <Link
            href="/"
            passHref
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Repairs
          </Link>
          <Link
            href="/"
            passHref
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Rentals
          </Link>
          <Link
            href="/"
            passHref
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Sales
          </Link>
          <Link
            href="/"
            passHref
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </Link>
        </ComponentContainer>
      </Container>
    </>
  );
};

export default Header;
