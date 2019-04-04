import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <div className="">
        <div className="ui inverted segment right floated five wide column">
          <form clasName="ui inverted tiny form">
            <div className="field" style={{ marginTop: "10px" }}>
              <label style={{ display: "inherit" }}>E-mail:</label>
              <input type="text" placeholder="E-mail" name="e-mail" />
            </div>
            <div className="field" style={{ marginTop: "20px" }}>
              <label style={{ display: "inherit" }}>Password:</label>
              <input type="text" placeholder="Password" name="password" />
            </div>
            <div className="field" style={{ marginTop: "20px" }}>
              <div className="ui checkbox">
                <input type="checkbox" tabIndex="0" className="hidden" />
                <label style={{ color: "white" }}>
                  I agree that I`m going to have a good time
                </label>
              </div>
            </div>
            <button
              className="ui submit button"
              type="submit"
              style={{ marginTop: "13px" }}
            >
              Log in
            </button>
            <button
              className="ui submit button"
              type="submit"
              style={{ marginTop: "13px", marginLeft: "13px" }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
