import React from "react";
import Entry from "./Entry";
import Emojipedia from "../emojipedia";
import Footer from "./Footer";

function createEntry(emoji) {
  return (
    <Entry
      key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      meaning={emoji.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="emojipedia">
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{Emojipedia.map(createEntry)}</dl>
      <Footer />
    </div>
  );
}

export default App;
