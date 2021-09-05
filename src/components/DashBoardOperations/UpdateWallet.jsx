import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Container,
} from "reactstrap";
import "./Wallet.css";
import { getWallet, updateWallet } from "../../actions/projectActions";
export class UpdateWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      accountNumber: "",
      description: "",
      priority: "",
      currentBalance: "",
      errors: "",
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.wallet) {
      this.setState({
        id: nextProps.wallet.id,
        name: nextProps.wallet.name,
        accountNumber: nextProps.wallet.accountNumber,
        description: nextProps.wallet.description,
        currentBalance: nextProps.wallet.currentBalance,
        priority: nextProps.wallet.priority,
      });
    }
  }
  componentDidMount() {
    this.props.getWallet(this.props.match.params.id);
  }

  changeHandler = (event, fieldName) => {
    this.setState({
      [fieldName]: event.target.value,
    });
  };

  submitHandler = (event) => {
    const updateWallet = {
      id: this.state.id,
      name: this.state.name,
      accountNumber: this.state.accountNumber,
      description: this.state.description,
      currentBalance: this.state.currentBalance,
      priority: this.state.priority,
    };
    this.props.updateWallet(this.state.id, updateWallet, this.props.history);
    event.preventDefault();
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
                        <h5 className="display-4 text-center">Update Wallet</h5>
                        <hr />
                        <Form onSubmit={(event) => this.submitHandler(event)}>
                          <FormGroup>
                            <Label className="inputbox" for="inputbox">
                              Account Name
                            </Label>
                            <Input
                              value={this.state.name}
                              onChange={(event) =>
                                this.changeHandler(event, "name")
                              }
                              className={classnames(
                                "form-control form-control-lg",
                                {
                                  "is-invalid": this.state.errors.name,
                                }
                              )}
                              type="text"
                              value={this.state.name}
                              name="text"
                              id="exampleText"
                            />
                            <p className="text-danger">
                              {this.state.errors.name}
                            </p>
                          </FormGroup>
                          <FormGroup>
                            <Label className="inputbox" for="inputbox">
                              Account Number
                            </Label>
                            <Input
                              onChange={(event) =>
                                this.changeHandler(event, "accountNumber")
                              }
                              className={classnames(
                                "form-control form-control-lg",
                                {
                                  "is-invalid": this.state.errors.accountNumber,
                                }
                              )}
                              type="text"
                              name="text"
                              value={this.state.accountNumber}
                              id="exampleText"
                            />
                            <p className="text-danger">
                              {this.state.errors.accountNumber}
                            </p>
                          </FormGroup>
                          <FormGroup>
                            <Label className="inputbox" for="inputbox">
                              Current Balance
                            </Label>
                            <Input
                              onChange={(event) =>
                                this.changeHandler(event, "currentBalance")
                              }
                              className={classnames(
                                "form-control form-control-lg",
                                {
                                  "is-invalid":
                                    this.state.errors.currentBalance,
                                }
                              )}
                              type="text"
                              name="text"
                              id="exampleText"
                            />
                            <p className="text-danger">
                              {this.state.errors.currentBalance}
                            </p>
                          </FormGroup>

                          <FormGroup>
                            <FormGroup>
                              <Label className="inputbox" for="inputbox">
                                Description
                              </Label>
                              <Input
                                onChange={(event) =>
                                  this.changeHandler(event, "description")
                                }
                                type="textarea"
                                name="text"
                                value={this.state.description}
                                id="exampleText"
                              />
                            </FormGroup>

                            <FormGroup>
                              <Label className="inputbox" for="inputbox">
                                Priority
                              </Label>
                              <select
                                value={this.state.priority}
                                className="form-control form-control-lg"
                                onChange={(event) =>
                                  this.changeHandler(event, "priority")
                                }
                              >
                                <option value={3}>Display Priority</option>
                                <option value={1}>High</option>
                                <option value={2}>Medium</option>
                                <option value={3}>Low</option>
                              </select>
                            </FormGroup>
                          </FormGroup>

                          <input
                            type="submit"
                            className="button"
                            value="Update"
                          />
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
const mapStateToProps = (state) => ({
  errors: state.errors,
  wallet: state.wallet.wallet,
});

export default connect(mapStateToProps, { getWallet, updateWallet })(
  UpdateWallet
);
