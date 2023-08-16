import { motion } from "framer-motion";

{/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                repeat: Infinity, repeatType: "mirror", duration: 1
            }}
        >
            xd
        </motion.div> */}
export default function HeroIllustration(props) {

    const variants = {
        visible: param => ({
            attrY: [570 - param.initialHeight, 570 - param.finalHeight],
            height: [param.initialHeight, param.finalHeight],
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: 'backInOut',
                repeatDelay: param.repeatDelay
            }
        })
        // hidden: { opacity: 0 },
    }

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Capa 2"
            viewBox="0 0 893.62 736.75"
            {...props}
        >
            <g data-name="Capa 1">
                <path
                    d="M168.5 570.5s332.5-277.5 524 0"
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <ellipse
                    cx={714.12}
                    cy={712.75}
                    rx={154}
                    ry={24}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <ellipse
                    cx={739.12}
                    cy={703.75}
                    rx={154}
                    ry={24}
                    style={{
                        fill: "none",
                        stroke: "#3f3d56",
                        strokeMiterlimit: 10,
                    }}
                />
                <path
                    d="M804.61 455.45c8.06 2.93 16.97-1.23 19.9-9.29 2.93-8.06-1.23-16.97-9.29-19.9-2.74-.99-5.7-1.2-8.54-.59l.39 7.99-3.78-6.85a15.447 15.447 0 0 0-7.97 8.75c-.49 1.35-.8 2.77-.89 4.2a15.527 15.527 0 0 0 10.19 15.69Z"
                    style={{
                        fill: "#57b894",
                    }}
                />
                <path
                    d="M823.32 548.15c-1.33-6.8 4.45-12.82 10.16-16.74 5.71-3.92 12.39-7.77 14.34-14.41 2.8-9.55-5.54-18.3-12.04-25.85a93.504 93.504 0 0 1-12.33-18.32 25.21 25.21 0 0 1-2.95-8.33c-.51-4.23.85-8.45 2.22-12.49 4.57-13.46 9.45-26.8 14.65-40.03M805.24 453.39c8.06 2.93 16.97-1.23 19.9-9.29 2.93-8.06-1.23-16.97-9.29-19.9-2.74-.99-5.7-1.2-8.54-.59l.39 7.99-3.78-6.85a15.447 15.447 0 0 0-7.97 8.75c-.49 1.35-.8 2.77-.89 4.2a15.527 15.527 0 0 0 10.19 15.69Z"
                    style={{
                        fill: "none",
                        stroke: "#3f3d56",
                        strokeMiterlimit: 10,
                    }}
                />
                <path
                    d="M821.42 409.22a15.52 15.52 0 0 1 11.18-9.85l1.28 7.6 2.37-7.98c8.57.13 15.42 7.18 15.29 15.76-.13 8.57-7.18 15.42-15.76 15.29-8.57-.13-15.42-7.18-15.29-15.76.03-1.73.34-3.44.93-5.07Z"
                    style={{
                        fill: "#57b894",
                    }}
                />
                <path
                    d="M822.27 406.48a15.52 15.52 0 0 1 11.18-9.85l1.28 7.6 2.37-7.98c8.57.13 15.42 7.18 15.29 15.76-.13 8.57-7.18 15.42-15.76 15.29s-15.42-7.18-15.29-15.76c.03-1.73.34-3.44.93-5.07Z"
                    style={{
                        fill: "none",
                        stroke: "#3f3d56",
                        strokeMiterlimit: 10,
                    }}
                />
                <path
                    d="M833.05 491.3c8.06 2.92 16.97-1.24 19.89-9.3 2.46-6.79-.08-14.39-6.15-18.32l-1.82 6.13-1.29-7.69s-.03-.01-.04-.02c-8.06-2.92-16.97 1.24-19.89 9.3-2.92 8.06 1.24 16.97 9.3 19.89Z"
                    style={{
                        fill: "#57b894",
                    }}
                />
                <path
                    d="M833.79 488.53c8.06 2.92 16.97-1.24 19.89-9.3 2.46-6.79-.08-14.39-6.15-18.32l-1.82 6.13-1.29-7.69s-.03-.01-.04-.02c-8.06-2.93-16.97 1.22-19.9 9.28-2.93 8.06 1.22 16.97 9.28 19.9 0 0 .02 0 .03.01Z"
                    style={{
                        fill: "none",
                        stroke: "#3f3d56",
                        strokeMiterlimit: 10,
                    }}
                />
                <path
                    d="M816.89 517.09c1.48 8.44 9.53 14.08 17.97 12.6 8.44-1.48 14.08-9.53 12.6-17.97-1.48-8.44-9.53-14.08-17.97-12.6-3.82.67-7.24 2.74-9.61 5.81l6.92 10.41-9.45-5.53c-.73 2.35-.89 4.85-.46 7.27Z"
                    style={{
                        fill: "#57b894",
                    }}
                />
                <path
                    d="M817.53 515.04c1.48 8.44 9.53 14.08 17.97 12.6 8.44-1.48 14.08-9.53 12.6-17.97-1.48-8.44-9.53-14.08-17.97-12.6-3.82.67-7.24 2.74-9.61 5.81l6.92 10.41-9.45-5.53c-.73 2.35-.89 4.85-.46 7.27Z"
                    style={{
                        fill: "none",
                        stroke: "#3f3d56",
                        strokeMiterlimit: 10,
                    }}
                />
                <path
                    d="M801.76 557.36s13.7-5.37 17.83-8.31c4.13-2.94 21.08-6.45 22.1-1.74 1.02 4.72 20.59 23.46 5.12 23.58-15.47.12-35.95 2.54-40.07.03s-4.99-13.56-4.99-13.56Z"
                    style={{
                        fill: "#656380",
                    }}
                />
                <path
                    d="M847.09 569.25c-15.47.12-35.95 2.54-40.07.03-3.14-1.91-4.39-8.77-4.81-11.94-.29.01-.46.02-.46.02s.87 11.05 4.99 13.56 24.6.1 40.07-.03c4.47-.04 6.01-1.62 5.92-3.98-.62 1.42-2.32 2.31-5.65 2.34Z"
                    style={{
                        isolation: "isolate",
                        opacity: 0.2,
                    }}
                />
                <motion.rect
                    width={60}
                    y={570}
                    x={159}
                    rx={11.85}
                    ry={11.85}
                    style={{
                        fill: "#4285f4",
                    }}
                    animate='visible'
                    variants={variants}
                    custom={{ initialHeight: 80, finalHeight: 160, repeatDelay: 0.4 }}
                />
                <motion.rect
                    width={60}
                    x={273}
                    rx={11.85}
                    ry={11.85}
                    style={{
                        fill: "#4285f4",
                    }}
                    animate='visible'
                    variants={variants}
                    custom={{ initialHeight: 120, finalHeight: 250, repeatDelay: 0.2 }}
                />
                <motion.rect
                    width={60}
                    // height={319}
                    // y={252}
                    x={387}
                    rx={11.85}
                    ry={11.85}
                    animate='visible'
                    variants={variants}
                    custom={{ initialHeight: 200, finalHeight: 320, repeatDelay: 0.6 }}
                    style={{
                        fill: "#4285f4",
                    }}
                />
                <motion.rect
                    width={60}
                    x={501}
                    rx={11.85}
                    ry={11.85}
                    style={{
                        fill: "#4285f4",
                    }}
                    animate='visible'
                    variants={variants}
                    custom={{ initialHeight: 250, finalHeight: 380, repeatDelay: 0.1 }}
                />
                <motion.rect
                    width={60}
                    height={492}
                    x={615}
                    y={79}
                    rx={11.85}
                    ry={11.85}
                    animate='visible'
                    variants={variants}
                    custom={{ initialHeight: 300, finalHeight: 500, repeatDelay: 0.7 }}
                    style={{
                        fill: "#4285f4",
                    }}
                />
                <rect
                    width={60}
                    height={158}
                    x={167}
                    y={405}
                    rx={11.85}
                    ry={11.85}
                    style={{
                        fill: "none",
                        stroke: "#3f3d56",
                        strokeMiterlimit: 10,
                    }}
                />
                <rect
                    width={60}
                    height={253}
                    x={281}
                    y={310}
                    rx={11.85}
                    ry={11.85}
                    style={{
                        fill: "none",
                        stroke: "#3f3d56",
                        strokeMiterlimit: 10,
                    }}
                />
                <rect
                    width={60}
                    height={319}
                    x={395}
                    y={244}
                    rx={11.85}
                    ry={11.85}
                    style={{
                        fill: "none",
                        stroke: "#3f3d56",
                        strokeMiterlimit: 10,
                    }}
                />
                <rect
                    width={60}
                    height={382}
                    x={509}
                    y={181}
                    rx={11.85}
                    ry={11.85}
                    style={{
                        fill: "none",
                        stroke: "#3f3d56",
                        strokeMiterlimit: 10,
                    }}
                />
                <rect
                    width={60}
                    height={492}
                    x={623}
                    y={71}
                    rx={11.85}
                    ry={11.85}
                    style={{
                        fill: "none",
                        stroke: "#3f3d56",
                        strokeMiterlimit: 10,
                    }}
                />
                <path
                    d="M861 571.5H0"
                    style={{
                        fill: "none",
                        stroke: "#3f3d56",
                        strokeMiterlimit: 10,
                    }}
                />
                <path
                    d="M806.7 475.58s9.41 33.88-2.51 38.9-8.16-37.64-8.16-37.64l10.67-1.25Z"
                    style={{
                        fill: "#a0616a",
                    }}
                />
                <path
                    d="M721.38 692.65s-8.78-.63-11.92 1.25a7.58 7.58 0 0 1-6.27.63s-13.8-1.25-8.78 5.65c5.02 6.9 10.04 9.41 10.04 12.55s20.7 3.14 21.33 0c.63-3.14 1.25-19.45 0-20.08s-4.39 0-4.39 0ZM744.59 692.65s8.78-.63 11.92 1.25a7.58 7.58 0 0 0 6.27.63s13.8-1.25 8.78 5.65c-5.02 6.9-10.04 9.41-10.04 12.55s-20.7 3.14-21.33 0-1.25-19.45 0-20.08c1.25-.63 4.39 0 4.39 0Z"
                    style={{
                        fill: "#575a89",
                    }}
                />
                <path
                    d="M695.66 468.67s-4.39 99.13-1.88 104.15c2.51 5.02 11.29 89.72 10.04 94.74s-7.53 25.72 0 28.86 23.84 0 23.84 0 4.39-25.1 2.51-38.27c-1.88-13.18-2.51-68.39-2.51-68.39l12.55-57.72 4.39 54.58s1.25 74.66-7.53 89.72c-8.78 15.06 3.14 21.33 3.14 21.33s23.84 3.14 26.35 2.51c2.51-.63-1.88-25.1 0-35.76 1.88-10.67 6.27-70.27 10.04-84.7 3.76-14.43 25.1-94.74 9.41-111.05-15.68-16.31-90.34 0-90.34 0Z"
                    style={{
                        fill: "#3f3d56",
                    }}
                />
                <circle
                    cx={741.45}
                    cy={246.58}
                    r={21.96}
                    style={{
                        fill: "#a0616a",
                    }}
                />
                <path
                    d="M725.14 256.62s3.76 30.11 1.88 30.74 33.25 0 33.25 0-6.9-18.19 0-32.62l-35.13 1.88Z"
                    style={{
                        fill: "#a0616a",
                    }}
                />
                <path
                    d="M725.14 281.09s15.29-15.06 33.37 0l1.17 4.49-9.44-.1h-25.1v-4.39Z"
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <path
                    d="M799.8 473.69c-1.45.29-5 .88-9.63 1.58-15.41 2.33-42.73 5.85-43.7 3.44-1.25-3.14-5.65-14.43-8.78-9.41-3.14 5.02-1.25 9.41-14.43 10.04-8.97.43-22-.89-29.21-2.96-3.39-.97-5.5-2.11-5.3-3.31.63-3.76 7.53-75.29 7.53-82.19s2.51-40.15 2.51-40.15l-18.03-35.48-1.42-2.79s1.88-6.9 7.53-8.16c5.65-1.25 32.62-16.94 32.62-16.94s5.65-8.78 16.31-8.16c10.67.63 13.18-3.76 27.61 8.16 0 0 17.57 7.53 23.84 11.29s13.18 3.76 13.8 10.04c.13 1.26-.56 3.69-1.73 6.76-4.3 11.24-15.16 31.14-16.86 34.24-.15.27-.23.41-.23.41s-.33 11.28.02 24.49v.03c.34 12.67 1.29 27.1 3.75 35.08 5.02 16.31 20.08 62.74 13.8 63.99Z"
                    style={{
                        fill: "#575a89",
                    }}
                />
                <path
                    d="M769.96 237.56c-.44-2-1.28-3.89-2.48-5.55-.48-4.59-2.01-9-4.47-12.9-.97-1.83-2.34-3.41-4.01-4.63-1.91-1.1-4.1-1.65-6.3-1.57-.4 0-1.12.11-1.77.14-.41-.13-.83-.24-1.25-.35-.24-.54-.73-2.13-.87-2.03l-1.83 1.45c-.77-.13-1.55-.24-2.33-.32-.28-.81-.57-1.62-.85-2.43-.46.72-.86 1.48-1.21 2.27-.78-.04-1.55-.05-2.33-.04l-1.55-1.49c-.19.85-.86 1.51-1.72 1.68-.72.07-1.43.17-2.14.28h-.17c-3.83-.1-7.95-.27-11.15 1.84-1.5 1.03-2.72 2.41-3.55 4.03-.39.27-.79.53-1.17.81-1.28.88-2.4 1.98-3.28 3.26-.64 1.1-1.13 2.29-1.45 3.52a33.683 33.683 0 0 0-1.67 11.53c.13 3.94 1.62 7.71 4.21 10.68 1.64 1.76 3.73 3.07 5.37 4.83 3.39 3.63 4.02 8.69 6.92 12.53 3.06 4.06 8.65 6.73 13.57 7.5 5.96.9 12.04-.62 16.88-4.21 1.15-.8 2.13-1.83 2.87-3.01 1.7-2.95.98-6.65 1.61-10 1.19-6.27 7.17-11.53 6.14-17.83Z"
                    style={{
                        fill: "#3f3d56",
                    }}
                />
                <path
                    d="M686.24 477.46s9.41 33.88-2.51 38.9c-11.92 5.02-8.16-37.64-8.16-37.64l10.67-1.25Z"
                    style={{
                        fill: "#a0616a",
                    }}
                />
                <path
                    d="M697.53 400.58s-4.12 61.08-3.48 75.8c-3.39-.97-5.5-2.11-5.3-3.31.63-3.76 7.53-75.29 7.53-82.19s2.51-40.15 2.51-40.15l-18.03-35.48.46-2.79 9.1 19.14 12.86 3.45-5.65 65.54Z"
                    style={{
                        isolation: "isolate",
                        opacity: 0.1,
                    }}
                />
                <path
                    d="m683.73 308.69-4.39 3.76s-5.65 33.25-5.02 41.41c.63 8.16-13.18 131.75-2.51 131.75s22.59-1.88 20.7-6.27 3.13-78.76 3.13-78.76l5.65-65.54-17.57-26.35Z"
                    style={{
                        fill: "#575a89",
                    }}
                />
                <path
                    d="M799.32 315.45c-4.3 11.24-15.16 31.14-16.86 34.24.05-8.02.08-13.7.08-13.7l13.18-26.98 2.82-2.2.78 8.64ZM799.8 473.69c-1.45.29-5 .88-9.63 1.58-2.4-17.77-8.83-68.86-8.42-73.67.2-2.37.37-14.09.5-26.98.34 12.67 1.29 27.1 3.75 35.08 5.02 16.31 20.08 62.74 13.8 63.99Z"
                    style={{
                        isolation: "isolate",
                        opacity: 0.1,
                    }}
                />
                <path
                    d="m791.65 304.3 9.41 2.51s6.27 69.64 6.9 81.56c.63 11.92 8.16 85.33 6.9 88.46s-20.7 7.53-21.33 4.39-9.75-73.92-9.27-79.62-2.65-64.68-2.65-64.68l10.04-32.62Z"
                    style={{
                        fill: "#575a89",
                    }}
                />
                <path
                    d="m196.5 344.5 114-95 115-65 114-63 114-110"
                    style={{
                        fill: "none",
                        stroke: "#3f3d56",
                        strokeMiterlimit: 10,
                    }}
                />
                <circle
                    cx={193.5}
                    cy={349.5}
                    r={11}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={307.5}
                    cy={254.5}
                    r={11}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={422.5}
                    cy={189.5}
                    r={11}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={536.5}
                    cy={126.5}
                    r={11}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={650.5}
                    cy={16.5}
                    r={11}
                    style={{
                        fill: "#f2f2f2",
                    }}
                />
                <circle
                    cx={196.5}
                    cy={344.5}
                    r={11}
                    style={{
                        fill: "none",
                        stroke: "#3f3d56",
                        strokeMiterlimit: 10,
                    }}
                />
                <circle
                    cx={310.5}
                    cy={249.5}
                    r={11}
                    style={{
                        fill: "none",
                        stroke: "#3f3d56",
                        strokeMiterlimit: 10,
                    }}
                />
                <circle
                    cx={425.5}
                    cy={184.5}
                    r={11}
                    style={{
                        fill: "none",
                        stroke: "#3f3d56",
                        strokeMiterlimit: 10,
                    }}
                />
                <circle
                    cx={539.5}
                    cy={121.5}
                    r={11}
                    style={{
                        fill: "none",
                        stroke: "#3f3d56",
                        strokeMiterlimit: 10,
                    }}
                />
                <circle
                    cx={653.5}
                    cy={11.5}
                    r={11}
                    style={{
                        fill: "none",
                        stroke: "#3f3d56",
                        strokeMiterlimit: 10,
                    }}
                />
            </g>
        </motion.svg>
    );
}
