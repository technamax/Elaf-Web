// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { collectionApi } from './Apis/collectionApi';
import { designApi } from './Apis/designApi';
import { lookupApi } from './Apis/lookupApi';
import { prePlanningHeaderApi } from './Apis/prePlanningHeaderApi';
import { userManagementApi } from './Apis/userManagementApi';
import { dashboardApi } from './Apis/dashboardApi';
import { productionApi } from './Apis/productionApi';
import rootReducer from '../../store/reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(collectionApi.middleware)
      .concat(designApi.middleware)
      .concat(lookupApi.middleware)
      .concat(prePlanningHeaderApi.middleware)
      .concat(userManagementApi.middleware)
      .concat(dashboardApi.middleware) // Include the API middleware
      .concat(productionApi.middleware)
});

export default store;
//////////////////////////////////////////////////
//on eact new api store add to rootReducer as well
//////////////////////////////////////////////////
//d
