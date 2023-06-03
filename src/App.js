import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App bg-image">
      {" "}
      <div className="hero"></div>
      <div className="container">
        <main>
          <Dictionary defaultKeyword="coding" />
        </main>
      </div>
    </div>
  );
}
