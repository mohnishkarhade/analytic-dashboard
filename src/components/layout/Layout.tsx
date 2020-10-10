import React from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

export default class Layout extends React.Component {
  render() {
    return (
      <div className="grid-0">
        <div className="col-desk-2 col-mob-0 p-0">
          <Sidebar />
        </div>
        <div className="col-desk-10 col-mob-4 col-tab-10 p-0">
          <Header />
          <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
