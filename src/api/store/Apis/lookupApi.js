import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const lookupApi = createApi({
  reducerPath: 'lookupApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://100.42.177.77:83/api/' }),
  endpoints: (builder) => ({
    getLookUpList: builder.query({
      query: () => `Common/GetLookUpList?appId=1`
    }),
    GetStatusLookUp: builder.query({
      query: () => `Common/GetStatusLookUp?appId=1`
    }),
    getShrinkageWastageList: builder.query({
      query: () => `Configurations/GetShrinkageWastageList?appId=1`
    }),
    getWareHouseLocations: builder.query({
      query: () => `Common/GetLocationsbyAppId?appId=1`
    })
  })
});

export const {
  useGetLookUpListQuery,
  useGetShrinkageWastageListQuery,
  useGetStatusLookUpQuery,
  useGetWareHouseLocationsQuery
} = lookupApi;
