import React from "react";
import { nonCoreMethods } from 'utils/PageUtils';

export default class AddProjectForm extends React.Component {
  constructor() {
    super();
    let methods = Object.getOwnPropertyNames(this.constructor.prototype)
        .filter(prop => typeof this[prop] === "function");

    methods.filter(nonCoreMethods).forEach(method => {
      this[method] = this[method].bind(this);
    });
  }

  render() {
    let styles = this.getStyles();
    return (
      <div>
        <input type="text" style={styles.nameInput}/>
      </div>
    );
  }

  getStyles() {
    return {
      nameInput: {
        border: "none",
        borderBottom: "1px solid #515050",
        background: "#E0E7F2"
      }
    };
  }
};
