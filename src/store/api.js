import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const galleryApi = createApi({
  reducerPath: "galleryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://accessible-luck-e2f3b335dd.strapiapp.com",
  }),
  endpoints: (builder) => ({
    getGallery: builder.query({
      query: () => "/api/samples?populate=*",
    }),
    getCategorys: builder.query({
      query: () => "/api/categories",
    }),
    getPortfolio: builder.query({
      query: () => "/api/portfolios?populate=*",
    }),
  }),
});

export const { useGetGalleryQuery, useGetCategorysQuery, useGetPortfolioQuery } = galleryApi;
