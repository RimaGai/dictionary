import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <h6>
              {definition.definition}
              <br />
              {definition.example}
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </h6>
          </div>
        );
      })}
    </div>
  );
}
