import React, { Component } from "react";
import HomeTemplate from "../templates/HomeTemplate";
import Form from "./Form";

class Home extends Component {
  state = {
    isFormVisible: false,
    branch: "",
  };

  redirectToForm = (branch) => {
    this.setState({ isFormVisible: !this.state.isFormVisible, branch });
  };

  goToHome = () => {
    this.setState({ isFormVisible: false });
  };

  render() {
    const { isFormVisible, branch } = this.state;
    return (
      <>
        {isFormVisible ? (
          <Form branch={branch} goToHome={this.goToHome} />
        ) : (
          <HomeTemplate
            goToHome={this.goToHome}
            isFormVisible={this.redirectToForm}
          ></HomeTemplate>
        )}
      </>
    );
  }
}

export default Home;
