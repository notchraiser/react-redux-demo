import { BUY_CAKE_TYPE } from "./CakeTypes";

const InitialCakeState = {
  NumOfCakes: 10,
};
export const CakeReducer = (state = InitialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE_TYPE:
      return { ...state, NumOfCakes: state.NumOfCakes - action.payload };
    default:
      return state;
  }
};
