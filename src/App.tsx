import Projects from "./Components/Projects";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {

  return (
    <div className="min-h-screen containerDiv ">

      <Navigation />

      <Hero />

      <About />

      <Projects />

      <Footer />

    </div>
  );
}

export default App;
