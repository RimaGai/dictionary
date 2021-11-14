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

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    let pexelsApiKey =
      "563492ad6f917000010000019174385542934f8f9a26daa4a4f656a1";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
          <div className="col-6">
            <section>
              <h1>Dictionary</h1>
              <form onSubmit={handleSubmit} className="mt-3">
                <input
                  type="search"
                  placeholder="Type a word you are interested in..."
                  onChange={handleKeyword}
                />
              </form>
            </section>
            <Results results={results} />
          </div>
          <div className="col-6">
            <Photos photos={photos} />
            <Footer />
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
