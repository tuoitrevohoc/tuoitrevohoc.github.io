import * as React from 'react';
import NavigationBar from './NavigationBar'
import AppMenu from './AppMenu'
import {Unsubscribe} from "redux";
import {globalStore} from "../reducers/index";

/**
 * the app container
 */
export default class App extends React.Component<{}, {collapsed: Boolean}> {

  /**
   * the default state
   * @type {any}
   */
  state = {
    collapsed: globalStore.state.sidebar
  };

  /**
   * the subscription
   */
  unsubscribe: Unsubscribe;

  /**
   * the component did mount
   */
  componentDidMount() {

    this.unsubscribe = globalStore.subscribe(
       () => this.setState({
         collapsed: globalStore.state.sidebar
       })
    )
  }

  /**
   * component will unmount
   */
  componentWillUnmount() {
    this.unsubscribe();
  }

  /**
   * render the components
   * @returns {XML}
   */
  render() {
    return (
      <div className={this.state.collapsed ? "collapsed" : ""}>
        <NavigationBar/>
        <div className="app-container">
          <AppMenu />
          <div className="app-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
