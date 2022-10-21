import { useState } from "react";

function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);
  const [character, setCharacter] = useState({});

  const increase = () => {
    setCounter(counter + 1);
    getCharacter(counter + 1);
  };

  
  const decrement = () => {
    setCounter(counter - 1);
    getCharacter(counter - 1);
  };


  const reset = () => setCounter(0);

  const getCharacter = async (counter) => {
    let response = await fetch(
      "https://rickandmortyapi.com/api/character/" + counter
    )
      .then((res) => res.json())
      .catch((e) => "error");
      console.log(response);
    setCharacter( response )

  };

  return {
    counter,
    increase,
    decrement,
    reset,
    character
  };
}

export default useCounter;
