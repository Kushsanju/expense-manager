import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DashBoard.css";
import DashBoardItem from "../DashBoardItem/DashBoardItem";
import { Container, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { getWallets } from "../../actions/projectActions";
export class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalBalance: 0.0,
    };
  }

  componentDidMount() {
    this.props.getWallets();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.wallets) {
      let totalBal = 0;
      for (let i = 0; i < nextProps.wallets.length; i++) {
        totalBal += nextProps.wallets[i].currentBalance;
      }
      this.setState({ totalBalance: totalBal });
    }
  }
  render() {
    const wallets = this.props.wallets;
    let id = this.props.match.params.id;
    const walletComponent = wallets.map((wallet) => (
      <DashBoardItem key={wallet.id} wallet={wallet} />
    ));
    return (
      <>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={6}>
            <h1 className="mywallets">My Wallets</h1>
            <br />
            <div className="btn-group">
              <Dropdown>
                <Dropdown.Toggle
                  className="dropdown"
                  variant=""
                  id="dropdown-basic"
                >
                  Create New
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/createwallet">Wallet</Dropdown.Item>
                  <Dropdown.Item href={`/trns/add/${id}`}>
                    Transaction
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <br />
            <div className="card text-center">
              <div className="card_dashboard">
                <h4>Current Balance (Total)</h4>
                <h1>Rs. {this.state.totalBalance}</h1>
              </div>
            </div>
            <hr />
            {walletComponent}
          </Grid>
        </Grid>
        <Container></Container>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  wallets: state.wallet.wallets,
});

export default connect(mapStateToProps, { getWallets })(DashBoard);
