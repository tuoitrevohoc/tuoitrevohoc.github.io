

import {Action} from "redux";

/**
 * create an App action
 */
export interface AppAction<T> extends Action {

  /**
   * type of action
   */
  type: string;

  /**
   * the action payload
   */
  payload: T;

}