import BaseApi from "../Baseapi";

const UserEndpoint = BaseApi.injectEndpoints({
    endpoints: (builder)=> ({
        LoginUser: builder.mutation({
            query: (arg)=>({
                url: "/login",
                method: "POST",
                body: arg
            })
        })
    })
});

const user = {
    LoginUser: UserEndpoint.useLoginUserMutation
}

export default user;