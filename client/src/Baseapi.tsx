import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const BaseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
        prepareHeaders(headers) {
            headers.append("authorization", sessionStorage.getItem("token") as string)
        },
    }),
    endpoints: () => ({}),
});

export default BaseApi;