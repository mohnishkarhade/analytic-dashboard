import React from "react";
import ProfileCard from "../../shared/profile/ProfileCard";
import SidebarHeader from "./SidebarHeader";

export default class Sidebar extends React.Component {
  render() {
    return (
      <nav className="sidebar">
        <SidebarHeader />
        <ProfileCard />
      </nav>
    );
  }
}
