import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const termsAndConditionsApi = createApi({
  reducerPath: 'termsAndConditionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://100.42.177.77:83/api/TermsConditions/'
  }),
  endpoints: (builder) => ({
    getCategoriesList: builder.query({
      query: () => `GetCategoriesList?appid=1`
    }),
    getTermsConditionsList: builder.query({
      query: (categoryId) =>
        `http://100.42.177.77:83/api/TermsConditions/GetTermsConditionsList?categoryId=${categoryId}`
    })
  })
});

export const { useGetCategoriesListQuery, useGetTermsConditionsListQuery } =
  termsAndConditionsApi;
