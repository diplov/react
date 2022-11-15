import { combineReducers, createStore } from "redux";
import cartReducer from "./CartReducer";
import itemReducer from "./ItemsReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  itemStore: itemReducer,
  cartStore: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const myStore = createStore(persistedReducer);
export const myPersistor = persistStore(myStore);

export default myStore;
