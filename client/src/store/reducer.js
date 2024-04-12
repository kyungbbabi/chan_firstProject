export default function reducer(state, action) {
  switch (action.type) {
    case 'User':
      return { ...state, user: action.payload };
    default:
      throw Error(`${action.type}: 알 수 없는 타입입니다.`);
  }
};
