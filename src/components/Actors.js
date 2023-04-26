import React from "react";
import { actors } from "../data";



function Actors() {
  const theActors= actors.map((actor)=>(
  <div key={actor.name}>
    <h1>{actor.name} </h1>
    <ul>
      {actor.movies.map((actor)=>(
        <li key={actor}>{actor}</li>
      ))}
    </ul>
  </div>
))


  return (
  <div>
    <h1>Actors Page </h1>
    <div>{theActors} </div>
  </div>
  );
}

export default Actors;
