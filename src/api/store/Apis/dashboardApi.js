import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://100.42.177.77:8091/api/' }),
  endpoints: (builder) => ({
    getPlanningDashboardByYear: builder.query({
      query: () => `Dashboard/GetPlanningDashboardByYear?year=2024`
    })
  })
});

export const { useGetPlanningDashboardByYearQuery } = dashboardApi;
