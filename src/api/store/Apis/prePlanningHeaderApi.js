import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const prePlanningHeaderApi = createApi({
  reducerPath: 'prePlanningHeaderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gecxc.com:4041/api/' }),
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
  useGetAdditionalProcessDetailsByAdditionalProcessIdQuery
} = prePlanningHeaderApi;
