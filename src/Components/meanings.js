import React from "react";
import Definitions from "./Definitions";
import "./meaning.css";
import Synonym from "./Synonym";

const Meanings = (props) => {
  return (
    <div>
      <div className="part-of-speech">{props.partofSpeech}</div>
      <div className="Meaning-heading">Meaning</div>
      <ul className="main-list">
        {props.definition.map((e) => (
          <Definitions
            key={Math.random().toString()}
            definition={e.definition}
            synonyms={e.synonyms}
            antonyms={e.antonyms}
            example={e.example}
          />
        ))}
      </ul>
      {props.synonyms.length > 0 && (
        <span className="Synonym-antonym-heading-1">Synonym{"     "}</span>
      )}
      <Synonym synonyms={props.synonyms} />
      {props.antonyms.length > 0 && (
        <span className="Synonym-antonym-heading-1">Antonyms{"    "} </span>
      )}
      <Synonym synonyms={props.antonyms} />
    </div>
  );
};

export default Meanings;
