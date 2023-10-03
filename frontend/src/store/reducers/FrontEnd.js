import { SIDEBAR_FUNCTION } from "../constants/FrontEnd";

export const FrontEnd = (state = { open: true }, action) => {
  switch (action.type) {
    case SIDEBAR_FUNCTION:
      return {
        ...state,
        open: action.open,
      };
    default:
      return state;
  }
};
