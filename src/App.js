import "./App.css";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Nav from "./components/Nav/Nav";
import Sec1 from "./components/Sec1/Sec1";
import Sec2 from "./components/Sec2/Sec2";

function App() {
  return (
    <div className="App">
      <Nav />
      <Sec1 />
      <Sec2 />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
