import React, { Component } from "react";
import "./bmr.css";

class mbmr extends Component {
  constructor() {
    super();
    this.state = {
      gender: "",
      weight: "",
      heightCm: "",
      bmr: "",
      act: "",
      error: ""
    };
  }

  handleAge = (event) => {
    this.setState({ age: event.target.value });
  };

  handleWeight = (event) => {
    this.setState({ weight: event.target.value });
  };

  handleGender = (event) => {
    this.setState({ gender: event.target.value });
  };

  handleHeightCm = (event) => {
    this.setState({ heightCm: event.target.value });
  };

  handleActivity = (event) => {
    this.setState({ activity: event.target.value });
  };

  BMR() {
    let age = this.state.age;
    let weight = this.state.weight;
    let gender = this.state.gender;
    let heightCm = this.state.heightCm;
    
    if (
      age === "" ||
      weight === "" ||
      gender === "" ||
      heightCm === "" 
    ) {
      this.setState({ error: "ALL FIELDS REQUIRED" });
      return;
    }
    let cbmr = "";
    
    if (gender === 1) {
      cbmr = 655 + 9.563 * weight + 1.850 * heightCm - 4.676 * age;
    } else {
      cbmr = 66.5 + 13.75 * weight + 5.003 * heightCm - 6.755 * age;
    }
    let pal = this.state.activity;

    let cal = "";
    if (pal === "1.2") {
      cal = 1.2 * cbmr;
    } else if (pal === "1.375") {
      cal = 1.375 * cbmr;
    } else if (pal === "1.55") {
      cal = 1.55 * cbmr;
    } else if (pal === "1.725") {
      cal = 1.725 * cbmr;
    } else if (pal === "1.9") {
      cal = 1.9 * cbmr;
    }
   
    this.setState({ act: cal });

    this.setState({ bmr: cbmr });
    this.setState({ error: "" });
  }

  render() {
    let error;
    if (this.state.error) {
      error = <div className="error">{this.state.error}</div>;
    }
    let resultbmr;
    if (this.state.bmr) {
      resultbmr = (
        <div>
          <div className="result">{this.state.bmr}</div>
          <div className="workout">
            <div className="inputwrap">
              <label className="label">Workout in a Week</label>
              <select
                className="activity"
                name="activity"
                value={this.state.activity}
                onChange={this.handleActivity}
              >
                <option value="">Select your Activity</option>
                <option value="1.2">
                  Sedentary (Very little or no exercise, and desk job)
                </option>
                <option value="1.375">
                  Lightly Active (Light exercise 1 to 3 days per week)
                </option>
                <option value="1.55">
                  Moderately Active (Moderate exercise 3 to 5 days per week)
                </option>
                <option value="1.725">
                  Very Active (Heavy exercise 6 to 7 days per week)
                </option>
                <option value="1.9">
                  Extremely Active (Very intense exercise, and physical job,
                  exercise multiple times per day)
                </option>
              </select>
            </div>
            <button type="button" onClick={() => this.BMR()}>
              Calculate Calories
            </button>
            
          </div>
          <div className="calorie">{this.state.act}</div>
        </div>
      );
    }

    return (
      <div id="bmrcalc">
        <div className="form">
          <h2>BMR &amp; Daily Calorie Calculator</h2>
          <p className="p">(METRIC)</p>
          {error}
          <div className="inputwrap">
            <label className="label">Gender</label>
            <label>
              <input
                type="radio"
                className="genderF"
                name="gender"
                value="1"
                check={this.state.gender === "1"}
                onChange={this.handleGender}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                className="genderM"
                name="gender"
                value="2"
                check={this.state.gender === "2"}
                onChange={this.handleGender}
              />
              Male
            </label>
          </div>
          <div className="inputwrap">
            <label className="label">Weight in Kg</label>
            <input
              type="number"
              name="weight"
              className="weight"
              min="0"
              max="999"
              value={this.state.weight}
              onChange={this.handleWeight}
            />
          </div>
          <div className="inputwrap">
            <label className="label">Height in cm</label>
            <input
              type="number"
              name="heightCm"
              className="heightCm"
              min="0"
              max="8"
              value={this.state.heightCm}
              onChange={this.handleHeightCm}
            />
           
          </div>
          <div className="inputwrap">
            <label className="label">Age in years</label>
            <input
              type="number"
              className="age"
              name="age"
              min="0"
              max="120"
              value={this.state.age}
              onChange={this.handleAge}
            />
          </div>
          <button type="button" onClick={() => this.BMR()}>
            Calculate BMR
          </button>
          {resultbmr}
        </div>
      </div>
    );
  }
}
export default mbmr;
