import React, { useState } from "react";
import "./App.css";
import LetterScores from "./components/LetterScores";
import DrawButton from "./components/DrawButton";
import { availableLetters } from "./adagrams.js";
import Input from "./components/Input";
import Anagrams from "./components/Anagrams";

function App() {
  const [hand, setHand] = useState([]);
  const [handDisplay, setHandDisplay] = useState("");
  const [anagrams, setAnagrams] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="App">
      <section id="main">
        <h1 id="title">Anagrams Game</h1>
        <h2 id="hand">{handDisplay}</h2>
        <h3>Write an anagram:</h3>
        <Input
          setAnagrams={setAnagrams}
          anagrams={anagrams}
          hand={hand}
          setErrorMessage={setErrorMessage}
        />
        <p id="error-message">{errorMessage}</p>
        <section id="anagrams">
          <Anagrams anagrams={anagrams} setAnagrams={setAnagrams} />
        </section>
      </section>
      <section className="letter-scores">
        <LetterScores />
      </section>
      <DrawButton setHand={setHand} setHandDisplay={setHandDisplay} />
    </div>
  );
}

export default App;
