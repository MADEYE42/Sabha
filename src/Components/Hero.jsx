import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Hero() {
    const{theme,setTheme} = useContext(ThemeContext);
  return (
    <div className="my-10 flex flex-col items-center gap-5">
      <h2 className="text-3xl font-bold text-center">
        TOP 20 PRODUCTIVE IDEAS FOR NEXT PROJECT
      </h2>
      <h2 className="text-center my-3">
        <strong>
          <span className="text-success">Upvote</span> your fave ideas.
        </strong>{" "}
        Write your fav ideas.{" "}
        <strong>
          <span className="text-error">Downvote</span> ideas you don't like.
        </strong>
      </h2>
      <div>
        <select onChange={(event)=>setTheme(event.target.value)}
        class="select select-primary w-full max-w-xs outline-none ">
          <option disabled selected>
            Select Theme
          </option>
          <option>light</option>
          <option>dark</option>
          <option>cupcake</option>
          <option>bumblebee</option>
          <option>retro</option>
          <option>corporate</option>
          <option>synthwave</option>
          <option>emerald</option>
          <option>halloween</option>
          <option>aqua</option>
          <option>sunset</option>
        </select>
      </div>
    </div>
  );
}

export default Hero;
