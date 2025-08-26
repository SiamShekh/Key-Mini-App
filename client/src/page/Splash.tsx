import user from "../api/User";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { miniApp, useRawInitData } from "@telegram-apps/sdk-react";
import mr_cool from "../assets/mr_cool.gif";

const Splash = () => {
    const [trigger, { data }] = user.LoginUser();
    const navigate = useNavigate();
    const initData = useRawInitData();

    useEffect(() => {
        trigger({ key: initData });
    }, [trigger, initData]);

    useEffect(() => {
        if (miniApp.mount.isAvailable() && !miniApp.isMounted) {
            miniApp.mount();
        }

        if (miniApp.setHeaderColor.isAvailable()) {
            miniApp.setHeaderColor('#000000');
        }

        if (miniApp.setBottomBarColor.isAvailable()) {
            miniApp.setBottomBarColor('#000000');
        }
    }, [])

    useEffect(() => {
        if (data?.token) {
            sessionStorage.setItem("token", data?.token);
            navigate("/app", { replace: true });
        }
    }, [data?.token, navigate]);

    return (
        <div data-theme="black" className="min-h-screen relative">
            <img src={mr_cool} className="size-40 p-2 rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" alt="logo from logo" />
            <span className="loading loading-spinner loading-lg absolute bottom-5 left-[50%] -translate-x-[50%]"></span>
        </div>
    );
};

export default Splash;