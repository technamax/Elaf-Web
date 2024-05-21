import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const designApi = createApi({
  reducerPath: 'designApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gecxc.com:4041/api/' }),
  endpoints: (builder) => ({
    getDesignList: builder.query({
      query: () => 'DesignRegistration/GetDesignList'
    })
  })
});

export const { useGetDesignListQuery } = designApi;
