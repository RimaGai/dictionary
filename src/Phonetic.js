import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";
export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="Text">/{props.phonetic[0].text}/</div>
      <div className="Player mt-3">
        <ReactAudioPlayer src={props.phonetic[0].audio} controls={true} />
      </div>
    </div>
  );
}
