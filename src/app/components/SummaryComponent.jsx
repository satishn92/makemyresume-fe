import React from "react";
import { nonCoreMethods } from 'utils/PageUtils';

export default class SummaryComponent extends React.Component {
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
        <div className="row">
          <div className="one columns">
            <img style={styles.image} src={ require("../../assets/images/ajith.jpg") }/>
          </div>
          <div className="eight columns" style={{
            marginLeft: "30px"
          }}>
            <p style={styles.nameHeading}>{mockdata.summary.name}</p>
            <p style={styles.roleName}>{mockdata.summary.role}</p>
            <p className="rg-text">{mockdata.summary.location}</p>
          </div>
          <div className="three columns">
            <p className="rg-text">{"Experience: " + mockdata.summary.experience + " years"}</p>
            <div style={{
              marginTop: "10px"
            }}></div>
          <p className="rg-text">{"DOB: " + mockdata.summary.dob}</p>
          </div>
        </div>
        <div>
          <p>Skill Sumary:</p>
          <ul>
            {mockdata.skillSummary.map((sm, i) => {
              return (
                <li key={i} className="rg-text">{sm}</li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  getStyles() {
    return {
      nameHeading: {
        margin: "0px",
        fontSize: "25px",
        fontWeight: "700"
      },
      roleName: {
        margin: "0px",
        fontWeight: "400",
        fontSize: "22px"
      },
      image: {
        width: "70px",
        height: "70px",
        borderRadius: "35px"
      }
    };
  }
};
