import React, {createContext, useReducer} from "react";
import reducer from "./reducer";

const initialState = {
  user: null,
  loading: false,
};

const store = createContext(initialState);
//return <Provider value={[state, dispatch]}>{children}</Provider> 한줄을 위해 존재
const {Provider} = store;

const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={[state, dispatch]}>{children}</Provider>
};

export {initialState, store, StoreProvider};

// 이 코드는 React 애플리케이션에서 사용할 수 있는 전역 상태를 관리하는 컨텍스트와 리듀서 함수를 정의합니다.

// initialState: 초기 상태 객체로, 애플리케이션의 전역 상태를 정의합니다.
// store: createContext 함수를 사용하여 초기 상태를 포함하는 컨텍스트를 생성합니다. 이 컨텍스트를 통해 전역 상태에 접근할 수 있습니다.
// StoreProvider: 상태 관리를 위한 공급자 컴포넌트로, useReducer 훅을 사용하여 상태와 액션을 관리합니다. 상태와 디스패치 함수를 컨텍스트의 값으로 제공하여 하위 컴포넌트에서 사용할 수 있도록 합니다.
   
// 이러한 구조를 사용하면 애플리케이션의 여러 컴포넌트에서 전역 상태를 공유하고 변경할 수 있습니다. 이를 통해 상태 관리를 효율적으로 할 수 있습니다.