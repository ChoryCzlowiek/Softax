import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import Title from "../../atoms/Title/Title";

const StyledInput = styled(Input)`
  margin: 1rem 0;
`;

const StyledTextareaInput = styled(StyledInput)`
  min-height: 20vh;
`;

const StyledTitle = styled(Title)`
  margin: 0 0 2rem;
`;

const StyledButton = styled(Button)`
  margin: 2rem 0 0;
`;

class FormBox extends Component {
  state = {
    fields: {},
    errors: {},
    redirect: false,
  };

  componentDidMount() {
    fetch("https://baconipsum.com/api/?type=all-meat&paras=2")
      .then((res) => res.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        this.setState({ fields: { message: data[randomIndex] } });
      });
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();

    // Zebrane dane do wysłania
    console.log(this.state.fields);

    const seconds = new Date().getSeconds();

    if (this.handleValidation()) {
      if (
        (10 < seconds && seconds <= 19) ||
        (30 < seconds && seconds <= 39) ||
        (50 < seconds && seconds <= 59)
      ) {
        alert("Formularz niestety trafił na złą sekunde, spróbuj ponownie!");
      } else {
        this.setState({ redirect: true });
      }
    } else {
      alert("Nieprawidłowo wypełniony formularz!");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    const { branch } = this.props;

    if (this.state.redirect) {
      return <Redirect to="/success" />;
    }

    if (!this.state.fields["message"]) {
      return <></>;
    }

    return (
      <form onSubmit={this.contactSubmit.bind(this)}>
        <StyledTitle>Skontaktuj się z {branch}!</StyledTitle>
        <StyledInput
          placeholder="Imię i nazwisko"
          type="text"
          onChange={this.handleChange.bind(this, "name")}
          value={this.state.fields["name"]}
          required
        />
        <StyledInput
          placeholder="Email"
          type="email"
          onChange={this.handleChange.bind(this, "email")}
          value={this.state.fields["email"]}
          required
        />
        <StyledTextareaInput
          as="textarea"
          type="text"
          maxlength="5000"
          onChange={this.handleChange.bind(this, "message")}
          defaultValue={this.state.fields["message"]}
          value={this.state.fields["message"]}
          required
        ></StyledTextareaInput>
        <StyledButton type="submit">Wyślij</StyledButton>
      </form>
    );
  }
}

export default FormBox;
