export default function reducer(state, action) {
  switch (action.type) {
    case 'User':
      return { ...state, user: action.payload };
    case 'OpenLoading':
      return {...state, loading: {open: true, message: action.payload}};
    case 'CloseLoading':
      return {...state, loading: {open: false, message: ''}};
    default:
      throw Error(`${action.type}: 알 수 없는 타입입니다.`);
  }
};
