import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import { middleware } from './middleware';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: { contacts: persistedReducer },
  middleware,
});

export const persistor = persistStore(store);
