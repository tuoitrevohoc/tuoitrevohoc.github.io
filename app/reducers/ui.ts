import {AppAction} from "../actions/action";

/**
 * UI Action Type
 */
export const ActionType = {
  ToggleLeftMenu: "ToggleLeftMenu",
  AddMenuItem: "AddMenuItem"
};


/**
 * the menu items
 */
export interface MenuItem {
  name: string;
  action: Function;
  selected: boolean;
}

/**
 * @param dispatch
 */
export function UIActions(dispatchFunction: Function) {

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
     * toggle sidebar action
     */
    toggleSideBar() {
      dispatch(ActionType.ToggleLeftMenu);
    },

    /**
     * add menu item
     * @param name
     * @param action
     * @param selected
     */
    addMenuItem(name: string, action: Function, selected: boolean = false) {
      dispatch(ActionType.AddMenuItem, {
        name,
        action,
        selected
      });
    }
  }
}

/**
 * the side bar reducers
 * @param state
 * @param action
 */
export function sideBarReducer(state = false, action: AppAction<any>) {

  /**
   * handle action change
   */
  switch (action.type) {
    case ActionType.ToggleLeftMenu:
      state =!state;
      break;
  }

  return state;
}

/**
 * menu reducer
 * @param state the state
 * @param action
 */
export function menuReducer(state: MenuItem[] = [], action: AppAction<any>) {
  var result = state.splice(0);

  switch (action.type) {
    case ActionType.AddMenuItem:
      let item = action.payload as MenuItem;
      result.push(item);
      break;
  }

  return result;
}