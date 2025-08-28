import { createContext, ReactNode } from "react";
import user from "../api/User";

export const ContextValues = createContext<null | {
    user: {
        isLoading: boolean,
        data: {
            name: string,
            balance: number,
            isDelete: boolean,
            isBlock: boolean
        }
    }
}>(null);

const ContextApi = ({ children }: { children: ReactNode }) => {
    const userApi = user.getUser(undefined);

    return (
        <ContextValues.Provider value={{
            user: {
                isLoading: userApi?.isLoading,
                data: userApi?.data
            },
        }}>
            {children}
        </ContextValues.Provider>
    );
};

export default ContextApi;