import Head from "next/head";
import Header from "../components/Header";
import BeetJuiceLogo from "../components/BeetJuiceLogo";
import Repairs from "../components/Repairs";
import Rentals from "../components/Rentals";
import Sales from "../components/Sales";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <BeetJuiceLogo />
      <Repairs />
      <Rentals />
      <Sales />
      <Footer />
    </div>
  );
}
