import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const termsAndConditionsApi = createApi({
  reducerPath: 'termsAndConditionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://100.42.177.77:86/api/TermsConditions/'
  }),
  endpoints: (builder) => ({
    getCategoriesList: builder.query({
      query: () => `GetCategoriesList?appid=1`
    }),
    getTermsConditionsList: builder.query({
      query: (categoryId) => `GetTermsConditionsList?categoryId=${categoryId}`
    }),
    // getTermsByVendorId: builder.query({
    //   query: (vendorId) => `GetTermsByVendorId?vendorId=${vendorId}`
    // }),
    getTermsByVendorId: builder.query({
      query: ({ vId, categoryId }) =>
        `GetTermsByVendorId?vendorId=${vId}&categoryId=${categoryId}`
    })
  })
});

export const {
  useGetCategoriesListQuery,
  useGetTermsConditionsListQuery,
  useGetTermsByVendorIdQuery
} = termsAndConditionsApi;
