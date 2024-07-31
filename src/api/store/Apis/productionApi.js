import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productionApi = createApi({
  reducerPath: 'productionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gecxc.com:449/api/Production/'
  }),
  endpoints: (builder) => ({
    getCollectionListFromPlanningHeader: builder.query({
      query: () => `GetCollectionListFromPlanningHeader?appId=1`
    }),
    getProductionBatchForProcessing: builder.query({
      query: () => `GetProductionBatchForProcessing?appId=1`
    }),
    getProductionProcessList: builder.query({
      query: () => `GetProductionProcessList?appId=1`
    })
  })
});

export const {
  useGetCollectionListFromPlanningHeaderQuery,
  useGetProductionProcessListQuery,
  useGetProductionBatchForProcessingQuery
} = productionApi;
