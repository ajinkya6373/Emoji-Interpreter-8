import "./styles.css";
import { useState } from "react";
const emojiDictionary = {
  "🏝️": "Desert Island",
  "🗽": " Statue of Liberty",
  "🌋": " Volcano",
  "🏦": "Bank",
  "🏬": "Department Store",
  "🏯": " Japanese Castle",
  "🏰": " Castle",
  "💒": " Wedding",
  "🗼": " Tokyo Tower",
  "⛪": " Church",
  "🕌": " Mosque",
  "🛕": " Hindu Temple"
};
export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("");
  const emojis = Object.keys(emojiDictionary);
  const onChangHandler = (e) => {
    const userEmoji = e.target.value;
    setEmoji(userEmoji);
    if (userEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[userEmoji]);
    } else {
      setMeaning("Sorry we can not find meaning of your emoji");
    }
  };

  const emojiClickHandler = (emoji) => {
    if (emoji in emojiDictionary) {
      setMeaning(emojiDictionary[emoji]);
    }
  };

  return (
    <div className="App">
      <h1>
        {" "}
        <span>🚀</span> Travel & Places
      </h1>
      <input
        placeholder={"enter emoji"}
        onChange={onChangHandler}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />

      <h1>{emoji}</h1>
      <h1>{meaning}</h1>

      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          key={emoji}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
