/**
 * Created by banhtieu on 8/29/2016.
 */
import * as React from "react";
import {MenuItem} from "../reducers/ui";
import {globalStore} from "../reducers/index";


interface AppMenuState {
  items: MenuItem[];
}


/**
 * app menu component
 */
class AppMenu extends React.Component<{}, AppMenuState> {

  /**
   * the menu item
   * @type {MenuItem[]}
   */
  state = {
    items: globalStore.state.menu
  };

  /**
   * component will mount
   */
  componentWillMount() {
    globalStore.subscribe(() => {
      this.setState({
        items: globalStore.state.menu
      })
    });

    globalStore.actions.ui.addMenuItem("New Posts", () => {}, false);
    globalStore.actions.ui.addMenuItem("Tags", () => {}, false);
  }

  /**
   * render the app menu
   * @returns {any}
   */
  render() {

    /**
     *
     */
    return (
      <div id="app-menu" className="ui vertical menu">
        {this.state.items.map((item, index) =>
          <a key={index} className="item">
            <i className="block layout icon" />
            <span className="caption">{item.name}</span>
          </a>
        )}
      </div>
    );
  }
}

export default AppMenu;