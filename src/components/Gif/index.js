import React from "react";
import "./Gif.css";

export default function Gif({ title, id, url }) {
  return (
    <a href={`#${id}`} className='Gif'>
      <img src={url} alt={title} />
      <span className="GifTitle">{title}</span>
    </a>
  );
}
