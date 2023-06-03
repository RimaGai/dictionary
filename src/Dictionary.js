import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import Footer from "./Footer";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    let sheCodesApiKey = "f3474034becbfaec1efe101oeef3cft3";

    let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${sheCodesApiKey}`;

    axios.get(sheCodesApiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="row">
          <div>
            <section>
              <h1>Dictionary</h1>
              <form onSubmit={handleSubmit} className="mt-3 mb-3">
                <input
                  type="search"
                  placeholder="Type a word..."
                  onChange={handleKeyword}
                />
              </form>
            </section>
            <Results results={results} />
          </div>
          <div>
            <Photos photos={photos} />
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
