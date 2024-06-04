import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const prePlanningHeaderApi = createApi({
  reducerPath: 'prePlanningHeaderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gecxc.com:4041/api/' }),
  endpoints: (builder) => ({
    getCollectionFromPlanningHeader: builder.query({
      query: () => `PrePlanning/GetCollectionFromPlanningHeader`
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
      query: (batchNo) =>
        `Fabrication/GetFabricFromPrePlanningByBatchNo?batchNo=${batchNo}`
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
  useGetFabricColorByComponentsBatchNoAndFabricIdQuery
} = prePlanningHeaderApi;