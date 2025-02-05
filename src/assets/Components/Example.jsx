import React, { useRef } from 'react';
import { motion, useMotionTemplate,useMotionValue,useSpring } from "framer-motion";
import {FiMousePointer} from 'react-icons/fi';

const Example = () => {
    return (
        <>
            <div className="grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
                <TiltCard />
            </div>
        </>
    );
};

const ROTATION_RANGE = 32.4;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = () => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handelMouseMove = (e) => {
        if (!ref.current) return[0,0];
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rx = mouseY / height - HALF_ROTATION_RANGE;
        const ry = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rx);
        y.set(ry);
    };
    const handelMouseLeave = () => {
        x.set(0);
        y.set(0);
    };
    return (
        <motion.div
            ref={ref}
            onMouseMove={handelMouseMove}
            onMouseLeave={handelMouseLeave}
            style={{ transformStyle:"preserve-3d", transform }}
            className="relative w-72 h-96 bg-gradient-to-br rounded-xl from-indigo-300 to-violet-300"
        >
            <div style={{ transform: "translateZ(72px)", transformStyle: "preserve-3d" }}
             className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg">

                <FiMousePointer
                style={{ translateZ: "72px" }}
                className="text-4xl mx-auto" />
                <p 
                style={{ translateZ: "50px" }}
                className="text-center text-lg text-gray-800">
                    Move your mouse over the card to tilt it.
                </p>
            </div>
        </motion.div>
    );
};

export default Example;