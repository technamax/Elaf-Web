import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import { collectionApi } from 'api/store/Apis/collectionApi';
import { designApi } from 'api/store/Apis/designApi';
import { lookupApi } from 'api/store/Apis/lookupApi';
import { prePlanningHeaderApi } from 'api/store/Apis/prePlanningHeaderApi';
import { dashboardApi } from '../api/store/Apis/dashboardApi';

// ==============================|| COMBINE REDUCER ||============================== //

const rootReducer = combineReducers({
  customization: customizationReducer,
  [collectionApi.reducerPath]: collectionApi.reducer, // Include the API reducer
  [designApi.reducerPath]: designApi.reducer,
  [lookupApi.reducerPath]: lookupApi.reducer,
  [dashboardApi.reducerPath]: dashboardApi.reducer,
  [prePlanningHeaderApi.reducerPath]: prePlanningHeaderApi.reducer
});

export default rootReducer;
