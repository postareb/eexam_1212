import { useState } from "react";
import { useEffect } from "react";

const Subscription = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <div id="frame">
        <input
          id="subscriptionInput"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="email address"
        ></input>
        <button>Subscribe to our newsletter</button>
      </div>
    </>
  );
};

export default Subscription;
