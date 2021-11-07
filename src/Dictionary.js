import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`${keyword}`);
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary mt-5">
      <form onSubmit={search}>
        <input type="search" placeholder="Search" onChange={handleKeyword} />
      </form>
    </div>
  );
}
