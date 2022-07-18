import React from "react";
import "../Teams/Teams.css";
import { Routes, Route, Link } from "react-router-dom";

import EmptyCart from "../../src/img/illustration.png";
import TeamsCart from "../TeamsCart/TeamsCart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTeams } from "../../Redux/action/teams";

import TeamsDetale from "../TeamsDetale/TeamsDetale";
import AddNewTeam from "../AddNewTeam/AddNewTeam";
import { addTeams } from "../../Redux/action/teams";

function Teams({ items }) {
  const dispatch = useDispatch();
  const [teams, setTeams] = useState([]);
  
  const onViewDetale = (obj) => {
    setTeams(obj);
  };

  const handleAddTeams = (obj) => {
    dispatch(addTeams(obj));
  };

  return (
    <div className="teams-content">
      <div className="searchButton">
        <input placeholder="Search" className="input"></input>
        <Link to="addTeam">
          <button className="button" type="button">
            Add +
          </button>
        </Link>
      </div>
      <div className="teamsCard">
        <Routes>
          <Route
            path="/"
            element={
              items ? (
                items.map((item) => (
                  <TeamsCart
                    key={item.id}
                    {...item}
                    onClickDetale={onViewDetale}
                  />
                ))
              ) : (
                <div className="emptyTeams">
                  <img src={EmptyCart}></img>
                  <h1 className="labelEmpty">Empty here</h1>
                  <h1 className="textEmpty">Add new teams continue</h1>
                </div>
              )
            }
          />
          <Route
            path="addTeam"
            element={<AddNewTeam onClickAddTeams={handleAddTeams} />}
          />
          <Route path="teamsDetale" element={<TeamsDetale {...teams} />} />
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

export default Teams;
