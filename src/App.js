import React, { useEffect, useState } from "react";
import Character from "./components/Character";
import Subscription from "./components/Subscription";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [subscribeSection, setSubscribeSection] = useState(false);

  useEffect(() => {
    const dataFetch = async () => {
      const response = await (
        await fetch("https://demoapi.com/api/series/howimetyourmother")
      ).json();
      setData(response);
    };
    setTimeout(() => {
      setSubscribeSection(true);
    }, "10000");

    dataFetch();
  }, []);

  return (
    <div>
      <div id="frame">
        {data.length > 0 &&
          data.map((character) => <Character character={character} />)}

        {/* subscribeSection && */ <Subscription />}
      </div>
    </div>
  );
};

export default App;
