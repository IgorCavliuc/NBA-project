import React from "react";
import "./AddNewTeam.css";
import { Link } from "react-router-dom";
import { Component } from "react";

class AddNewTeam extends Component {
  maxId = 10

  state = {
    id: "",
    image: "",
    label: "",
    division: "",
    conference: "",
    foundation: "",
  };

  onSetChangeData = (e) => {
    this.setState({id: this.maxId++,  [e.target.name]: e.target.value,})  
  };

  onResetData = () => {
    this.setState({
      image: "",
      label: "",
      division: "",
      conference: "",
      foundation: "",
    });
  };

  onAddNewTeam = () => {
    this.props.onClickAddTeams(this.state);
  };

  render() {
    return (
      <div className="addNewContent">
        <Link to="/profile/teams" className="path">
          <p>Teams / Add new team</p>
        </Link>
        <form className="addBlock">
          <div className="addPhoto">
            <input
              type="file"
              name="photo"
              multiple
              accept="image/*,image/jpeg"
            />
          </div>
          <div className="addInfo">
            <p>Name</p>
            <input
              type="text"
              name="label"
              onChange={this.onSetChangeData}
              value={this.state.name}
            ></input>

            <p>Division</p>
            <input
              type="text"
              name="division"
              onChange={this.onSetChangeData}
              value={this.state.division}
            ></input>

            <p>Conference</p>
            <input
              type="text"
              name="conference"
              onChange={this.onSetChangeData}
              value={this.state.conference}
            ></input>

            <p> Year of foundation</p>
            <input
              type="number"
              name="foundation"
              onChange={this.onSetChangeData}
              value={this.state.foundation}
            ></input>

            <div className="addButton">
              <button
                className="cancel"
                type="button"
                onClick={this.onResetData}
              >
                Cancel
              </button>
              <button
                className="save"
                type="button"
                onClick={this.onAddNewTeam}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNewTeam;
