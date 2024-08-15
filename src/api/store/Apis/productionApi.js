import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productionApi = createApi({
  reducerPath: 'productionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://100.42.177.77:83/api/Production/'
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
    }),
    getFabricForProductionByCollectionId: builder.query({
      query: (collectionId) =>
        `GetFabricForProductionByCollectionId?appId=1&collectionid=${collectionId}`
    }),
    getProductionBatchInProcess: builder.query({
      query: (collectionId) => `GetProductionBatchInProcess?appId=1`
    }),
    getProductionBatchByProductionId: builder.query({
      query: (ProductionId) =>
        `GetProductionBatchByProductionId?ProductionId=${ProductionId}`
    })
  })
});

export const {
  useGetCollectionListFromPlanningHeaderQuery,
  useGetDesignListFromCompletedCollectionIdQuery,
  useGetProductionProcessListQuery,
  useGetProductionBatchForProcessingQuery,
  useGetProductionProcessByProductionIdQuery,
  useGetFabricForProductionByCollectionIdQuery,
  useGetProductionBatchInProcessQuery,
  useGetProductionBatchByProductionIdQuery
} = productionApi;
