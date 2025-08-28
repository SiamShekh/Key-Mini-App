import BaseApi from "../Baseapi";

const UserEndpoint = BaseApi.injectEndpoints({
    endpoints: (builder)=> ({
        LoginUser: builder.mutation({
            query: (arg)=>({
                url: "/user/login",
                method: "POST",
                body: arg
            })
        }),
        getUser: builder.query({
            query: ()=>({
                url: "/user/me",
                method: "GET",
            })
        }),
    })
});

const user = {
    LoginUser: UserEndpoint.useLoginUserMutation,
    getUser: UserEndpoint.useGetUserQuery
}

export default user;