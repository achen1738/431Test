import { SOME_ACTION } from "./actionTypes";

const initialState = {
  someState: ["something"]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SOME_ACTION.PENDING:
    case SOME_ACTION.SUCCESS:
    case SOME_ACTION.ERROR:
      return state;
    default:
      return state;
  }
}
