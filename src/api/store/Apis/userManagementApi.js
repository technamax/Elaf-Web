import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userManagementApi = createApi({
  reducerPath: 'userManagementApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://100.42.177.77:81/api/' }),
  endpoints: (builder) => ({
    getRoleList: builder.query({
      query: () => `Role/GetRoleList?appId=1`
    }),
    getMainMenuList: builder.query({
      query: () => `Menu/GetMainMenuList`
    }),
    getSubMenuList: builder.query({
      query: () => `Menu/GetSubMenuList`
    }),
    getUsersList: builder.query({
      query: () => `Users/GetUsersList`
    }),
    getAssignedRolesByEmpId: builder.query({
      query: (empId) => `Users/GetAssignedRolesByEmpId?appId=1&empId=${empId}`
    })
  })
});

export const {
  useGetRoleListQuery,
  useGetMainMenuListQuery,
  useGetSubMenuListQuery,
  useGetUsersListQuery,
  useGetAssignedRolesByEmpIdQuery
} = userManagementApi;
