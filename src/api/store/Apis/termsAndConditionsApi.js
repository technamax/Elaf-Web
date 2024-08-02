import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const termsAndConditionsApi = createApi({
  reducerPath: 'termsAndConditionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gecxc.com:449/api/TermsConditions/'
  }),
  endpoints: (builder) => ({
    getCategoriesList: builder.query({
      query: () => `GetCategoriesList?appid=1`
    }),
    getTermsConditionsList: builder.query({
      query: (categoryId) =>
        `https://gecxc.com:449/api/TermsConditions/GetTermsConditionsList?categoryId=${categoryId}`
    })
  })
});

export const { useGetCategoriesListQuery, useGetTermsConditionsListQuery } =
  termsAndConditionsApi;
