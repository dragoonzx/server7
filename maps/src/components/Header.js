import React from "react";
import "../styling/main.css";

class Header extends React.Component {
  render() {
    return (
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui container">
          <div className="ui large secondary inverted pointing menu">
            <a className="active item" href="/">
              RouTy with HERE
            </a>
            <a className="item" href="/">
              Top routes
            </a>
            <a className="item" href="/">
              Friend`s
            </a>
            <div className="right item">
              <a className="ui" style={{ marginRight: "20px" }} href="/">
                <i className="red large map marker alternate icon" />
              </a>
              <a className="ui" href="/">
                <i className="grey big users icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
