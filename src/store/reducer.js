import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import { collectionApi } from 'api/store/Apis/collectionApi';
import { designApi } from 'api/store/Apis/designApi';
import { lookupApi } from 'api/store/Apis/lookupApi';
import { prePlanningHeaderApi } from 'api/store/Apis/prePlanningHeaderApi';
import { userManagementApi } from 'api/store/Apis/userManagementApi';
import { dashboardApi } from 'api/store/Apis/dashboardApi';

// ==============================|| COMBINE REDUCER ||============================== //

const rootReducer = combineReducers({
  customization: customizationReducer,
  [collectionApi.reducerPath]: collectionApi.reducer, // Include the API reducer
  [designApi.reducerPath]: designApi.reducer,
  [lookupApi.reducerPath]: lookupApi.reducer,
  [prePlanningHeaderApi.reducerPath]: prePlanningHeaderApi.reducer,
  [userManagementApi.reducerPath]: userManagementApi.reducer,
  [dashboardApi.reducerPath]: dashboardApi.reducer
});

export default rootReducer;
