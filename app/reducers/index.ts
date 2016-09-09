

import {createStore, combineReducers} from "redux";
import {sideBarReducer, UIActions, MenuItem, menuReducer} from "./ui";

/**
 * the global store
 */
interface StoreState {
  sidebar: Boolean;
  menu: MenuItem[];
}

/**
 * the store
 * @type {Store<S>}
 */
var store = createStore(combineReducers({
  sidebar: sideBarReducer,
  menu: menuReducer
}));

/**
 * all actions
 * @type {{ui: Actions}}
 */
var actions = {
  ui: UIActions(store.dispatch as Function),
};

export var globalStore = {
  actions: actions,
  get state() {
    return store.getState() as StoreState;
  },
  subscribe: store.subscribe
};