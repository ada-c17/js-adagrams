import React from "react";
import PropTypes from "prop-types";

const LetterScore = (props) => {
  return (
    <div id="letter-score">
      <text>
        {props.letter}: {props.score}
      </text>
      <br />
    </div>
  );
};

LetterScore.propTypes = {};

export default LetterScore;
