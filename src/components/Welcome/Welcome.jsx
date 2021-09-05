import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Welcome.css";
import LoginPage from "../LoginPage/LoginPage";
class Welcome extends Component {
  render() {
    return (
      <>
        {localStorage.getItem("users") == undefined ||
        localStorage.getItem("users") == null ? (
          <LoginPage />
        ) : (
          <Container className="about">
            <Container className="container">
              <Row className="row align-items-center my-5">
                <div className="col-lg-5">
                  <Row></Row>
                </div>
                <div className="col-lg-6">
                  <h1>Personal Expense Tracker</h1>
                  <p>manage your daily expense and hisab kitab</p>
                  <div>
                    <Link className="button" to="/dashboard" exact>
                      Get Started
                    </Link>

                    {/* <Link className="button" to="/login" exact>
               Login
              </Link> */}
                  </div>
                </div>
              </Row>
            </Container>
          </Container>
        )}
      </>
    );
  }
}

export default Welcome;
