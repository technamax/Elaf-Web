import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productionApi = createApi({
  reducerPath: 'productionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gecxc.com:449/api/Production/'
  }),
  endpoints: (builder) => ({
    getCollectionListFromPlanningHeader: builder.query({
      query: () => `GetCollectionListFromPlanningHeader?appId=1`
    })
  })
});

export const { useGetCollectionListFromPlanningHeaderQuery } = productionApi;
