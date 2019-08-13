import { combineReducers } from "redux";
import { NAME } from "./constants";
import reducer from "./appReducer";

const reducers = combineReducers({
  [NAME]: reducer
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
