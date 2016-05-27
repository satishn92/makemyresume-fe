import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
import { nonCoreMethods } from 'utils/PageUtils';

class AppBar extends React.Component {

  // ***********************************************
  // Constructors
  // ***********************************************
  constructor(props) {
    super();
    let methods = Object.getOwnPropertyNames(this.constructor.prototype)
        .filter(prop => typeof this[prop] === "function");

    methods.filter(nonCoreMethods).forEach(method => {
      this[method] = this[method].bind(this);
    });
    this.state = this._getState();
    this.stringTermHash = {};
  }

  render() {
    let styles = this.getStyles();
    let searchStyles = this.getSearchInputStyles();
    // Side effect. Not ideal

    return (
      <div style={styles.base}>
        <p style={styles.pageTitle}>PREVIEW</p>
      </div>
    );
  }

  // ***********************************************
  // Private methods, event handlers
  // ***********************************************
  getSearchInputStyles() {
    return {
      appLogo: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        height: "27px"
      }
    };
  }

  getStyles() {
    return {
      base: {
        position: "fixed",
        backgroundColor: "#2857A5",
        height: "60px",
        width: "100%",
        zIndex: 9,
        top: 0,
        boxShadow: "0px 3px 4px #D3D1D1",
        transition: "background-color 1s ease",
        verticalAlign: "middle",
        boxSizing: "border-box",
        display: "table-cell"
      },
      pageTitle: {
        fontSize: "25px",
        fontWeight: "900",
        color: "#FFFFFF",
        margin: "0px",
        marginLeft: "5%",
        marginTop: "15px"
      }
    };
  }

  _getState() {
    return {
      matches: []
    };
  }
}

export default AppBar;
