///<reference path="../reducers/index.ts"/>
import * as React from "react";
import {globalStore} from "../reducers/index";

/**
 * the navigation bar
 */
class NavigationBar extends React.Component<{}, {}> {

  /**
   * toggle menu clicked
   */
  toggleMenuClicked() {
    globalStore.actions.ui.toggleSideBar();
  }

  /**
  * Render the component
  * @returns {any}
  */
  render() {
    return (
      <div className="ui top fixed menu">
        <a className="brand item">
          <i className="github icon" />
        </a>
        <a className="item" onClick={globalStore.actions.ui.toggleSideBar}>
            <i className="content icon" />
        </a>
        <div className="item">
            <div id="search-box" className="ui icon input">
                <i className="search icon" />
                <input type="text" placeholder="Search..." />
            </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;