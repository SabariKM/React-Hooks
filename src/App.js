import './App.css';
import React, {useReducer} from 'react';
import HookCounter from './components/stateHookComponents/HookCounter';
import HookCounterFour from './components/stateHookComponents/HookCounterFour';
import HookCounterThree from './components/stateHookComponents/HookCounterThree';
import HookCounterTwo from './components/stateHookComponents/HookCounterTwo';
import HookCounterOne from './components/effectHookComponents/HookCounterOne';
import BaraniForm from './components/BaraniForm';
import ClassMouse from './components/effectHookComponents/ClassMouse';
import HookMouse from './components/effectHookComponents/HookMouse';
import MouseContainer from './components/effectHookComponents/MouseContainer';
import IntervalClassCounter from './components/effectHookComponents/IntervalClassCounter';
import IntervalHookCounter from './components/effectHookComponents/IntervalHookCounter';
import DataFetching from './components/fetchDataWithUseEffect/DataFetching';
import ComponentC from './components/useContextComponents/ComponentC';
import CounterOne from './components/useReducerComponents/CounterOne';
import CounterTwo from './components/useReducerComponents/CounterTwo';
import CounterThree from './components/useReducerComponents/CounterThree';
import ComponentAA from './components/useReducerWithUseContext/ComponentAA';
import ComponentBB from './components/useReducerWithUseContext/ComponentBB';
import ComponentCC from './components/useReducerWithUseContext/ComponentCC';
import DataFetchingOne from './components/fetchingDataWithUseReducer/DataFetchingOne';
import DataFetchingTwo from './components/fetchingDataWithUseReducer/DataFetchingTwo';
import ParentComponent from './components/callbackHook/ParentComponent';
import CandyDispenser from './components/callbackHook/CandyDispenser';
import CounterMemo from './components/useMemoHook/CounterMemo';
import FocusInput from './components/useRefHook/FocusInput';
import ClassTimer from './components/useRefHook/ClassTimer';
import HookTimer from './components/useRefHook/HookTimer';
import DocTitleOne from './components/customHook/DocTitleOne';
import DocTitleTwo from './components/customHook/DocTitleTwo';
import CustomCounterOne from './components/customHook/CustomCounterOne';
import CustomCounterTwo from './components/customHook/CustomCounterTwo';
import UserForm from './components/customHook/UserForm';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function App() {
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
        <UserForm />
    </div>
  );
}

export default App;

{/*
    <HookMouse />
    <ClassMouse />
    <HookCounterOne />
    <BaraniForm />
    <MouseContainer />
    <IntervalHookCounter />
    <IntervalClassCounter />
    <DataFetching />
    <UserContext.Provider value={'Sabari'}>
        <ChannelContext.Provider value={'Mathivanan'}>
            <ComponentC />
        </ChannelContext.Provider>
    </UserContext.Provider>
    <CounterOne />
    <CounterTwo />
    <CounterThree />
    <CountContext.Provider
    value={{countState: count, countDispatch: dispatch}}
    >
        Count - {count}
        <ComponentAA />
        <ComponentBB />
        <ComponentCC />
    </CountContext.Provider>
    <DataFetchingOne />
    <DataFetchingTwo />
    <ParentComponent />
    <CandyDispenser />
    <CounterMemo />
    <FocusInput />
    <ClassTimer />
    <HookTimer />
    <DocTitleOne />
    <DocTitleTwo />
    <CustomCounterOne />
    <CustomCounterTwo />
*/}
