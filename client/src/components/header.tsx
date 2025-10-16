import { useTonConnectUI, useTonWallet, } from "@tonconnect/ui-react";
import SemenEmoji from "../assets/emojis/SemenEmoji.svg";
import { useEffect } from "react";
import user from "../api/User";
import { QueryStatus } from "@reduxjs/toolkit/query";

const Header = () => {
    const [tonUi] = useTonConnectUI();
    const wallet = useTonWallet();
    const storeWallet = user.StoreUserWallet();

    useEffect(() => {
        if (wallet?.account?.publicKey && tonUi.connected) {
            storeWallet[0]({ publicKey: wallet?.account?.publicKey });
        }
    }, [
        wallet?.account?.publicKey,
        tonUi.connected,
    ]);

    useEffect(() => {
        if (storeWallet[1]?.status === QueryStatus.fulfilled && !storeWallet[1]?.data?.status) {
            tonUi.disconnect();
        } else if (storeWallet[1]?.status === QueryStatus.rejected) {
            tonUi.disconnect();
            
        }
    }, [storeWallet, tonUi]);

    return (
        <div className="fixed top-0 inset-0">
            <div className="bg-amber-200 p-3 rounded-b-2xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src={SemenEmoji} alt="Semen Emoji" className="w-8" />
                    <div>
                        <p className="font-opensans text-black text-sm font-medium">Get the key</p>
                        <p className="font-opensans text-black/60 text-xs font-medium">Connect wallet and get rewards</p>

                    </div>
                </div>
                <button
                    onClick={() => {
                        if (!storeWallet[1]?.isLoading) {
                            if (tonUi.connected && wallet?.account?.publicKey) {
                                tonUi.disconnect();
                            } else {
                                tonUi.openModal();
                            }
                        }
                    }}
                    className="bg-blue-500 px-3 text-sm py-1 rounded-full text-white cursor-pointer">
                    {
                        storeWallet[1].isLoading ?
                            <span className="loading loading-spinner loading-md"/>
                            :
                            (tonUi.connected && wallet?.account?.publicKey) ? "Disconnect" : "Connect"
                    }
                </button>
            </div>
        </div>
    );
};

export default Header;