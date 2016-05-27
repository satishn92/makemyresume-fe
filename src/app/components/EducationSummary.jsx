import React from "react";
import { nonCoreMethods } from 'utils/PageUtils';

export default class EducationSummary extends React.Component {
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
    let mockdata = this.props.mockdata;
    return (
      <div>
        {mockdata.educationSummary.map((eds, i) => {
          return (
            <div key={i} className="row">
              <div className="three columns">
                <p className="rg-text">{eds.start + " - " + eds.end}</p>
              </div>
              <div className="nine columns">
                <p className="rg-text">{eds.summary}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  getStyles() {
    return {};
  }
};
