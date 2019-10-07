import React, { Component } from "react";
import NavigationPresenter from "./NavigationPresenter";
import PropTypes from "prop-types";

class NavigationContainer extends Component {
  state = {
    term: ""
  };
  static propTypes = {
    goToSearch: PropTypes.func.isRequired
  };
  render() {
    const { term } = this.state;
    return (
      <NavigationPresenter
        onSubmit={this._onSubmit}
        onInputChange={this._onInputChange}
        value={term}
      />
    );
  }
  _onInputChange = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      term: value
    });
  };
  _onSubmit = event => {
    const { goToSearch } = this.props;
    const { term } = this.state;
    event.preventDefault();
    goToSearch(term);
    this.setState({
      term: ""
    });
  };
}

export default NavigationContainer;
