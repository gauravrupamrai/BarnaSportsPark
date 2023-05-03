import './App.css';
import Navbar from './components/NavBar';
import Banner from './components/Banner';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Hero />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
