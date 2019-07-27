import {allReducer} from "./index";
import {action} from "./actions";
import {createStore} from "redux";

export const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// store.dispatch(action);

