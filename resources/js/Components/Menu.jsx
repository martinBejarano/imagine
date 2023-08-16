import { createContext, useContext, Fragment, useRef } from 'react';
import { motion, useCycle } from "framer-motion"


const MenuContext = createContext();

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="#000"
        strokeLinecap="round"
        {...props}
    />
);

function Menu(props) {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);


    return (
        <MenuContext.Provider value={{ isOpen, toggleOpen }}>
            <motion.div
                initial={false}
                animate={isOpen ? 'opened' : 'closed'}
                {...props}
            >
                {props.children}
            </motion.div>
        </MenuContext.Provider>

    );
}

function Trigger(props) {
    const { isOpen, toggleOpen } = useContext(MenuContext);

    if (props.children) {
        return (<button type='button' onClick={() => { toggleOpen() }} {...props}>{props.children}</button>)
    }

    return (<>
        <motion.button
            {...props}
            onClick={() => { toggleOpen() }}
            className={`z-50 ${props.className || ''}`}
        >
            <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        opened: { d: "M 3 16.5 L 17 2.5" }
                    }}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        opened: { opacity: 0 }
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        opened: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />
            </svg>
        </motion.button>
    </>)
}

function Content(props) {

    const { isOpen, toggleOpen } = useContext(MenuContext);

    return (
        <motion.div
            {...props}
            onClick={() => { toggleOpen() }}
        />
    )
}

Menu.Content = Content;
Menu.Trigger = Trigger;

export default Menu;