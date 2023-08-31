// import React, { useState, useEffect, createContext, useContext } from 'react';
// import { createPortal } from 'react-dom';

// const SnackbarContext = React.createContext();

// const SnackbarProvider = ({ children }) => {
//     const [snacks, setSnacks] = React.useState([]);

//     return (
//         <SnackbarContext.Provider value={{ snacks, setSnacks }}>
//             {children}
//         </SnackbarContext.Provider>
//     );
// }

// const SnackbarItem = ({ message }) => (
//     <div className=''>
//         <p className=''>{message}</p>
//         <img
//             className=''
//             src=''
//             alt="icono de cerrar snackbar"
//         />
//     </div>
// );



// const SnackbarContainer = () => {
//     const { snacks, setSnacks } = useContext(SnackbarContext)

//     const removeSnackbar = (id) => {
//         setSnacks((prevSnacks) => prevSnacks.filter((s) => s.id !== id));
//     };

//     useEffect(() => {
//         if (snacks.length > 0) {
//             const timer = setTimeout(() => {
//                 removeSnackbar(snacks[0].id);
//             }, snacks[0].duration);

//             return () => clearTimeout(timer);
//         }
//     }, [snacks]);

//     if (snacks) {
//         return createPortal(
//             snacks.map((snack) => (
//                 <SnackbarItem
//                     key={snack.id}
//                     message={snack.message}
//                     type={snack.type}
//                     onClose={() => removeSnackbar(snack.id)}
//                 />
//             )),
//             // <SnackbarItem
//             //     key={2}
//             //     message={'test'}
//             // />,
//             document.getElementById('snackbar-container')
//         );
//     }

//     return <h1>test</h1>
// };

// const SnackbarButton = (message, type, duration) => {
//     const { snacks, setSnacks } = useContext(SnackbarContext);

//     const snack = {
//         id: new Date().getTime(),
//         message,
//         type,
//         duration,
//     };

//     return <button type='button' onClick={() => {
//         setSnacks((prevSnacks) => [...prevSnacks, snack]);
//     }}>ADD SNACKBAR</button>
// };

// export { SnackbarContainer, SnackbarProvider, SnackbarContext, SnackbarButton };