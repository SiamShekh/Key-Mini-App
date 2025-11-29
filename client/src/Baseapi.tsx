import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { initData } from "@telegram-apps/sdk";

const BaseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:3000",
        credentials: "include",
        prepareHeaders(headers, _api) {
            initData.restore();
            headers.set("authorization", initData.raw() as string)
        },
    }),
    endpoints: () => ({}),
    tagTypes: ["user"],
    
});

export default BaseApi;