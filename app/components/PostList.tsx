/**
 * Created by banhtieu on 8/29/2016.
 */
import * as React from 'react';
import {BlogState, blogStore} from "../reducers/blog";

declare function marked(text: string): string;
declare var FB: any;

/**
 * the dash board
 */
class PostList extends React.Component<{}, BlogState> {

  /**
   * get state of blog Store
   * @type {BlogState}
   */
  state = blogStore.state;
  private unsubscribe;

  /**
   * component did mount
   */
  componentDidMount() {
    this.unsubscribe = blogStore.subscribe(() => {
      this.setState(blogStore.state);
    });
  }

  componentDidUpdate() {
    //noinspection TypeScriptUnresolvedVariable
    FB.XFBML.parse();
  }

  /**
   * unsubscribe
   */
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <div className="heading">
          <h4>My Blogs</h4>
        </div>
        {this.state.posts.map(post => {
          return (
            <div key={post.name} className="ui blurring content-box">
              <div className="post"
                  dangerouslySetInnerHTML={{ __html: marked(post.content)}}>
              </div>
              <div className="comments">
                <div className="fb-comments"
                     data-href={"https://tuoitrevohoc.github.io"}
                     data-numposts={5}>
                  Comments
                </div>
              </div>
            </div>
          )
        })}

      </div>
    );
  }
}

export default PostList;