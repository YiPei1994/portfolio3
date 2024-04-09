import Hero from "./layouts/Hero";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen">
      <header className="relative">
        <Navbar />
      </header>
      <main className="min-h-sreen max-w-screen-xl mx-auto">
        <Hero />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
