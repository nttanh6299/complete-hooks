import React from 'react';
import './App.css';

import * as useStateComponent from './Components/useStates';
import * as useEffectComponent from './Components/useEffects';

import * as Overreacted from './Overreacted';

/*
Each render has its own props and state => has its own event handlers => has its own effects

=> has its own everything
*/

function App() {
  return (
    <div className="App">
      {/* <useStateComponent.HookCounter /> */}
      {/* <useStateComponent.PrevStateHookCounter /> */}
      {/* <useStateComponent.ObjectHook /> */}
      {/* <useStateComponent.ArrayHook /> */}
      {/* <useEffectComponent.HookCounterOne /> */}
      {/* <useEffectComponent.MouseHookContainer /> */}
      {/* <useEffectComponent.IntervalCounterHook /> */}
      {/* <useEffectComponent.DataFetchingOne /> */}
      
    </div>
  );
}

export default App;
