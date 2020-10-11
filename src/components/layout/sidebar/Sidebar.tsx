import React from "react";
import ListGroup from "../../shared/list-group/ListGroup";
import NavMenu from "../../shared/nav-menu/NavMenu";
import ProfileCard from "../../shared/profile/ProfileCard";
import SidebarHeader from "./SidebarHeader";

export default class Sidebar extends React.Component {
  render() {
    return (
      <nav className="sidebar">
        <SidebarHeader />
        <div className="sidebar__wrapper">
          <ProfileCard title="Martha Blair" subTitle="Developer" />
          <hr className="mt-1" />
          <NavMenu />
          <section className="recent-menu">
            <p className="mb-050 text-grey text-sm">RECENTLY VIEWED</p>
            <ListGroup />
          </section>
        </div>
      </nav>
    );
  }
}
