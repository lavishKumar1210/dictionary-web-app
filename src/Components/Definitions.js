import React from "react";
import "./Definition.css";

const Definitions = (props) => {
  const str = props.example !== undefined ? `${props.example}` : "";
  console.log(str);
  return (
    <>
      <li className="definition">{props.definition}</li>
      <div className="example">{str !== "" && str}</div>
      <div className="synonym-antonym-div">
        {props.synonyms.length > 0 && (
          <span className="Synonym-antonym-heading">Synonyms {"   "}</span>
        )}

        <span className="Synonym-antonym-list">
          {props.synonyms.map((e) => (
            <span className="Synonym-antonym-list-item">{e}</span>
          ))}
        </span>
      </div>

      <div className="synonym-antonym-div">
        {props.antonyms.length > 0 && (
          <span className="Synonym-antonym-heading">Antonyms {"   "}</span>
        )}
        <span className="Synonym-antonym-list">
          {props.antonyms.map((e) => (
            <span className="Synonym-antonym-list-item">{e}</span>
          ))}
        </span>
      </div>
    </>
  );
};

export default Definitions;
