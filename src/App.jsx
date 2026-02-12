import "./App.css";
import Navbar from "./components/Navbar";
import Featured from "./sections/Featured";
import Hero from "./sections/Hero";
import Search from "./sections/Search";
import Arrivals from "./sections/Arrivals";
import Plant from "./sections/Plant";
import Shipping from "./sections/Shipping";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Search />
      <Arrivals />
      <Plant />
      <Shipping />
      <Footer />
    </>
  );
}

export default App;
