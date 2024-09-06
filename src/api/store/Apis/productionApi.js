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
        // `StockReceiving/GetStockReceivingByProductionHeaderId?productionHeaderId=${productionHeaderId}&Status=7`
        `StockReceiving/GetStockReceivingHeader?productionHeaderId=${productionHeaderId}`
    }),
    GetITPListByStatus: builder.query({
      query: (status) => `ITP/GetITPListByStatus?status=${status}`
    }),
    getFabricForProductionByProductionId: builder.query({
      query: (productionId) =>
        `Production/GetFabricForProductionByProductionId?productionId=${productionId}&appId=1`
    }),
    getVendorsByFabricID: builder.query({
      query: (fabricId) =>
        `Configurations/GetVendorsByFabricID?fabricId=${fabricId}`
    }),
    getProductionPODesignByFabricAndProductionId: builder.query({
      query: ({ fabricId, productionId }) =>
        `Production/GetProductionPODesignByFabricAndProductionId?fabricId=${fabricId}&productionId=${productionId}`
    }),
    getDyeingPoHeaderList: builder.query({
      query: () => `PO/GetDyeingPoHeaderList?appId=1`
    }),
    getDyeingPODetailsPoId: builder.query({
      query: (PoId) => `PO/GetDyeingPODetailsPoId?PoId=${PoId}`
    }),
    dyeingPoAssignTermDetailsByPoId: builder.query({
      query: (PoId) => `PO/DyeingPoAssignTermDetailsByPoId?PoId=${PoId}`
    }),
    getDyeingPoHeaderListbyPoId: builder.query({
      query: (PoId) => `PO/GetDyeingPoHeaderListbyPoId?PoId=${PoId}`
    }),
    getProductionFabricDetailByProductionIdandStatus: builder.query({
      query: ({ productionId, fabricId }) =>
        `Production/GetProductionFabricDetailByProductionIdandStatus?productionId=${productionId}&status=2&fabricId=${fabricId}`
    }),
    getIssuanceByPoId: builder.query({
      query: (poId) => `Issuance/GetIssuanceByPoId?poId=${poId}&appId=1`
    }),
    getIssuanceDetailByPoId: builder.query({
      query: ({ poId, issuanceId }) =>
        `Issuance/GetIssuanceDetailByPoId?poId=${poId}&issuanceId=${issuanceId}`
    }),
    getIssuanceByIssuanceIdAndStatus: builder.query({
      query: (issuanceId) =>
        `Receiving/GetIssuanceByIssuanceIdAndStatus?issuanceId=${issuanceId}&status=9`
    }),
    getIssuanceDetailsByIssuanceId: builder.query({
      query: (issuanceId) =>
        `Receiving/GetIssuanceDetailsByIssuanceId?issuanceId=${issuanceId}`
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
  useGetFabricForProductionByProductionIdQuery,
  useGetVendorsByFabricIDQuery,
  useGetProductionPODesignByFabricAndProductionIdQuery,
  useGetDyeingPoHeaderListQuery,
  useGetDyeingPODetailsPoIdQuery,
  useDyeingPoAssignTermDetailsByPoIdQuery,
  useGetDyeingPoHeaderListbyPoIdQuery,
  useGetProductionFabricDetailByProductionIdandStatusQuery,
  useGetIssuanceByPoIdQuery,
  useGetIssuanceDetailByPoIdQuery,
  useGetIssuanceByIssuanceIdAndStatusQuery,
  useGetIssuanceDetailsByIssuanceIdQuery
} = productionApi;
