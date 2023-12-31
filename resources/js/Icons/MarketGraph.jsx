import * as React from "react";
import { motion } from "framer-motion";
function SvgMarketGraph(props) {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width={548.176}
            height={548.176}
            style={{
                enableBackground: "new 0 0 548.176 548.176",
            }}
            {...props}
            viewBox="0 0 548.176 548.176"
        >
            <path d="M534.75 68.238c-8.945-8.945-19.694-13.417-32.261-13.417H45.681c-12.562 0-23.313 4.471-32.264 13.417C4.471 77.185 0 87.936 0 100.499v347.173c0 12.566 4.471 23.318 13.417 32.264 8.951 8.946 19.702 13.419 32.264 13.419h456.815c12.56 0 23.312-4.473 32.258-13.419 8.945-8.945 13.422-19.697 13.422-32.264V100.499c0-12.563-4.477-23.314-13.426-32.261zm-23.123 379.434c0 2.478-.903 4.62-2.711 6.427-1.81 1.807-3.952 2.71-6.427 2.71H45.681c-2.473 0-4.615-.903-6.423-2.71-1.807-1.813-2.712-3.949-2.712-6.427V100.499c0-2.474.902-4.611 2.712-6.423 1.809-1.804 3.951-2.708 6.423-2.708h456.815c2.471 0 4.613.902 6.42 2.708 1.808 1.812 2.711 3.949 2.711 6.423v347.173z" />
            <path d="M73.092 310.635h73.089v109.632H73.092zM182.728 164.452h73.085v255.814h-73.085zM292.362 237.541h73.083v182.726h-73.083zM401.994 127.907h73.091v292.36h-73.091z" />
        </motion.svg>
    );
}
export default SvgMarketGraph;
