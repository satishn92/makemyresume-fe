import React from "react";
import { nonCoreMethods } from 'utils/PageUtils';

export default class ProjectsSummary extends React.Component {
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
        {mockdata.projectsSummary.map((eds, i) => {
          return (
            <div key={i}>
              {i !== 0 && <div style={{
                marginTop: "20px"
              }}></div>}
              <div className="row">
                <div className="nine columns">
                  <p style={styles.projectName}>{eds.name}</p>
                </div>
                <div className="three columns">
                  <p className="rg-text">{eds.start + " - " + eds.end}</p>
                </div>
              </div>
              <p className="rg-text">{eds.tagLine}</p>
              <ul>
                {eds.summary.map((edss, i0) => {
                  return <li key={i0} className="rg-text">{edss}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }

  getStyles() {
    return {
      projectName: {
        margin: "0px",
        fontSize: "22px",
        fontWeight: "600"
      }
    };
  }
};
