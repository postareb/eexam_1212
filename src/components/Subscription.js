import { useState } from "react";

const Subscription = () => {
  const [input, setInput] = useState("");

  const postFetch = async () => {
    const response = await fetch("https://demoapi.com/api/series/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: input }),
    });
    console.log("response", response);
  };

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
        <button
          onClick={postFetch}
          disabled={!input.includes("@") || !input.includes(".")}
        >
          Subscribe to our newsletter
        </button>
      </div>
    </>
  );
};

export default Subscription;
