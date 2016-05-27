import React from "react";
import { nonCoreMethods } from 'utils/PageUtils';
import SessionStore from 'stores/SessionStore';
import { PropTypes } from "react-router";

export default class Home extends React.Component {
  static contextTypes = { history: PropTypes.history };

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
          {userType === "employee" && (
            <div style={styles.formContainer}>
              <div className="row">
                <div className="three columns" style={{
                  color: "#FFFFFF",
                  verticalAlign: "middle",
                  padding: "10px"
                }}>Username</div>
              <div className="nine columns">
                  <input ref="usernameInput" type="text" style={styles.textInput} placeholder="Enter your Username" />
                </div>
              </div>
              <div className="row" style={{
                marginTop: "30px"
              }}>
                <div className="three columns" style={{
                  color: "#FFFFFF",
                  verticalAlign: "middle",
                  padding: "10px"
                }}>Password</div>
                <div className="nine columns">
                  <input ref="passwordInput" type="password" style={styles.textInput} placeholder="Enter your Password" />
                </div>
                <div style={styles.loginBtn} onClick={this.login}>Login</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  login() {
    let username = this.refs.usernameInput.value;
    let userType = this.state.userType;
    SessionStore.userType = userType;
    SessionStore.username = username;
    if (userType === "employee") {
      this.context.history.replaceState(null, "/employee/resume");
    }
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
      },
      formContainer: {
        width: "500px",
        margin: "100px auto 0"
      },
      textInput: {
        color: "#FFFFFF",
        width: "100%",
        background: "#2857A5",
        border: "1px solid #FFFFFF",
        padding: "10px"
      },
      loginBtn: {
        padding: "12px",
        background: "#FFFFFF",
        margin: "50px auto 0",
        width: "150px",
        textAlign: "center",
        cursor: "pointer"
      }
    }
  }
};
