import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import {persistStore,persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { dataReducer } from "./DataReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { cartReducer } from "./CartReducer/reducer";
import { pagesReducer } from "./PagesReducer/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  dataReducer,
  cart: cartReducer,
  AuthReducer,
  pagesReducer,
});
const persistConfig = {
  key:'root',
  storage
}
const persistedReducer = persistReducer(persistConfig,rootReducer)
const store = legacy_createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const persistor = persistStore(store)

export { store,persistor };
