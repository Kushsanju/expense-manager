import React, { Component } from "react";
import { getWallets } from "../../actions/projectActions";
export class Dash extends Component {
  render() {
    const wallets = this.props.wallets;
    const wallet = this.props.wallet;
    return (
      <div>
        <h3></h3>
        <h1>Rs. </h1>
      </div>
    );
  }
}

export default Dash;
