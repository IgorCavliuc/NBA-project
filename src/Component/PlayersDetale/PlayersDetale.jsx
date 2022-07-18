import React from "react";
import { Link } from "react-router-dom";
import "../PlayersDetale/PlayersDetale.css";
import PlayersPhoto from "../../src/img/photo1.png";
import Create from "../../src/img/create.png";
import Delete from "../../src/img/delete.png";

function PlayersDetale({
  image,
  name,
  rating,
  team,
  position,
  height,
  weigth,
  age,
}) {
  return (
    <div className="PlayersDetale">
      <Link to="/profile/players" className="editePlayers">
        <p>
          Players <span>/</span> {name}
        </p>
        <div className="editIco">
          <img src={Create}></img>
          <img src={Delete}></img>
        </div>
      </Link>

      <div className="PlayersInfo">
        <div className="playersPhoto">
          <img src={PlayersPhoto}></img>
        </div>

        <div className="detaleInfo">
          <div className="playersName">
            <h1 className="nameInfo">
              {name} <span>#{rating}</span>
            </h1>
          </div>
          <div className="flexInfo">
            <div className="infoBlock">
              <h2 className="infoLabel">Position</h2>
              <p className="info">{position}</p>
            </div>
            <div className="infoBlock">
              <h2 className="infoLabel">Team</h2>
              <p className="info">{team}</p>
            </div>
            <div className="infoBlock">
              <h2 className="infoLabel">Height</h2>
              <p className="info">{height} cm</p>
            </div>
            <div className="infoBlock">
              <h2 className="infoLabel">Weight</h2>
              <p className="info">{weigth} kg</p>
            </div>
            <div className="infoBlock">
              <h2 className="infoLabel">Age</h2>
              <p className="info">{age} years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayersDetale;
