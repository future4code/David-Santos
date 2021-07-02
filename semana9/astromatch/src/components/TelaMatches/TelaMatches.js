import './styles.js';
import React, {useState, useEffect} from 'react';
import axios from "axios"

function TelaMatches() {
  
  const [todosMatches, settodosMatches] = useState({});
  
  useEffect(() => {
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/david-ortiz-molina/matches`)
      .then((res) => {
       settodosMatches(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderizatodosMatches = todosMatches.map((match) =>
  <li>{match.id}</li>
);

  return (
    <div className="App">
      {renderizatodosMatches}
    </div>
  );
}

export default TelaMatches;