import Hero from "./components/Hero.jsx";
import Demo from "./components/Demo.jsx";

import "./App.css";

const App = () => { 
  return (
    <main>
      <div className="main">
        <div className="gradient"></div>
      </div>

      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default App;