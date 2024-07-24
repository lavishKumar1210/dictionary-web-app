import React from "react";
import play from "../assets/play.svg";
import "./Phonetics.css";
import Meanings from "./meanings";

function Phonetics(props) {
  const tempData = {
    text: "",
    audio: "",
  };
  for (const key in props.wordData.phonetics) {
    if (props.wordData.phonetics[key].text !== "") {
      tempData.text = props.wordData.phonetics[key].text;
    }
    if (props.wordData.phonetics[key].audio !== "") {
      tempData.audio = props.wordData.phonetics[key].audio;
    }
  }

  const beat = new Audio(tempData.audio);

  const audioClickHandler = () => {
    beat.play();
  };
  console.log(props.wordData);
  return (
    <div>
      <div className="phonetics">
        <span>
          <div className="name">{props.wordData.word}</div>
          <div className="phonetics-text">{tempData.text}</div>
        </span>
        <img
          src={play}
          alt="play"
          className="play"
          onClick={audioClickHandler}
        />
      </div>
      <div className="Meaning">
        {props.wordData.meanings.map((e) => (
          <Meanings
            key={Math.random().toString()}
            partofSpeech={e.partOfSpeech}
            definition={e.definitions}
            synonyms={e.synonyms}
            antonyms={e.antonyms}
          />
        ))}
      </div>
    </div>
  );
}

export default Phonetics;
