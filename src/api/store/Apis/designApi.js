import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const designApi = createApi({
  reducerPath: 'designApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://100.42.177.77:83/api/' }),
  endpoints: (builder) => ({
    getDesignListByCollectionId: builder.query({
      query: (collectionId) =>
        `DesignRegistration/GetDesignListByCollectionId?Collectionid=${collectionId}`
    })
  })
});

export const { useGetDesignListByCollectionIdQuery } = designApi;
