import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getCurrentUser } from "../actions/AuthActions";

class AppContainer extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default connect(null, { getCurrentUser })(withRouter(AppContainer));
