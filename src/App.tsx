import Shape from "./components/Shape";
import About from "./layouts/aboutSection/About";
import Contact from "./layouts/contact/Contact";
import Footer from "./layouts/Footer";
import Hero from "./layouts/heroSection/Hero";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div className="max-w-screen min-h-screen scroll-smooth">
      <header className="relative w-full">
        <Navbar />
      </header>

      <main className="min-h-sreen max-w-screen-xl mx-auto relative">
        <Shape
          className=" w-[80%] h-[50%] top-[25%] -left-[50%]"
          type="Three"
        />
        <Shape
          className="w-[90%] h-[20%] opacity-50 top-0 -right-[70%]"
          type="Two"
        />

        <Shape
          className="w-[50%] h-[25%] left-[70%] opacity-25 top-[55%] -z-30 rotate-[80deg]"
          type="One"
        />
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
