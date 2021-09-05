import React, { Component } from "react";
import { storage, auth } from "../firebase";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Container,
} from "reactstrap";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: null,
      name: null,
      userName: null,
      password: null,
    };
  }
  newSignUp = () => {
    auth
      .createUserWithEmailAndPassword(this.state.emailId, this.state.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;

        let payload = {
          userId: user.uid,
          userName: this.state.userName,
          name: this.state.name,
          profileImage: "",
        };

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };

        fetch("http://localhost:8080/users", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("users", JSON.stringify(user));
            window.location.reload();
          })
          .catch((error) => {});

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
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
                        <h5 className="display-4 text-center">Sign Up</h5>
                        <hr />
                        <Form onSubmit={(event) => this.submitHandler(event)}>
                          <FormGroup>
                            <Label className="inputbox" for="inputbox">
                              Mobile Number or email
                            </Label>
                            <Input
                              className="logipage__text"
                              onChange={(event) => {
                                this.state.emailId = event.currentTarget.value;
                              }}
                              type="text"
                              placeholder="Mobile number or Email"
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label className="inputbox" for="inputbox">
                              Full Name
                            </Label>
                            <Input
                              className="logipage__text"
                              onChange={(event) => {
                                this.state.name = event.currentTarget.value;
                              }}
                              type="text"
                              placeholder="Full Name"
                            />
                          </FormGroup>
                          <FormGroup>
                            <FormGroup>
                              <Label className="inputbox" for="inputbox">
                                Username
                              </Label>
                              <Input
                                className="logipage__text"
                                onChange={(event) => {
                                  this.state.userName =
                                    event.currentTarget.value;
                                }}
                                type="text"
                                placeholder="Username"
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label className="inputbox" for="inputbox">
                                password
                              </Label>
                              <Input
                                className="logipage__text"
                                onChange={(event) => {
                                  this.state.password =
                                    event.currentTarget.value;
                                }}
                                type="password"
                                placeholder="Password"
                              />
                            </FormGroup>
                          </FormGroup>
                          <button className="button" onClick={this.newSignUp}>
                            Sign up
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

export default SignUp;
