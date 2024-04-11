import Shape from "./components/Shape";
import About from "./layouts/aboutSection/About";
import Hero from "./layouts/heroSection/Hero";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div className="w-max-screen min-h-screen">
      <header className="relative w-full">
        <Navbar />
      </header>

      <main className="min-h-sreen max-w-screen-xl mx-auto relative">
        <Shape
          className="w-[100%] h-[70%] top-[25%] -left-[50%]"
          type="Three"
        />
        <Shape
          className="hidden xl:block w-[100%] h-[70%] opacity-50 -top-[15%] -right-[50%]"
          type="Two"
        />
        <Shape
          className="hidden xl:block w-[100%] h-[70%] opacity-75 top-[140%] -right-[45%] rotate-[80deg]"
          type="Two"
        />

        <Shape
          className=" w-[100%] h-[70%] left-[-30%] opacity-75 top-[90%]  rotate-[80deg]"
          type="One"
        />
        <Hero />
        <About />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
