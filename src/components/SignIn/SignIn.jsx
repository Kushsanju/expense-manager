import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Container,
} from "reactstrap";
import { storage, auth } from "../firebase";

class SignIN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: null,
      password: null,
    };
  }

  login = () => {
    // localStorage.setItem("users","admin");
    // window.location.reload();
    auth
      .signInWithEmailAndPassword(this.state.emailId, this.state.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        localStorage.setItem("users", JSON.stringify(user));
        window.location.reload();
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
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
                <div className="project">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Sign In</h5>
                        <hr />
                        <Form onSubmit={(event) => this.submitHandler(event)}>
                          <FormGroup>
                            <Label className="inputbox" for="inputbox">
                              Phone number, username, or email
                            </Label>
                            <Input
                              className="logipage__text"
                              onChange={(event) => {
                                this.state.emailId = event.currentTarget.value;
                              }}
                              type="text"
                              placeholder="Phone number, username, or email"
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label className="inputbox" for="inputbox">
                              Password
                            </Label>
                            <Input
                              className="logipage__text"
                              onChange={(event) => {
                                this.state.password = event.currentTarget.value;
                              }}
                              type="password"
                              placeholder="Password"
                            />
                          </FormGroup>
                          <FormGroup></FormGroup>
                          <button className="button" onClick={this.login}>
                            Log In
                          </button>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </Container>
      </>
    );
  }
}

export default SignIN;
