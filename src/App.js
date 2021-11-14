import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App bg-image">
      {" "}
      <div className="container">
        <main>
          <Dictionary defaultKeyword="curious" />
        </main>
      </div>
      <footer>
        {" "}
        <a
          href="https://github.com/RimaGai/dictionary"
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
