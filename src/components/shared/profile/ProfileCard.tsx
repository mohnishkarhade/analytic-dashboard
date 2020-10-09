import * as React from "react";
import { Card } from "react-bootstrap";

export default class ProfileCard extends React.PureComponent {
  render() {
    return (
      <div className="profile-card">
        <div className="profile-card__body text-center">
          <div className="profile-card__image">
            <img src="https://via.placeholder.com/150" />
            <a className="profile-card__setting">
              <span className="lni lni-cog"></span>
            </a>
          </div>
          <div className="profile-card__title font-weight-bold">
            Martha Blair&nbsp;
            <i className="fas fa-circle text-success profile-card__status"></i>
          </div>
        </div>
      </div>
    );
  }
}
