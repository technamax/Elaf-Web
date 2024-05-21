// src/api/collectionApi.js
// src/api/collectionApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const collectionApi = createApi({
  reducerPath: 'collectionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gecxc.com:4041/api/' }),
  endpoints: (builder) => ({
    getCollectionList: builder.query({
      query: () => 'CollectionRegistration/GetCollectionList'
    }),
    getCollectionById: builder.query({
      query: (collectionId) =>
        `CollectionRegistration/GetCollectionByCollectionId?collectionId=${collectionId}`
    }),
    deleteCollectionById: builder.mutation({
      query: (collectionId) => ({
        url: `CollectionRegistration/DeleteCollectionByCollectionId?collectionId=${collectionId}`,
        method: 'DELETE'
      })
    }),
    saveCollection: builder.mutation({
      query: (collectionData) => ({
        url: 'CollectionRegistration/SaveCollection',
        method: 'POST',
        body: collectionData
      })
    })
  })
});

export const {
  useGetCollectionListQuery,
  useGetCollectionByIdQuery,
  useDeleteCollectionByIdMutation,
  useSaveCollectionMutation
} = collectionApi;
