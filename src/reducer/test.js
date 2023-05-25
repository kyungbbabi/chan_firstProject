// export default function reducer(state, action) {
//   switch (action.type) {
//     case 'User':
//       return {...state, user: action.payload};
//     case 'ChangeMode':
//       return {...state, mode: action.payload};
//     case 'DarkMode':
//       return {...state, darkMode: !state.darkMode};
//     case 'OpenLoading':
//       return {...state, loading: {open: true, message: action.payload}};
//     case 'CloseLoading':
//       return {...state, loading: {open: false, message: ''}};
//     case 'OpenImageView':
//       return {...state, imageView: {open: true, source: action.payload}};
//     case 'CloseImageView':
//       return {...state, imageView: {open: false, source: ''}};
//     case 'OpenSnackbar':
//       return {...state, snackbar: {open: true, message: action.payload}};
//     case 'CloseSnackbar':
//       return {...state, snackbar: {open: false, message: ''}};
//     case 'CreateFeed':
//       return {...state, feedContent: {...state.feedContent, content: action.payload}};
//     default:
//       return state;
//   }
// };







// import React, {createContext, useReducer} from "react";
// import reducer from "./reducer";

// const initialState = {
//   darkMode: false,
//   user: {
//     email: undefined,
//     followerCount: 0,
//     followingCount: 0,
//     id: 0,
//     image: {
//       originalName: undefined,
//       source: undefined
//     },
//     interests: [],
//     name: '사용자명',
//     message: '',
//     occupation: '직업'
//   },
//   loading: {
//     open: false,
//     message: ''
//   },
//   imageView: {
//     open: false,
//     source: ''
//   },
//   snackbar: {
//     open: false,
//     message: ''
//   }
// };

// const store = createContext(initialState);
// const {Provider} = store;

// const StoreProvider = ({children}) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return <Provider value={[state, dispatch]}>{children}</Provider>
// };

// export {initialState, store, StoreProvider};