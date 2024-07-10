/* eslint-disable import/no-extraneous-dependencies */
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'ConsumoApi',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );
  return persistedReducers;
};
