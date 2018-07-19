/**
*
* Counter
*
*/

import React, { Component } from "react";

import PropTypes from "prop-types";

import {
  ThemeProvider,
  LayoutContainer,
  LayoutItem,
  Button
} from "modules/MUI";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1em"
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.state = {
      counterValue: 0, 
    };
  }

  handleIncrease(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({counterValue: this.state.counterValue + 1});
  }

  render() {
    const {counterValue} = this.state; // eslint-disable-line
    return (
      <div style={style}>

        <div>
          <ThemeProvider>
            <LayoutContainer gutter={24}>
              <LayoutItem xs={12}>
                <h2><span>Count: {counterValue}</span></h2>
                <Button 
                  onClick={this.handleIncrease} 
                  raised={true} 
                  primary={true}
                >
                  <span>Button</span>
                </Button>
              </LayoutItem>
            </LayoutContainer>
          </ThemeProvider>
        </div>

      </div>
    );
  }
}

export default Counter;