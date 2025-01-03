import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const embrioderyPOApi = createApi({
  reducerPath: 'embrioderyPOApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://100.42.177.77:83/api/' }),
  endpoints: (builder) => ({
    getCentralizedPOHeaderPoId: builder.query({
        query: (productionId) => `PO/GetCentralizedPOHeaderPoId?productionId=${productionId}`
      }),
      getEmbroiderySavedComponents: builder.query({
        query: ({productionId,planningHeaderId}) => `PO/GetEmbroiderySavedComponents?productionId=${productionId}&planningHeaderId=${planningHeaderId}`
      })
  })
});

export const {
  useGetCentralizedPOHeaderPoIdQuery,
  useGetEmbroiderySavedComponentsQuery
  } = embrioderyPOApi;
