import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const embrioderyPOApi = createApi({
  reducerPath: 'embrioderyPOApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://100.42.177.77:83/api/' }),
  endpoints: (builder) => ({
    getCentralizedPOHeaderPoId: builder.query({
      query: (productionId) =>
        `PO/GetCentralizedPOHeaderPoId?productionId=${productionId}`
    }),
    getCentralizedPOHeaderListForIssuance: builder.query({
      query: () => `Issuance/GetCentralizedPOHeaderListForIssuance`
    }),
    getEmbroideryPOListforIssuanceByProductionId: builder.query({
      query: (productionId) =>
        `Issuance/GetEmbroideryPOListforIssuanceByProductionId?productionId=${productionId}`
    }),
    getEmbroideryDesignListforIssuanceByPoId: builder.query({
      query: (poId) =>
        `Issuance/GetEmbroideryDesignListforIssuanceByPoId?poId=${poId}`
    })
  })
});

export const {
  useGetCentralizedPOHeaderPoIdQuery,
  useGetCentralizedPOHeaderListForIssuanceQuery,
  useGetEmbroideryPOListforIssuanceByProductionIdQuery,
  useGetEmbroideryDesignListforIssuanceByPoIdQuery
} = embrioderyPOApi;
