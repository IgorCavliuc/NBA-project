import React from "react";
import "./TeamsDetale.css";
import {Link} from 'react-router-dom'

import Create from "../../src/img/create.png";
import Delete from "../../src/img/delete.png";
import LogoTeams from "../../src/img/logoTeams.png";

function TeamsDetale({ image, label, foundation, division, conference }) {
  return (
    <div className="teamsDetale">
      <Link to='/profile/teams' className="editeteams">
        <p>
          Teams <span>/</span> {label}
        </p>
        <div className="editIco">
          <img src={Create}></img>
          <img src={Delete}></img>
        </div>
      </Link>

      <div className="teamsInfo">
        <div className="teamsPhoto">
          <img src={LogoTeams}></img>
        </div>

        <div className="detaleInfo">
          <div className="teamsName">
            <h1 className="nameInfo">{label}</h1>
          </div>
          <div className="flexInfo">
            <div className="infoBlock">
              <h2 className="infoLabel">Year of foundation</h2>
              <p className="info">{foundation}</p>
            </div>
            <div className="infoBlock">
              <h2 className="infoLabel">Division</h2>
              <p className="info">{division}</p>
            </div>
            <div className="infoBlock">
              <h2 className="infoLabel">Conferece</h2>
              <p className="info">{conference}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamsDetale;
