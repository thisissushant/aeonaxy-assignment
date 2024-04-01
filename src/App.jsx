import {} from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import { Footer } from "./components/Footer";
import { Cta } from "./components/Cta";
import { Faq } from "./components/Faq";
import { Features } from "./components/Features";
import { Table } from "./components/Table";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Card />
      <Features />
      <Table />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
