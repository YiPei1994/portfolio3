import Shape from "./components/Shape";
import About from "./layouts/aboutSection/About";
import Hero from "./layouts/heroSection/Hero";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen">
      <header className="relative w-full">
        <Navbar />
      </header>
      <Shape className="w-[100%] h-[70vh] top-[25%] -left-[50%]" type="Three" />
      <Shape
        className="w-[100%] h-[70vh] opacity-50 -top-[15%] -right-[50%]"
        type="Two"
      />
      <main className="min-h-sreen max-w-screen-xl mx-auto relative">
        <Hero />
        <About />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
