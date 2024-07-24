import Search from "./Components/Search";
import Information from "./Components/Information";
import { useEffect, useState } from "react";

const App = () => {
  const [wordData, setWordData] = useState(null);

  useEffect(() => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/keyboard`;
    const searchHandler = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const tempData = await data[0];
      setWordData(tempData);
    };
    searchHandler();
  }, []);

  const inputHandler = (word) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const searchHandler = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const tempData = await data[0];
      console.log(tempData);

      setWordData(tempData);
    };
    searchHandler();
  };

  return (
    <>
      <Search onValueChange={inputHandler} />
      {wordData !== null && <Information wordData={wordData} />}
    </>
  );
};

export default App;
