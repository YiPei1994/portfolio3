import About from "./layouts/aboutSection/About";
import Contact from "./layouts/contactSection/Contact";

import Footer from "./layouts/Footer";
import Hero from "./layouts/heroSection/Hero";
import Navbar from "./layouts/Navbar";
import MyWork from "./layouts/workSection/MyWork";

function App() {
  return (
    <div className="max-w-screen min-h-screen scroll-smooth">
      <header className="relative w-full">
        <Navbar />
      </header>

      <main className="min-h-sreen max-w-screen-xl mx-auto relative">
        <Hero />
        <MyWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
