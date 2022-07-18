import React, { Component } from "react";
import "./AddNewPlayers.css";
import { Link } from "react-router-dom";

class AddNewPlayers extends Component {
  maxId = 100;

  state = {
    id: "",
    image: "",
    name: "",
    rating: "",
    position: "",
    team: "",
    height: "",
    weigth: "",
    age: "",
  };

  onSetChangeData = (e) => {
    this.setState({ id: this.maxId++, [e.target.name]: e.target.value });
  };

  onAddNewPlayer = () => {
    this.props.onClickAddPlayers(this.state);
  };

  render() {
    console.log(this.state);
    return (
      <div className="addNewContent">
        <Link to="/profile/players" className="path">
          <p>Teams / Add new player</p>
        </Link>
        <div className="addBlock">
          <div className="addPhoto">
            <input
              type="file"
              multiple
              accept="image/*,image/jpeg"
              name="image"
              value={this.state.image}
              onChange={this.onSetChangeData}
            />
          </div>
          <div className="addInfo">
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onSetChangeData}
            ></input>

            <p>Position</p>
            <select
              name="position"
              value={this.state.position}
              onChange={this.onSetChangeData}
            >
              <option value="Center Forward">Center Forward</option>
              <option value="Guard Forward">Guard Forward</option>
              <option value="Forward">Forward</option>
              <option value="Center ">Center</option>
              <option value="Guard">Guard</option>
            </select>

            <p>Team</p>
            <select
              name="team"
              value={this.state.team}
              onChange={this.onSetChangeData}
            >
              <option value="Center Forward">Center Forward</option>
              <option value="Center Forward"> Forward</option>
              <option value="Center Forward">Center </option>
            </select>

            <div className="detale">
              <div>
                <p> Height (cm)</p>
                <input
                  type="number"
                  name="height"
                  value={this.state.height}
                  onChange={this.onSetChangeData}
                ></input>
              </div>
              <div>
                <p> Weight (kg)</p>
                <input
                  type="number"
                  name="weigth"
                  value={this.state.weigth}
                  onChange={this.onSetChangeData}
                ></input>
              </div>
              <div>
                <p> Birthday</p>
                <input
                  type="date"
                  name="age"
                  value={this.state.age}
                  onChange={this.onSetChangeData}
                ></input>
              </div>
              <div>
                <p> Number</p>
                <input
                  type="number"
                  name="number"
                  value={this.state.number}
                  onChange={this.onSetChangeData}
                ></input>
              </div>
            </div>

            <div className="addButton">
              <button className="cancel" type="button">
                Cancel
              </button>
              <button
                onClick={this.onAddNewPlayer}
                className="save"
                type="button"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewPlayers;
