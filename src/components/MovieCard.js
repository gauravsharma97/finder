import React from "react";
import thumbnail from "../resources/multi.png";

export default function MovieCard(props) {
  const movieURL = "/movie/" + props.url;
  return (
    <div className="card" style={{ height:"300px",position: "relative"}}>
        <a rel="noreferrer"  target="_blank" href={movieURL}>
      <img className="card-img-top" src={thumbnail} alt="Card cap" />
      <div className="card-body">
      
          <p className="card-text">{props.title}</p>
        
      </div>
      </a>
    </div>
  );
}
