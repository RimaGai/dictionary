import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      {" "}
      <div className="container">
        <main>
          <Dictionary defaultKeyword="curiosity" />
        </main>
      </div>
      <footer>
        {" "}
        <a
          href="https://github.com/RimaGai/weather-react"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          Open source code
        </a>{" "}
        by Rima Gaileviciute
      </footer>
    </div>
  );
}
