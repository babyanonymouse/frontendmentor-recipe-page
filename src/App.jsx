import "./index.css"
import Attribution from "./components/Attribution";
import Body from "./components/Body";

function App() {
  return (
    <div className='bg-stone-100 text-stone-600 text-base'>
      <main className="font-outfit font-normal py-16 flex flex-col items-center justify-center min-h-screen">
        <Body />
        <Attribution />
      </main>
    </div>

  );
}

export default App;
