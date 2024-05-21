// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { collectionApi } from './Apis/collectionApi';
import { designApi } from './Apis/designApi';
import rootReducer from '../../store/reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(collectionApi.middleware)
      .concat(designApi.middleware) // Include the API middleware
});

export default store;
//////////////////////////////////////////////////
//on eact new api store add to rootReducer as well
//////////////////////////////////////////////////
//d
