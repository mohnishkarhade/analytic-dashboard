import * as React from "react";

interface MenuItemProps {
  iconClassName?: string;
  menuText: string;
}

export default class MenuItem extends React.PureComponent<MenuItemProps> {
  render() {
    return (
      <a href="#" className="nav-menu__item">
        {this.props.iconClassName && (
          <div className="nav-menu__icon mr-1 text-m">
            <i className={this.props.iconClassName}></i>
          </div>
        )}
        <div className="nav-menu__text font-weight-medium">
          {this.props.menuText}
        </div>
      </a>
    );
  }
}
