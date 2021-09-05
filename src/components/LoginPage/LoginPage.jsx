import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "./LoginPage.css";
import SignIN from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  changeLogin = () => {
    if (this.state.isLogin) this.setState({ isLogin: false });
    else this.setState({ isLogin: true });
  };

  render() {
    return (
      <>
        <Container className="about">
          <Container className="container">
            <Row className="row align-items-center my-5">
              <div className="col-lg-5">
                <Row></Row>
              </div>
              <div className="col-lg-6">
                <h1>Personal Expense Tracker</h1>

                <div className="loginpage__signupoption">
                  {this.state.isLogin ? (
                    <div className="loginPage__signin">
                      Don't have an account?
                      <br />
                      <div onClick={this.changeLogin} className="button">
                        Sign up
                      </div>
                    </div>
                  ) : (
                    <div className="loginPage__signup">
                      Have an account?
                      <br />
                      <div onClick={this.changeLogin} className="button">
                        Sign in
                      </div>
                    </div>
                  )}
                </div>
                <div></div>
              </div>
            </Row>
          </Container>
        </Container>
      </>
    );
  }
}

export default LoginPage;
