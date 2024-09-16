import React from "react";
import PropTypes from "prop-types";
import LetterScore from "./LetterScore";
import "./LetterScores.css";
import { availableLetters } from "../adagrams";

const LetterScores = (props) => {
  const scores = Object.keys(availableLetters).map(([letter]) => {
    return <LetterScore letter={letter} score={availableLetters[letter][1]} />;
  });
  return (
    <div id="letter-scores">
      <h3>Scoring</h3>
      {scores}
    </div>
  );
};

LetterScores.propTypes = {};

export default LetterScores;
