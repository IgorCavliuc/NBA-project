import React, { useEffect } from "react";
import "./Players.css";
import { Routes, Route, Link } from "react-router-dom";

import PlayersCart from "../PlayersCart/PlayersCart";
import AddNewPlayers from "../AddNewPlayers/AddNewPlayers";
import PlayersEmpty from "../../src/img/PlayersEmpty.png";

import PlayersDetale from "../PlayersDetale/PlayersDetale";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addPlayers } from "../../Redux/action/players";

function Players({ items }) {
  const dispatch = useDispatch();
  const [players, setPlayers] = useState([]);

  const onViewDetale = (obj) => {
    setPlayers(obj);
  };

  const handleAddPlayers = (obj) => {
    dispatch(addPlayers(obj));
  };

  return (
    <div className="teams-content">
      <div className="searchButton">
        <input placeholder="Search" className="input"></input>
        {/* <select className="multeselect" multiple size="3">
          <option>
            Memph Grizles <button type="button">x</button>
          </option>
          <option>
            Denver Nuggets <button type="button">x</button>
          </option>
          <option>
            Oklahoma city <button type="button">x</button>
          </option>
        </select> */}

        <Link to="addPlayer">
          {" "}
          <button className="button" type="button">
            Add +
          </button>
        </Link>
      </div>
      <div className="teamsCard">
        <Routes>
          {/* <Route  path="/" element={<p>Welcome to profile</p>} /> */}
          <Route
            path="/"
            element={
              items ? (
                items.map((item) => (
                  <PlayersCart
                    key={item.id}
                    {...item}
                    onClickDetale={onViewDetale}
                  />
                ))
              ) : (
                <div className="emptyPlayers">
                  <img src={PlayersEmpty}></img>
                  <h1 className="labelEmpty">Empty here</h1>
                  <h1 className="textEmpty">Add new teams continue</h1>
                </div>
              )
            }
          />
          <Route
            path="playersDetale"
            element={<PlayersDetale {...players} />}
          />
          <Route
            path="addPlayer"
            element={<AddNewPlayers onClickAddPlayers={handleAddPlayers} />}
          />
        </Routes>
      </div>
      <div className="cartPage">
        <div className="pageSlide">
          <ul>
            <li>Prev</li>
            <li className="activeLi">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>...</li>
            <li>27</li>
            <li>Next</li>
          </ul>
        </div>
        <div className="cartCount">
          <select name="count" id="count">
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="24">24</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Players;
