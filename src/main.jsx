import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

// import { HooksApp } from './HooksApp'
// import { CounterApp } from "./useState/CounterApp";
// import { CustomCounterApp } from "./useState/CustomCounterApp";
// import { SimpleForm } from "./useEffect/SimpleForm";
// import { SimpleFormCustom } from './useEffect/SimpleFormCustom';
// import { MultipleCustomHooks } from './examples/MultipleCustomHooks';
// import { FocusScreen } from './UseRef/FocusScreen';
// import { Layout } from './UseLayoutEffect/Layout';
// import { Memorize } from './memos/Memorize';
// import { MemorizeHook } from './memos/MemorizeHook';
// import { CallbackHook } from './memos/CallbackHook';
// import { Padre } from './tarea-memo/Padre';
// import "./useReducer/intro-reducer";
// import { TodoApp } from './useReducer/TodoApp';
import { MainApp } from './useContext/MainApp';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>

)
