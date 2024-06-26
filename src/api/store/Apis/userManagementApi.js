import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userManagementApi = createApi({
  reducerPath: 'userManagementApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gecxc.com:4041/api/' }),
  endpoints: (builder) => ({
    getRoleList: builder.query({
      query: () => `Role/GetRoleList?appId=1`
    }),
    getMainMenuList: builder.query({
      query: () => `Menu/GetMainMenuList`
    }),
    getSubMenuList: builder.query({
      query: () => `Menu/GetSubMenuList`
    })
  })
});

export const {
  useGetRoleListQuery,
  useGetMainMenuListQuery,
  useGetSubMenuListQuery
} = userManagementApi;
