import React from "react";
import PropTypes from "prop-types";
import LetterScore from "./LetterScore";

const Anagrams = ({ anagrams, setAnagrams }) => {
  const allAnagrams = Object.keys(anagrams).map((anagram) => {
    console.log(anagram);
    return <LetterScore letter={anagram} score={anagrams[anagram]} />;
  });
  return (
    <div id="letter-scores">
      <h3>Scores</h3>
      {allAnagrams}
    </div>
  );
};

Anagrams.propTypes = {};

export default Anagrams;
