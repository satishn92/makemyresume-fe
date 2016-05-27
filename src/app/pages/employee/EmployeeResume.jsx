import React from "react";
import { nonCoreMethods } from 'utils/PageUtils';
import { mockdata } from 'utils/MockData';
import SummaryComponent from 'components/SummaryComponent';
import EducationSummary from 'components/EducationSummary';
import ProjectsSummary from 'components/ProjectsSummary';
import AppBar from 'components/AppBar';

export default class EmployeeResume extends React.Component {
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
      <div style={styles.container}>
        <AppBar />
        <div className="container" style={{
          marginTop: "60px"
        }}>
          <div style={{
            paddingTop: "50px"
          }}></div>
          <div style={styles.section}>
            <SummaryComponent mockdata={mockdata}/>
          </div>
          <div style={{
            paddingTop: "30px"
          }}></div>
          <div style={styles.section}>
            <div style={styles.headerTag}>Educational Summary</div>
              <div style={{
                paddingTop: "10px"
              }}></div>
            <EducationSummary mockdata={mockdata}/>
          </div>
          <div style={{
            paddingTop: "30px"
          }}></div>
          <div style={styles.section}>
            <div style={styles.headerTag}>Project Work</div>
            <div style={{
              paddingTop: "10px"
            }}></div>
            <ProjectsSummary mockdata={mockdata}/>
          </div>
        </div>
      </div>
    );
  }

  getStyles() {
    return {
      container: {
        minHeight: "100%",
        background: "#F4F4F4",
        fontFamily: "Lato"
      },
      section: {
        background: "#E0E7F2",
        boxShadow: "0 0 24px 0 rgba(0, 0, 0, 0.08)",
        padding: "30px 15px 15px",
        position: "relative"
      },
      headerTag: {
        position: "absolute",
        top: "-4px",
        left: "-4px",
        background: "#515050",
        color: "#FFFFFF",
        padding: "8px 12px",
        fontSize: "16px"
      }
    };
  }
};
