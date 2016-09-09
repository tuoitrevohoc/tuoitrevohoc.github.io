/**
 * Created by banhtieu on 8/29/2016.
 */
import * as React from 'react';

/**
 * the dash board
 */
class Dashboard extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <div className="heading">
          <h4>My Blogs</h4>
        </div>
        <div className="ui blurring content-box">
          <div className="ui inverted dimmer">
            <div className="ui text loader">Loading...</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;