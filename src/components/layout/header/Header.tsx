import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header">
          <span className="header__title text-base font-weight-medium">
            Dashboard
          </span>
        </div>
      </header>
    );
  }
}
