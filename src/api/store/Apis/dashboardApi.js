import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gecxc.com:449/api/' }),
  endpoints: (builder) => ({
    getPlanningDashboardByYear: builder.query({
      query: () => `Dashboard/GetPlanningDashboardByYear?year=2024`
    })
  })
});

export const { useGetPlanningDashboardByYearQuery } = dashboardApi;
