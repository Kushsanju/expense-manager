import React, { Component } from "react";
import { Link } from "react-router-dom";
import { createTransaction } from "../../../actions/projectActions";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { Button, FormGroup, Label, Input, Row, Container } from "reactstrap";
class AddTransaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      description: "",
      type: "",
    };
  }

  changeHandler = (event, fieldName, checkbox) => {
    this.setState({
      [fieldName]: checkbox ? event.target.checked : event.target.value,
    });
  };
  handleSubmit = (event) => {
    let newTransaction = {
      amount: this.state.amount,
      description: this.state.description,
      type: this.state.type,
    };
    this.props.createTransaction(
      newTransaction,
      this.props.history,
      this.props.match.params.id
    );
    event.preventDefault();
  };

  render() {
    let id = this.props.match.params.id;
    const { amount, description, type } = this.state;
    return (
      <Container className="about">
        <Container className="container">
          <Row className="row align-items-center my-5">
            <div className="col-lg-4">
              <Row></Row>
            </div>
            <div className="col-lg-8">
              <div className="project">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 m-auto">
                      <h1 className="display-4 text-center">
                        Record New Transaction
                      </h1>
                      <Link to={`/transactions/${id}`} className="button">
                        Back to Wallet
                      </Link>
                      <hr />
                      <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                          <Label className="inputbox" for="inputbox">
                            Amount
                          </Label>
                          <Input
                            type="number"
                            min="1"
                            value={amount}
                            onChange={(event) =>
                              this.changeHandler(event, "amount", false)
                            }
                            className="form-control form-control-lg"
                            placeholder="Amount"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label className="inputbox" for="inputbox">
                            Description
                          </Label>
                          <textarea
                            value={description}
                            onChange={(event) =>
                              this.changeHandler(event, "description", false)
                            }
                            className="form-control form-control-lg"
                            placeholder="Description"
                          ></textarea>
                        </FormGroup>
                        <FormGroup>
                          <Label className="inputbox" for="inputbox">
                            Transaction Type:
                          </Label>
                          <div className="form-check form-check-inline">
                            <input
                              checked={type === "1"}
                              className="form-check-input"
                              type="radio"
                              id="income"
                              onChange={(event) =>
                                this.changeHandler(event, "type", false)
                              }
                              value="1"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="income"
                            >
                              <h5>Income</h5>
                            </Label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              checked={type === "2"}
                              className="form-check-input"
                              type="radio"
                              id="expense"
                              onChange={(event) =>
                                this.changeHandler(event, "type", false)
                              }
                              value="2"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="expense"
                            >
                              <h5>Expense</h5>
                            </Label>
                          </div>
                        </FormGroup>

                        <input type="submit" className="button" />
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default connect(null, { createTransaction })(AddTransaction);
