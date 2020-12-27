import React, { Component } from "react";
import BMR from "./bmr";
import MBMR from "./mbmr";

class choice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      isImperial: false,
      isMetric: false
    };
  }
  handleGender = (event) => {
    this.setState({ gender: event.target.value });
  };
  call() {
    let gender = this.state.gender;
    if (gender === "1") {
      this.setState({ isImperial: true });
    } else {
      this.setState({ isMetric: true });
    }
  }

  render() {
    if (this.state.isImperial) {
      return (
        <div>
          <BMR />
        </div>
      );
    }
    if (this.state.isMetric) {
      return (
        <div>
          <MBMR />
        </div>
      );
    }

    return (
      <div>
        <div className="inputwrap">
          <h2>BMR &amp; Daily Calorie Calculator</h2>
          <label className="text">PLEASE SELECT ONE OF THE OPTIONS</label>
          <label>
            <input
              type="radio"
              className="genderF"
              name="gender"
              value="1"
              check={this.state.gender === "1"}
              onChange={this.handleGender}
            />
            IMPERIAL CALCULATOR
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
            METRIC CALCULATOR
          </label>
        </div>
        <button type="button" onClick={() => this.call()}>
          PROCEED TO CALCULATOR
        </button>
      </div>
    );
  }
}
export default choice;
