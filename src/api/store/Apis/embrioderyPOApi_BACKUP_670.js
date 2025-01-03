import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const embrioderyPOApi = createApi({
  reducerPath: 'embrioderyPOApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://100.42.177.77:83/api/' }),
  endpoints: (builder) => ({
    getCentralizedPOHeaderPoId: builder.query({
<<<<<<< HEAD
      query: (productionId) =>
        `PO/GetCentralizedPOHeaderPoId?productionId=${productionId}`
    }),
    getCentralizedPOHeaderListForIssuance: builder.query({
      query: (processTypeId) =>
        `Issuance/GetCentralizedPOHeaderListForIssuance?processTypeId=${processTypeId}`
    }),
    getEmbroideryPOListforIssuanceByProductionId: builder.query({
      query: ({ productionId, processTypeId }) =>
        `Issuance/GetEmbroideryPOListforIssuanceByProductionId?productionId=${productionId}&processTypeId=${processTypeId}`
    }),
    getEmbroideryDesignListforIssuanceByPoId: builder.query({
      query: ({ poId, processTypeId }) =>
        `Issuance/GetEmbroideryDesignListforIssuanceByPoId?poId=${poId}&processTypeId=${processTypeId}`
    }),
    getEmbroideryPODetailsByPlanningHeaderId: builder.query({
      query: ({ planningHeaderId, processTypeId }) =>
        `Issuance/GetEmbroideryPODetailsByPlanningHeaderId?planningHeaderId=${planningHeaderId}&processTypeId=${processTypeId}`
    })
=======
        query: (productionId) => `PO/GetCentralizedPOHeaderPoId?productionId=${productionId}`
      }),
      getEmbroiderySavedComponents: builder.query({
        query: ({productionId,planningHeaderId}) => `PO/GetEmbroiderySavedComponents?productionId=${productionId}&planningHeaderId=${planningHeaderId}`
      })
>>>>>>> EmbrioderyPO-Hassaan
  })
});

export const {
  useGetCentralizedPOHeaderPoIdQuery,
<<<<<<< HEAD
  useGetCentralizedPOHeaderListForIssuanceQuery,
  useGetEmbroideryPOListforIssuanceByProductionIdQuery,
  useGetEmbroideryDesignListforIssuanceByPoIdQuery,
  useGetEmbroideryPODetailsByPlanningHeaderIdQuery
} = embrioderyPOApi;
=======
  useGetEmbroiderySavedComponentsQuery
  } = embrioderyPOApi;
>>>>>>> EmbrioderyPO-Hassaan
