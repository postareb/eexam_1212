import React, { useEffect, useState } from "react";
import Character from "./components/Character";
import Subscription from "./components/Subscription";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const response = await (
        await fetch("https://demoapi.com/api/series/howimetyourmother")
      ).json();
      console.log(response);
      setData(response);
    };

    dataFetch();
  }, []);

  return (
    <div>
      <div id="frame">
        <div className="main">
          {data.map((character) => {
            return (
              <div className="charProfile">
                <div>Character name: {character.name}</div>
                <div>Details: {character.details}</div>
              </div>
            );
          })}
        </div>

        <Character />
        <Subscription />
      </div>
    </div>
  );
};

export default App;
