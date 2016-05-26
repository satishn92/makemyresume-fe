import React from "react";

function nonCoreMethods(method) {
  // If a method is a core method, then do not bind it again.
  let whiteList = [
    "constructor",
    "render",
    "componentWillMount",
    "componentDidMount",
    "componentWillReceiveProps",
    "componentWillUpdate",
    "shouldComponentUpdate",
    "componentWillUnmount"
  ];
  return whiteList.indexOf(method) < 0;
}

export default class Home extends React.Component {

  constructor() {
    super();
    let methods = Object.getOwnPropertyNames(this.constructor.prototype)
        .filter(prop => typeof this[prop] === "function");

    methods.filter(nonCoreMethods).forEach(method => {
      this[method] = this[method].bind(this);
    });

    this.state = {
      userType: "employee"
    };
  }

  render() {
    let styles = this.getStyles();
    let userType = this.state.userType;

    return (
      <div style={styles.container}>
        <div style={styles.loginFormContainer}>
          <div style={styles.toggleBtnContainer}>
            <div
              className="toggle-user-margin"
              style={userType === "employee" ? styles.activeToggleBtn: styles.toggleBtn}
              onClick={this.setUserType.bind(null, "employee")}>Employee</div>
            <div
              className="toggle-user-margin"
              style={userType === "employer" ? styles.activeToggleBtn: styles.toggleBtn}
              onClick={this.setUserType.bind(null, "employer")}>Employer</div>
          </div>
        </div>
      </div>
    );
  }

  setUserType(type) {
    this.setState({
      userType: type
    });
  }

  getStyles() {
    return {
      container: {
        height: "100%",
        width: "100%",
        background: "#2857A5",
        paddingTop: "100px"
      },
      loginFormContainer: {
        width: "800px",
        height: "500px",
        margin: "auto",
        border: "2px solid #FFFFFF",
        borderRadius: "5px"
      },
      toggleBtnContainer: {
        border: "2px solid #FFFFFF",
        display: "inline-block",
        marginTop: "20px",
        marginLeft: "320px",
        width: "164px"
      },
      activeToggleBtn: {
        background: "#FFFFFF",
        color: "#2857A5",
        display: "inline-block",
        cursor: "pointer",
        width: "80px",
        padding: "5px 5px"
      },
      toggleBtn: {
        color: "#FFFFFF",
        background: "#2857A5",
        display: "inline-block",
        cursor: "pointer",
        width: "80px",
        padding: "5px 5px"
      }
    }
  }
};
