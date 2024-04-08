import Navbar from "./layouts/navbar/Navbar";

function App() {
  return (
    <>
      <header className="relative">
        <Navbar />
      </header>
      <main className="min-h-sreen max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
