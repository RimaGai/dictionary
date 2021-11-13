import React from "react";
import ReactAudioPlayer from "react-audio-player";
export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="text">/{props.phonetic[0].text}/</div>
      <span className="Player">
        <ReactAudioPlayer src={props.phonetic[0].audio} controls={true} />
      </span>
    </div>
  );
}
