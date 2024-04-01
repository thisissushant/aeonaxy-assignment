import {} from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import { Footer } from "./components/Footer";
import { Cta } from "./components/Cta";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Card />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
