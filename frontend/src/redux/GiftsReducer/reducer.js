import * as data from "./actionType";

const init = {
  gift:{},
  isLoading: false,
  isError: false,
};

const giftsReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case data.GET_GIFT_R: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case data.GET_GIFT_S: {
      return {
        ...state,
        isLoading: false,
        gift: payload,
      };
    }
    case data.GET_GIFT_F: {
      return {
        ...state,
        isError: true,
        gift:{}
      };
    }
    default: {
      return state;
    }
  }
};
export { giftsReducer };
