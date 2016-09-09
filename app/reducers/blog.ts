
import {Post} from "../services/BlogLoader";
import {AppAction} from "../actions/action";
import {createStore, StoreCreator} from "redux";
/**
 * action type
 */
export var BlogActionType = {
  PostLoaded: "PostLoaded"
};

/**
 * the blog state
 */
export interface BlogState {
  posts: Post[];
}

/**
 *
 * @param dispatchFunction
 * @returns {{postLoaded: ((post:Post)=>undefined)}}
 * @constructor
 */
export function BlogActions(dispatchFunction: Function) {

  /**
   * dispatch a function
   * @param type
   * @param payload
   */
  function dispatch<T>(type: string, payload: T = undefined) {
    dispatchFunction({
      type,
      payload
    })
  }

  return {

    /**
     * a blog post loaded
     */
    postLoaded(post: Post) {
      dispatch(BlogActionType.PostLoaded, post);
    },
  }
}

/**
 * the blog reducer
 * @param state
 * @param action
 */
function blogReducer(state: BlogState = {posts: []}, action: AppAction<Post>) {

  switch (action.type) {
    case BlogActionType.PostLoaded:
      state.posts.push(action.payload);
      break;
  }

  return state;
}

//noinspection TypeScriptValidateTypes
/**
 * the stores
 * @type {Store<BlogState>}
 */
var store = createStore(blogReducer);

export var blogStore = {
  actions: BlogActions(store.dispatch as Function),
  get state() {
    return store.getState() as BlogState;
  },
  subscribe: store.subscribe
};

