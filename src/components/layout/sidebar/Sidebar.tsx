import React from "react";
import NavMenu from "../../shared/nav-menu/NavMenu";
import ProfileCard from "../../shared/profile/ProfileCard";
import SidebarHeader from "./SidebarHeader";

export default class Sidebar extends React.Component {
  render() {
    return (
      <nav className="sidebar">
        <SidebarHeader />
        <ProfileCard title="Martha Blair" subTitle="Developer" />
        <hr className="mt-1" />
        <NavMenu />
      </nav>
    );
  }
}
