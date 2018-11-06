import React, { Component } from "react";
import NavBar from "./NavBar";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
    stage: 0,
    pages: [
      "Enter User Details",
      "Enter Personal Details",
      "Confirm",
      "Success"
    ]
  };
  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  nextStage = () => {
    this.setState(prevState => {
      return {
        stage: prevState.stage + 1
      };
    });
  };
  prevStage = () => {
    this.setState(prevState => {
      return {
        stage: prevState.stage - 1
      };
    });
  };
  render() {
    const GetCurrentComponent = () => {
      switch (this.state.stage) {
        case 0:
          return (
            <UserDetails
              firstNameValue={this.state.firstName}
              lastNameValue={this.state.lastName}
              emailValue={this.state.email}
              firstName={this.handleChange}
              email={this.handleChange}
              lastName={this.handleChange}
              nextStage={this.nextStage}
            />
          );
        case 1:
          return (
            <PersonalDetails
              occupationValue={this.state.occupation}
              cityValue={this.state.city}
              bioValue={this.state.bio}
              occupation={this.handleChange}
              city={this.handleChange}
              bio={this.handleChange}
              nextStage={this.nextStage}
              prevStage={this.prevStage}
            />
          );
        case 2:
          return (
            <Confirm
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              email={this.state.email}
              occupation={this.state.occupation}
              city={this.state.city}
              bio={this.state.bio}
              nextStage={this.nextStage}
              prevStage={this.prevStage}
            />
          );
        case 3:
          return <Success />;
        default:
          return null;
      }
    };

    return (
      <div className="App">
        <NavBar page={this.state.pages[this.state.stage]} />
        {GetCurrentComponent()}
      </div>
    );
  }
}

export default App;
