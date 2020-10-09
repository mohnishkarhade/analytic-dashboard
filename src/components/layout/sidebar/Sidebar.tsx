import React from "react";
import SidebarHeader from "./SidebarHeader";

export default class Sidebar extends React.Component {
  render() {
    return (
      <nav className="sidebar">
        <SidebarHeader />
      </nav>
    );
  }
}
