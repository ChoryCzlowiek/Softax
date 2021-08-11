import { CHANGE_MODE } from "../actions/index";

const initialState = {
  isLightMode: false,
  isFormVisible: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      const isLightMode = !state.isLightMode;
      return {
        ...state,
        isLightMode,
      };
    default:
      return state;
  }
};

export default rootReducer;
