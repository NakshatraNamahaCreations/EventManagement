import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slice/CartSlice';
import authReducer from '../slice/authSlice';
import loaderReducer from '../slice/LoaderSlice';
import persistStore from 'redux-persist/es/persistStore';
import { persistedReducer } from '../persists/persistsReducer';
const store = configureStore({
  reducer: {
    cart: persistedReducer,
    loader: loaderReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);
export default store;