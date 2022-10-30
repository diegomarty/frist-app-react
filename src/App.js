import React, {useState} from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";



export default function App() {
  const [keyword, setKeyword] = useState('digimon')

  return (
    <div className="App">
      <section className="App-content">
        <button onClick={() => setKeyword('pokemon')}> cambiar estado</button>
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

