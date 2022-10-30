import React, { useEffect, useState } from "react";
import "./App.css";

const GIFS = [
  "https://media1.giphy.com/media/U2nN0ridM4lXy/giphy.webp?cid=ecf05e477fub09n0kg0v2rr014kfz9afhi8395jeh291bslu&rid=giphy.webp&ct=g",
  "https://media1.giphy.com/media/HZpCCbcWc0a3u/200w.webp?cid=ecf05e477fub09n0kg0v2rr014kfz9afhi8395jeh291bslu&rid=200w.webp&ct=g",
];

const GIFS_DIFF = [
  "https://media3.giphy.com/media/m6aZERsqxPiBa/200.webp?cid=ecf05e477fub09n0kg0v2rr014kfz9afhi8395jeh291bslu&rid=200.webp&ct=g",
];

function App() {
  const [gifs, setGifts] = useState(GIFS);

  useEffect(function () {
    setGifts(GIFS_DIFF)
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <img src={singleGif} />
        ))}
        <button onClick={() => setGifts(GIFS_DIFF)}>Cambiar Gifts</button>
      </section>
    </div>
  );
}

export default App;
