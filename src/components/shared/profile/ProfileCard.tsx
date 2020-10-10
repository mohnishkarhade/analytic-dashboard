import * as React from "react";

interface ProfileCardProps {
  title?: string;
  subTitle?: string;
}

export default class ProfileCard extends React.PureComponent<ProfileCardProps> {
  render() {
    return (
      <div className="profile-card">
        <div className="profile-card__body text-center">
          <div className="profile-card__image">
            <img src="public/img/profile/profile-card-img.jpg" />
            <a href="#" className="profile-card__setting">
              <span className="lni lni-cog"></span>
            </a>
          </div>
          <div className="profile-card__title font-weight-bold">
            {this.props.title} &nbsp;
            <i className="fas fa-circle text-success profile-card__status"></i>
          </div>
          <div className="profile-card__sub-title text-xs text-grey">
            {this.props.subTitle}
          </div>
        </div>
      </div>
    );
  }
}
