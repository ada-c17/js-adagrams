import React, { useState } from "react";
import PropTypes from "prop-types";
import { usesAvailableLetters, scoreWord } from "../adagrams";

const Input = ({ setAnagrams, anagrams, hand, setErrorMessage }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = scoreWord(input);
    const newAnagramsData = { ...anagrams, [input.toUpperCase()]: `${score}` };
    if (usesAvailableLetters(input, hand)) {
      setAnagrams(newAnagramsData);
      setInput("");
    } else {
      setErrorMessage("Use available letters!");
      setInput("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={input} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
};

Input.propTypes = {};

export default Input;
