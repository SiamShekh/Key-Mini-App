import BaseApi from "../Baseapi";

const UserEndpoint = BaseApi.injectEndpoints({
    endpoints: (builder)=> ({
        LoginUser: builder.mutation({
            query: (arg)=>({
                url: "/user/login",
                method: "POST",
                body: arg
            }),
            invalidatesTags: ["user"]
        }),
        getUser: builder.query({
            query: ()=>({
                url: "/user/me",
                method: "GET",
            }),
            providesTags: ["user"]
        }),
        UserIntro: builder.mutation({
            query: ()=>({
                url: "/user/intro",
                method: "PATCH",
            }),
            invalidatesTags: ["user"]
        }),
        StoreUserWallet: builder.mutation({
            query: ({publicKey})=>({
                url: "/user/wallet",
                method: "PATCH",
                body: {publicKey}
            }),
            invalidatesTags: ["user"]
        }),
    })
});

const user = {
    LoginUser: UserEndpoint.useLoginUserMutation,
    getUser: UserEndpoint.useGetUserQuery,
    UserIntro: UserEndpoint.useUserIntroMutation,
    StoreUserWallet: UserEndpoint.useStoreUserWalletMutation
}

export default user;