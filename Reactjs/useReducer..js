// import React, { useReducer } from 'react';
// import './style.css';

// export default function App() {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'increment':
//         return { count: state.count + 1 };
//       case 'decrement':
//         return { count: state.count - 1 };
//       default:
//         throw new Error('something went worng');
//     }
//   };

//   const initialValue = { count: 0 };
//   const [state, dispatch] = useReducer(reducer, initialValue);
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <button
//         onClick={() => {
//           dispatch({ type: 'increment' });
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           dispatch({ type: 'decrement' });
//         }}
//       >
//         Increment
//       </button>
//       {state.count}
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }
