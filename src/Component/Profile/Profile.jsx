import React, { useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Logo from "../../src/img/logo.png";
import ProfileLogo from "../../src/img/profile.png";
import SignOut from "../../src/img/input.png";
import TeamsImg from "../../src/img/group_person.png";
import PlayersImg from "../../src/img/person.png";
import StartLogo from "../../src/img/PlayersEmpty.png";
import Teams from "../Teams/Teams";
import "./Profile.css";
import Players from "../Players/Players";
import PlayersDetale from "../PlayersDetale/PlayersDetale";
import TeamsDetale from "../TeamsDetale/TeamsDetale";
import { useState } from "react";
import { fetchTeams } from "../../Redux/action/teams";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayers } from "../../Redux/action/players";

function Profile() {

  const dispatch = useDispatch();
  const itemsTeams = useSelector(({ teams }) => teams.items);
  const itemsPlayers = useSelector(({ players }) => players.items);

  useEffect(() => {
    dispatch(fetchTeams());
    dispatch(fetchPlayers());
  }, []);

  // const viewPlayersDetale = (item) => {
  //   setPlayers(item);
  // };

  return (
    <div className="head-content">
      <div className="head">
        <img className="headLogo" src={Logo}></img>
        <div className="profile">
          <h2 className="name">John Smith</h2>
          <img src={ProfileLogo}></img>
        </div>
      </div>
      <div className="navigation">
        <div className="navTop">
          <ul className="ulNav">
            <li>
              <Link to="teams">
                <img src={TeamsImg}></img>
                <figcaption className="active">Teams</figcaption>
              </Link>
            </li>
            <li>
              <Link to="players">
                <img src={PlayersImg}></img>
                <figcaption>Players</figcaption>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navOut">
          <Link to="/">
            <img src={SignOut}></img>
            <figcaption className="active">Sign Out</figcaption>
          </Link>
        </div>
      </div>
      <div className="components">
        <Routes>
          <Route
            path="/"
            element={
              <div className="startPage">
                <img src={StartLogo}></img>
                <h1>Welcome to profile</h1>
                <p>Please Select Item</p>
              </div>
            }
          />
          <Route path="teams/*" element={<Teams items={itemsTeams} />} />
          <Route path="players/*" element={<Players items={itemsPlayers} />} />
        </Routes>
      </div>
    </div>
  );
}

export default Profile;
