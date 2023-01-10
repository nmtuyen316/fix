import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { dataReducer } from "./DataReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { cartReducer } from "./CartReducer/reducer";
import { giftsReducer } from "./GiftsReducer/reducer";
import { reducer as OrderReducer } from "./OrderReducer/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  dataReducer,
  cart: cartReducer,
  AuthReducer,
  giftsReducer,
  OrderReducer,
});

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
