import * as React from "react";
import MenuItem from "./MenuItem";

export default class NavMenu extends React.PureComponent {
  render() {
    return (
      <section className="nav-menu">
        <MenuItem menuText="Calendar" iconClassName="lni lni-calendar" />
        <MenuItem menuText="Inbox" iconClassName="lni lni-inbox" />
        <MenuItem menuText="Invoicing" iconClassName="lni lni-wallet" />
        <MenuItem menuText="Lab / Experiment" iconClassName="lni lni-bulb" />
      </section>
    );
  }
}
