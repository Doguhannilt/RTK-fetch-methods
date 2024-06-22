import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
        // Get ALL
        getAllProducts: builder.query({
            query: () => '/produts'
        }),
    }),
})

export const { useGetAllProductQuery } = productsApi
