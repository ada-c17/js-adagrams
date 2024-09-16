import React from "react";
import PropTypes from "prop-types";
import "./DrawButton.css";
import { drawLetters } from "../adagrams";

const DrawButton = ({ setHand, setHandDisplay }) => {
  const buttonClick = () => {
    const letters = drawLetters();
    setHand(letters);
    setHandDisplay(
      letters.map((letter) => {
        return <text>{letter} </text>;
      })
    );
  };
  return <button onClick={buttonClick}>Draw</button>;
};

DrawButton.propTypes = {};

export default DrawButton;
