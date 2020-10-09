import React from "react";
import { Dropdown } from "react-bootstrap";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header">
          <div className="header__title text-base font-weight-medium">
            Dashboard
          </div>
          <div className="header__language">
            <Dropdown className="c-dropdown">
              <Dropdown.Toggle variant="light" className="px-1">
                <span className="flag-icon flag-icon-gb"></span>&nbsp;&nbsp;ENG
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <span className="flag-icon flag-icon-gb"></span>
                  &nbsp;&nbsp;ENG
                </Dropdown.Item>
                <Dropdown.Item>
                  <span className="flag-icon flag-icon-dk"></span>
                  &nbsp;&nbsp;DEN
                </Dropdown.Item>
                <Dropdown.Item>
                  <span className="flag-icon flag-icon-in"></span>
                  &nbsp;&nbsp;IND
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </header>
    );
  }
}
