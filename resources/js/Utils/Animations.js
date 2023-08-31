
const animations = {

    whenInView: {
        slideInLeft: {
            initial: { opacity: 0, x: -150 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true, amount: 0.3 },
        },

        slideInRight: {
            initial: { opacity: 0, x: 150 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true, amount: 0.3 },
        },

        slideInBottom: {
            initial: { opacity: 0, y: 100 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true, amount: 0.3 },
        },

        animateVariants: {
            whileInView: 'animate',
            transition: { duration: 0.8 },
            viewport: { once: true, amount: 0.6 },
        },

        delayVariants: (delay) => {
            return {
                initial: { opacity: 0, x: 150 },
                variants: {
                    animate: {
                        opacity: 1,
                        x: 0,
                        transition: { delay: 1 * delay, duration: 0.4 }
                    }
                }
            }

        }
    }
}

export default animations;