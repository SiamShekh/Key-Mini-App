import { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { miniApp } from "@telegram-apps/sdk";
import { ContextValues } from "../utils/ContextApi";
import { useNavigate } from "react-router-dom";
import user from "../api/User";
import { QueryStatus } from "@reduxjs/toolkit/query";

const Introduction = () => {
    const text_count = useRef<HTMLParagraphElement | null>(null);
    const values = useContext(ContextValues);
    const navigate = useNavigate();
    const intro_muation = user.UserIntro();

    useEffect(() => {
        if (!values?.user?.isLoading) {
            const obj = { val: 0 };
            gsap.to(obj, {
                val: values?.user?.data?.balance, // ending value
                duration: 2, // seconds
                ease: "none", // linear (no easing)
                onUpdate: () => {
                    if (text_count.current) {
                        text_count.current.textContent = Math.floor(obj.val).toString();
                    }
                },
            });
        }
    }, [values])

    useEffect(() => {
        if (miniApp.mountSync.isAvailable() && !miniApp.isMounted()) {
            miniApp.mountSync();
        }

        if (miniApp.setHeaderColor.isAvailable()) {
            miniApp.setHeaderColor('#d6f400');
        }

        if (miniApp.setBottomBarColor.isAvailable()) {
            miniApp.setBottomBarColor('#000000');
        }
    }, []);

    useEffect(() => {
        if (intro_muation[1]?.status === QueryStatus.fulfilled && intro_muation[1]?.data?.status) {
            navigate('/app', {
                replace: true
            })
        }
    }, [navigate, intro_muation])

    return (
        <div className="min-h-screen" data-theme="black">
            <div
                className="h-80 w-full flex items-center justify-center text-black flex-col font-monda bg-[#d6f400] object-cover rounded-b-2xl"
            >
                <p
                    ref={text_count}
                    className="text-8xl font-black">400</p>
                <p className="text-2xl">COOL</p>
            </div>

            <div className="p-3 absolute bottom-0 w-full">
                <p className="font-bebas text-4xl text-white text-center">Welcome to the party</p>
                <p className="font-bebas mb-5 text-6xl text-center bg-gradient-to-tr from-[#D6F400] to-[#FFFFFF] text-transparent bg-clip-text">take a bribe.</p>

                <button
                    onClick={() => {
                        if (!intro_muation[1]?.isLoading) {
                            intro_muation[0](undefined);
                        }
                    }}
                    className="bg-white cursor-pointer text-black p-2 w-full font-opensans rounded-md text-xl">
                    {intro_muation[1]?.isLoading ?
                        <span className="loading loading-spinner loading-md"></span>
                        : `Get start`}
                </button>
            </div>
        </div>
    );
};

export default Introduction;