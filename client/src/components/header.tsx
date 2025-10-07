import SemenEmoji from "../assets/emojis/SemenEmoji.svg";

const Header = () => {
    return (
        <div className="sticky top-0 inset-0">
            <div className="bg-gradient-to-r from-white/3 to-white/7 p-3 rounded-md flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img src={SemenEmoji} alt="Semen Emoji" className="w-7" />
                    <p className="font-opensans text-sm">Connect to the brigde</p>
                </div>
                <button className="bg-blue-400 px-3 text-sm py-1 rounded-full text-black font-medium cursor-pointer">Connect</button>
            </div>
        </div>
    );
};

export default Header;