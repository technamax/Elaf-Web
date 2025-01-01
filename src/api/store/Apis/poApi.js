import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const poApi = createApi({
  reducerPath: 'poApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://100.42.177.77:83/api/' }),
  endpoints: (builder) => ({
    getEmboideryComponentsByDesignId: builder.query({
      query: (planningHeaderId) =>
        `PO/GetEmbroideryComponentsByDesignId?planningHeaderId=${planningHeaderId}`
    })
    // getPlanningHeaderListByCollectionId: builder.query({
    //   query: (collectionId) =>
    //     `PrePlanning/GetPlanningHeaderListByCollectionId?collectionId=${collectionId}`
    // })
  })
});

export const {
  useGetEmboideryComponentsByDesignIdQuery
  // useGetPlanningHeaderListByCollectionIdQuery
} = poApi;
