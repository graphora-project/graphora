import React, { useState } from "react";

function App() {
  const [words, setWords] = useState([]);
  const [word, setWord] = useState("");

  const fetchWord = (word) =>
    fetch(`https://graphora.herokuapp.com/${word}`).then((data) => data.json());

  const handleSearch = async (e) => {
    e.preventDefault();
    const wordData = await fetchWord(word);
    setWords(wordData);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setWord(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="word">
          insert a word
          <input id="word" type="text" onChange={handleChange} value={word} />
        </label>
        <input type="submit" value="search" />
      </form>
      <ul>
        {words.map((word, index) => (
          <div key={index}>
            <h3>{word.name}</h3>
            <ul>
              <li>status: {word.status}</li>
              <li>direction: {word.direction}</li>
            </ul>
            <hr />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
