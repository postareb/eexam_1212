import { useState } from "react";

const Character = ({ character }) => {
  const [showMore, setShowMore] = useState(false);
  if (!character) {
    return null;
  }
  return (
    <>
      <div className="charProfile">
        <div>Character name: {character.name}</div>
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </button>
        {showMore && <div>Details: {character.details}</div>}
      </div>
    </>
  );
};

export default Character;
