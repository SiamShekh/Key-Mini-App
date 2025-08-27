import user from "../api/User";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { miniApp, useRawInitData } from "@telegram-apps/sdk-react";
import mr_cool from "../assets/mr_cool.gif";
import money_flying from "../assets/money_flying.webp";
import who_care_emoji from "../assets/who_care_emoji.webp";
import silent_emoji from "../assets/silent_emoji.webp";

const Splash = () => {
    const [trigger, { data }] = user.LoginUser();
    const navigate = useNavigate();
    const initData = useRawInitData();

    useEffect(() => {
        trigger({ key: initData });
    }, [trigger, initData]);

    useEffect(() => {
        if (miniApp.mountSync.isAvailable() && !miniApp.isMounted()) {
            miniApp.mountSync();
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

            setTimeout(() => {
                navigate("/intro", { replace: true });
            }, 1000);
        }
    }, [data?.token, navigate]);

    return (
        <div data-theme="black" className="h-screen overflow-hidden relative">
            <img
                className="absolute inset-0 z-0 blur-xs"
                src={money_flying}
                alt="money flying from sky" />

            <img
                className="absolute inset-10 size-16 z-0 blur-xs"
                src={who_care_emoji}
                alt="i don't care emoji" />

            <img
                className="absolute bottom-10 left-5 size-12 z-0 blur-xs"
                src={who_care_emoji}
                alt="i don't care emoji" />

            <img
                className="absolute bottom-20 right-5 size-12 z-0 blur-xs"
                src={silent_emoji}
                alt="silent emoji" />



            <div className="bg-gradient-to-b z-10 from-transparent to-black w-full h-screen absolute "></div>

            <div className="bg-gradient-to-br from-[#EAAC1F] to-[#289D05] size-60 z-20 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] blur-[130px]"></div>

            <p className="font-montserrat absolute left-[50%] z-30 font-medium text-yellow-500 bottom-3 -translate-x-[50%]">Loading</p>

            <div className="absolute top-[50%] -translate-y-[50%] z-40 flex items-center justify-center flex-col">
                <img
                    className="w-72"
                    src={mr_cool}
                    draggable={false}
                    alt="the cool guy" />

                <p className="font-montserrat text-2xl font-medium text-center">Get ready to join the coolest people's club.</p>
            </div>
        </div>
    );
};

export default Splash;