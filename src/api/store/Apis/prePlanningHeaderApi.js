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
    })
  })
});

export const {
  useGetCollectionFromPlanningHeaderQuery,
  useGetDesignFromPlanningHeaderByCollectionIdQuery
} = prePlanningHeaderApi;
