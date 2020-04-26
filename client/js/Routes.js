import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

class DynamicImport extends Component {
  state = { component: null };

  componentWillMount() {
    this.props
      .load()
      .then((mod) => this.setState(() => ({ component: mod.default })));
  }

  render() {
    return this.props.children(this.state.component);
  }
}

const HomePageContainer = (props) => (
  <DynamicImport load={() => import("./containers/HomePageContainer")}>
    {(Component) =>
      !Component ? <div>Loading...</div> : <Component {...props} />
    }
  </DynamicImport>
);

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={HomePageContainer} />
    </Switch>
  );
};

export default Routes;
