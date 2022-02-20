import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";
export default function Phonetic(props) {
  return (
    <div className="Phonetic d-none d-sm-block d-md-none">
      <div className="Text">{props.phonetic.text}/</div>
      <div className="Player mt-3">
        <ReactAudioPlayer src={props.phonetic.audio} controls={true} />
      </div>
    </div>
  );
}
