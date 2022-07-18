import React from "react";
import "./TeamsCart.css";
import { Link } from "react-router-dom";

import img from "../../src/img/POR 1.png";

function TeamsCart({
  image,
  label,
  foundation,
  division,
  conference,
  onClickDetale,
}) {
  const onClickViewDetale = () => {
    const obj = {
      image,
      label,
      foundation,
      division,
      conference,
    };
    onClickDetale(obj);
  };

  return (
    <Link
      to="teamsDetale"
      onClick={onClickViewDetale}
      className="teamsCartContent"
    >
      <div className="teamsCart">
        <img src={img}></img>
        <div className="dataTeams">
          <p className="nameTeams">{label}</p>
          <p className="dateFound">Year of foundation: {foundation}</p>
        </div>
      </div>
    </Link>
  );
}

export default TeamsCart;
