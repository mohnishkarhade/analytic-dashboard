import * as React from "react";

export default class SidebarHeader extends React.PureComponent {
  render() {
    return (
      <section className="sidebar__header">
        <div className="sidebar__logo">
          <i className="lni lni-home"></i>
        </div>
      </section>
    );
  }
}
