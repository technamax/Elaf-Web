import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const prePlanningHeaderApi = createApi({
  reducerPath: 'prePlanningHeaderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://100.42.177.77:83/api/' }),
  endpoints: (builder) => ({
    getCollectionFromPlanningHeader: builder.query({
      query: () => `PrePlanning/GetCollectionListFromPlanningHeader`
    }),
    getDesignFromPlanningHeaderByCollectionId: builder.query({
      query: (collectionId) =>
        `PrePlanning/GetDesignFromPlanningHeaderByCollectionId?collectionid=${collectionId}`
    }),
    getPrePlanningHeaderByDesignId: builder.query({
      query: (designId) =>
        `PrePlanning/GetPrePlanningHeaderByDesignId?designId=${designId}`
    }),
    getFabricFromPrePlanningByBatchNo: builder.query({
      query: ({ batchNo, processType }) =>
        `Fabrication/GetFabricFromPrePlanningByBatchNo?batchNo=${batchNo}&processType=${processType}`
    }),
    getFabricRequisitionListByBatchNo: builder.query({
      query: (batchNo) =>
        `Fabrication/GetFabricRequisitionListByBatchNo?batchNo=${batchNo}`
    }),
    getComponentsByBatchNo: builder.query({
      query: (batchNo) => `Embroidery/GetComponentsByBatchNo?batchNo=${batchNo}`
    }),
    getFabricByComponentsAndBatchNo: builder.query({
      query: ({ batchNo, componentId }) =>
        `Embroidery/GetFabricByComponentsAndBatchNo?batchNo=${batchNo}&componentId=${componentId}`
    }),
    getFabricColorByComponentsBatchNoAndFabricId: builder.query({
      query: ({ batchNo, componentId, fabricId }) =>
        `Embroidery/GetFabricColorByComponentsBatchNoAndFabricId?batchNo=${batchNo}&componentId=${componentId}&fabricId=${fabricId}`
    }),
    getEmbroideryListByBatchNo: builder.query({
      query: (batchNo) =>
        `Embroidery/GetEmbroideryListByBatchNo?batchNo=${batchNo}`
    }),
    getSchffiliListByBatchNo: builder.query({
      query: (batchNo) => `Schiffli/GetSchffiliListByBatchNo?batchNo=${batchNo}`
    }),
    getFabricColorFromPrePlanningByFabricId: builder.query({
      query: ({ fabricId, planningHeaderId }) =>
        `DyeingPrinting/GetFabricColorFromPrePlanningByFabricId?fabricId=${fabricId}&PlanningHeaderId=${planningHeaderId}`
    }),
    getDyeingPrintingListByBatchNo: builder.query({
      query: (batchNo) =>
        `DyeingPrinting/GetDyeingPrintingListByBatchNo?batchNo=${batchNo}`
    }),
    getPrePlanningByPlanningHeaderId: builder.query({
      query: (planningHeaderId) =>
        `PrePlanning/GetPrePlanningByPlanningHeaderId?planningHeaderId=${planningHeaderId}`
    }),
    getAdditionalProcessListByBatchNo: builder.query({
      query: (planningHeaderId) =>
        `AdditionalProcess/GetAdditionalProcessListByBatchNo?batchNo=${planningHeaderId}`
    }),
    getAdditionalProcessDetailsByAdditionalProcessId: builder.query({
      query: (additionalProcessId) =>
        `AdditionalProcess/GetAdditionalProcessDetailsByAdditionalProcessId?additionalProcessId=${additionalProcessId}`
    }),
    getDyeingPrintingDetailsByDpId: builder.query({
      query: (dpId) =>
        `DyeingPrinting/GetDyeingPrintingDetailsByDpId?dpId=${dpId}`
    }),
    getEmbroideryDetailsListByEmbroideryId: builder.query({
      query: (embroideryId) =>
        `Embroidery/GetEmbroideryDetailsListByEmbroideryId?embroideryId=${embroideryId}`
    }),
    getDistinctCollections: builder.query({
      query: (collectionId) =>
        `PrePlanning/GetDistinctCollections?collectionId=${collectionId}`
    }),
    getSummaryByCollection: builder.query({
      query: ({ collectionId, collectionBatchId }) =>
        `PrePlanning/SummaryByCollection?collectionId=${collectionId}&collectionBatchId=${collectionBatchId}`
    })
  })
});

export const {
  useGetCollectionFromPlanningHeaderQuery,
  useGetDesignFromPlanningHeaderByCollectionIdQuery,
  useGetPrePlanningHeaderByDesignIdQuery,
  useGetFabricFromPrePlanningByBatchNoQuery,
  useGetFabricRequisitionListByBatchNoQuery,
  useGetComponentsByBatchNoQuery,
  useGetFabricByComponentsAndBatchNoQuery,
  useGetFabricColorByComponentsBatchNoAndFabricIdQuery,
  useGetEmbroideryListByBatchNoQuery,
  useGetSchffiliListByBatchNoQuery,
  useGetFabricColorFromPrePlanningByFabricIdQuery,
  useGetDyeingPrintingListByBatchNoQuery,
  useGetPrePlanningByPlanningHeaderIdQuery,
  useGetAdditionalProcessListByBatchNoQuery,
  useGetAdditionalProcessDetailsByAdditionalProcessIdQuery,
  useGetDyeingPrintingDetailsByDpIdQuery,
  useGetEmbroideryDetailsListByEmbroideryIdQuery,
  useGetDistinctCollectionsQuery,
  useGetSummaryByCollectionQuery
} = prePlanningHeaderApi;
