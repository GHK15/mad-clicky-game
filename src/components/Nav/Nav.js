import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li id="cur-sco">Score: {props.score}</li>

      <li id="top-sco">Record: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;