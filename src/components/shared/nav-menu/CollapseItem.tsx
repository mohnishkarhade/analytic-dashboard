import * as React from "react";
import MenuItem from "./MenuItem";

interface CollapseItemProps {
  iconClassName?: string;
  menuText: string;
}

interface CollapseItemStates {
  open: boolean;
}

export default class CollapseItem extends React.Component<
  CollapseItemProps,
  CollapseItemStates
> {
  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
    };
  }

  togglePanel = (e: any) => {
    e.stopPropagation();
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div
        className={"collapse-item" + (this.state.open ? " open" : " close")}
        onClick={(e) => this.togglePanel(e)}
      >
        <MenuItem
          menuText={this.props.menuText}
          iconClassName={this.props.iconClassName}
        />
        {this.state.open && (
          <div className="collapse-item__sub-item">
            <MenuItem menuText="Page Visitors" />
            <MenuItem menuText="Post Performance" />
            <MenuItem menuText="Team Overall" />
          </div>
        )}
      </div>
    );
  }
}
