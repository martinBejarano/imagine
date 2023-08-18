
const animations = {

    whenInView: {
        slideInLeft: {
            initial: { opacity: 0.25, x: -150 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true, amount: 0.5 },
        },

        slideInBottom: {
            initial: { opacity: 0.25, y: 100 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true, amount: 0.5 },
        }
    }
}

export default animations;