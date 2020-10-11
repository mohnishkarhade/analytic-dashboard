import * as React from "react";

export default class ListGroup extends React.PureComponent {
  render() {
    return (
      <section className="list-group">
        <div className="list-group__item">
          <a href="#">
            <span>Overall Performance</span>
            <i className="lni lni-arrow-right"></i>
          </a>
        </div>
        <div className="list-group__item">
          <a href="#">
            <span>Invoice #940</span>
            <i className="lni lni-arrow-right"></i>
          </a>
        </div>
        <div className="list-group__item">
          <a href="#">
            <span>Customer: Minerva Viewer</span>
            <i className="lni lni-arrow-right"></i>
          </a>
        </div>
      </section>
    );
  }
}
