import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Tours from "./component/Tours";
import { Services } from "./component/Services";
import Footer from "./component/Footer";
import About from "./component/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
