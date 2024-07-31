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
    getDesignListFromCompletedCollectionId: builder.query({
      query: (collectionId) =>
        `GetDesignListFromCompletedCollectionId?appId=1&Collectionid=${collectionId}`
    }),
    getProductionBatchForProcessing: builder.query({
      query: () => `GetProductionBatchForProcessing?appId=1`
    }),
    getProductionProcessList: builder.query({
      query: () => `GetProductionProcessList?appId=1`
    }),
    getProductionProcessByProductionId: builder.query({
      query: ({ productionId, ViewStatus }) =>
        `GetProductionProcessByProductionId?appId=1&productionId=${productionId}&status=${ViewStatus}`
    })
  })
});

export const {
  useGetCollectionListFromPlanningHeaderQuery,
  useGetDesignListFromCompletedCollectionIdQuery,
  useGetProductionProcessListQuery,
  useGetProductionBatchForProcessingQuery,
  useGetProductionProcessByProductionIdQuery
} = productionApi;
