import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productionApi = createApi({
  reducerPath: 'productionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://100.42.177.77:83/api/'
  }),
  endpoints: (builder) => ({
    getCollectionListFromPlanningHeader: builder.query({
      query: () => `Production/GetCollectionListFromPlanningHeader?appId=1`
    }),
    getDesignListFromCompletedCollectionId: builder.query({
      query: (collectionId) =>
        `Production/GetDesignListFromCompletedCollectionId?appId=1&Collectionid=${collectionId}`
    }),
    getProductionBatchForProcessing: builder.query({
      query: () => `Production/GetProductionBatchForProcessing?appId=1`
    }),
    getProductionProcessList: builder.query({
      query: () => `Production/GetProductionProcessList?appId=1`
    }),
    getProductionProcessByProductionId: builder.query({
      query: ({ productionId, ViewStatus }) =>
        `Production/GetProductionProcessByProductionId?appId=1&productionId=${productionId}&status=${ViewStatus}`
    }),
    getFabricForProductionByCollectionId: builder.query({
      query: (collectionId) =>
        `Production/GetFabricForProductionByCollectionId?appId=1&collectionid=${collectionId}`
    }),
    getProductionBatchInProcess: builder.query({
      query: (collectionId) => `Production/GetProductionBatchInProcess?appId=1`
    }),
    getProductionBatchDetailsByProductionid: builder.query({
      query: (ProductionId) =>
        `Production/GetProductionBatchDetailsByProductionid?ProductionId=${ProductionId}`
    }),
    getBxStockHeaderList: builder.query({
      query: () => `BxStockReceiving/GetBxStockHeaderList`
    }),
    getBxStockHeaderDetailList: builder.query({
      query: () => `BxStockReceiving/GetBxStockHeaderDetailList`
    }),
    getPrePlanningFabricFromCollectionId: builder.query({
      query: (collectionId) =>
        `Production/GetPrePlanningFabricFromCollectionId?appId=1&collectionId=${collectionId}`
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
  useGetProductionBatchDetailsByProductionidQuery,
  useGetBxStockHeaderListQuery,
  useGetBxStockHeaderDetailListQuery,
  useGetPrePlanningFabricFromCollectionIdQuery
} = productionApi;
