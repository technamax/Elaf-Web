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
      query: (status) =>
        `Production/GetProductionProcessList?appId=1&status=${status}`
    }),
    getProductionProcessByProductionId: builder.query({
      query: ({ productionId, status }) =>
        `Production/GetProductionProcessByProductionId?appId=1&productionId=${productionId}&status=${status}`
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
    }),
    GetVBxStockReceivingList: builder.query({
      query: (productionId) =>
        `BxStockReceiving/GetVBxStockReceivingList?productionId=${productionId}`
    }),
    GetProductionFabricDetailList: builder.query({
      query: ({ productionHeaderId, status }) =>
        `Production/GetProductionFabricDetailList?productionHeaderId=${productionHeaderId}&Status=${status}`
    }),
    getStockReceivingByProductionHeaderId: builder.query({
      query: (productionHeaderId) =>
        `StockReceiving/GetStockReceivingByProductionHeaderId?productionHeaderId=${productionHeaderId}&Status=7`
    }),
    GetITPListByStatus: builder.query({
      query: (status) => `ITP/GetITPListByStatus?status=${status}`
    }),
    GetProductionFabricDetailByProductionHeaderId: builder.query({
      query: (productionHeaderId, status) =>
        `Production/GetProductionFabricDetailByProductionHeaderId?productionHeaderId=${productionHeaderId}&status=${status}`
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
  useGetPrePlanningFabricFromCollectionIdQuery,
  useGetVBxStockReceivingListQuery,
  useGetStockReceivingByProductionHeaderIdQuery,
  useGetProductionFabricDetailListQuery,
  useGetITPListByStatusQuery,
  useGetProductionFabricDetailByProductionHeaderIdQuery
} = productionApi;
