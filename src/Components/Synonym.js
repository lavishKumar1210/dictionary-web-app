import React from "react";
import "./Synonym.css";

const Synonym = (props) => {
  return (
    <>
      {props.synonyms.map((e) => (
        <span className="Synonym-list"> {e}</span>
      ))}
    </>
  );
};

export default Synonym;
