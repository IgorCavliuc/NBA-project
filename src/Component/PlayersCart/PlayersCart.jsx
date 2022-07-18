import React from "react";
import "./PlayersCart.css";
import img from "../../src/img/photo.png";
import { Link } from "react-router-dom";

function PlayersCart({
  id,
  image,
  name,
  rating,
  team,
  position,
  height,
  weigth,
  age,
  onClickDetale,
}) {
  const onClickViewDetale = () => {
    const obj = {
      id,
      image,
      name,
      rating,
      team,
      position,
      height,
      weigth,
      age,
    };
    onClickDetale(obj);
  };

  return (
    <Link
      to="playersDetale"
      onClick={onClickViewDetale}
      className="playersCartContent"
    >
      <div key={id} className="playersCart">
        <img src={img}></img>
        <div className="dataplayers">
          <p className="nameplayers">
            {name} <span># {rating}</span>
          </p>
          <p className="dateFound">{team}</p>
        </div>
      </div>
    </Link>
  );
}

export default PlayersCart;
