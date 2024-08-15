import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const lookupApi = createApi({
  reducerPath: 'lookupApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://100.42.177.77:81/api/' }),
  endpoints: (builder) => ({
    getLookUpList: builder.query({
      query: () => `Common/GetLookUpList?appId=1`
    })
  })
});

export const { useGetLookUpListQuery } = lookupApi;
