import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    return (
      <div className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-conut">{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Navbar;
