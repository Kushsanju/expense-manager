import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getTransactions } from "../../../actions/projectActions";
import { DashBoardItem } from "../../DashBoardItem/DashBoardItem";
import { Container, Dropdown } from "react-bootstrap";
import service from "../../service/service";
import { Grid } from "@material-ui/core";

import "./Transaction.css";
class Transaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // walletid: "",
      id: this.props.match.params.id,
      totalBalance: 0.0,
      transactions: [],
    };
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.transaction.id) {
      let totalBal = 0;
      for (let i = 0; i < nextProps.transaction.id.length; i++) {
        totalBal += nextProps.transaction.id[i].amount;
      }
      this.setState({ totalBalance: totalBal });
      console.log(totalBal);
    }
  }
  componentDidMount() {
    service.getAll(this.state.id).then((res) => {
      this.setState({ transactions: res.data });
      console.log(res.data);
    });
  }

  deleteEmployee(wallets, id) {
    service.deleteEmployee(wallets, id).then((res) => {
      this.setState({
        transaction: this.state.transaction.wallets.filter(
          (transaction) => transaction.id !== id
        ),
      });

      console.log(res);
    });
  }
  render() {
    let id = this.props.match.params.id;
    // const wallets = this.props.wallets;
    // const transaction = this.props.transaction;
    // const walletComponent = (wallet) => (
    //   <Dash key={wallet.id} wallet={wallet} />
    // );
    return (
      <>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={6}>
            <Link to="/dashboard" className="button">
              Back
            </Link>

            <Link to={`/trns/add/${id}`} className="button">
              <i className="fas fa-plus-circle"> Record new Transaction</i>
            </Link>
            {/* <h2>acoount balance</h2>
            <h1>Rs. {this.state.totalBalance}</h1> */}

            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Description</th>
                  <th scope="col">Amount</th>
                  {/* <th scope="col">Type Income:1 Expense:2</th> */}
                  {/* <th></th> */}
                </tr>
              </thead>
              <tbody>
                {this.state.transactions.map((transaction) => (
                  <tr className="table-success" key={transaction.id}>
                    <td> {transaction.transactionDate}</td>
                    <td>{transaction.description}</td>
                    <td className="text-success">Rs. {transaction.amount}</td>
                    {/* <td> {transaction.type}</td> */}
                    <td>
                      {/* <Link className="text-info" to={`/trns/update/${id}`}>
                      <i className="fas fa-edit fa-2x"></i>
                    </Link> */}
                      <span className="text-danger">
                        <i
                          className="fas fa-trash fa-2x"
                          onClick={() =>
                            this.deleteEmployee(
                              transaction.wallets,
                              transaction.id
                            )
                          }
                        ></i>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* <tr className="table-danger">
              <td>2020-04-15</td>
              <td>PTCL Bill</td>
              <td className="text-danger">-3000</td>
              <td>
                <Link className="text-info" to={`/trns/update/${id}`}>
                  <i className="fas fa-edit fa-2x"></i>
                </Link>
                <span className="text-danger">
                  <i className="fas fa-trash fa-2x"></i>
                </span>
              </td>
            </tr> */}
            </table>
          </Grid>
        </Grid>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  transactions: state.transaction.transactions,
  wallets: state.wallet.wallets,
});
export default connect(mapStateToProps, { getTransactions })(Transaction);
