import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import money_flying from "../assets/money_flying.gif";

const Introduction = () => {
    const image_blur = useRef(null);

    useEffect(() => {
        gsap.fromTo(image_blur.current,
            {
                filter: "blur(10px)",
            },
            {
                filter: "blur(0px)",
                borderBottomLeftRadius: "24px",
                borderBottomRightRadius: "24px",
                objectFit: "cover",
                duration: 2,
                ease: "power1.out"
            }
        )
    }, [])

    return (
        <div className="min-h-screen" data-theme="black">
            <img
                className="w-80 mx-auto"
                src={money_flying}
                alt="coolest image"
                ref={image_blur} />

            <div className="p-3 absolute bottom-0">
                <p className="font-bebas text-4xl">Skill beats luck - </p>
                <p className="font-bebas text-6xl bg-gradient-to-tr from-[#D6F400] to-[#FFFFFF] text-transparent bg-clip-text">when consistency fuels it.</p>

                <button className="bg-white cursor-pointer text-black p-2 w-full font-montserrat font-medium rounded-md text-xl">Get start</button>
            </div>
        </div>
    );
};

export default Introduction;