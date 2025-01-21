import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import cartReducer from '../slice/CartSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ["auth"],
};


export const persistedReducer = persistReducer(persistConfig, cartReducer);
