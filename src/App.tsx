import About from "./layouts/aboutSection/About";
import Hero from "./layouts/heroSection/Hero";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen">
      <header className="relative">
        <Navbar />
      </header>
      <main className="min-h-sreen max-w-screen-xl mx-auto">
        <Hero />
        <About />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
