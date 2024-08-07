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
    }),
    getFabricForProductionByCollectionId: builder.query({
      query: (collectionId) =>
        `GetFabricForProductionByCollectionId?appId=1&collectionid=${collectionId}`
    }),
    getProductionBatchInProcess: builder.query({
      query: (collectionId) => `GetProductionBatchInProcess?appId=1`
    }),
    getProductionBatchDetailsByProductionid: builder.query({
      query: (ProductionId) =>
        `GetProductionBatchDetailsByProductionid?ProductionId=${ProductionId}`
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
  useGetProductionBatchDetailsByProductionidQuery
} = productionApi;
