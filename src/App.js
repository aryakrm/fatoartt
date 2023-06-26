import "./App.css";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Nav from "./components/Nav/Nav";
import Sec1 from "./components/Sec1/Sec1";
import Sec2 from "./components/Sec2/Sec2";
import Sec3 from "./components/Sec3/Sec3";
import Hakkimizda from "./components/Hakkimizda/Hakkimizda";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="App">
      <motion.div className=" progress-bar" style={{ scaleX }}></motion.div>
      <Nav />
      <Sec1 />
      <Sec2 />
      <Gallery />
      <Sec3 />
      <Hakkimizda />
      <Footer />
    </div>
  );
}

export default App;
