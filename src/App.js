/* eslint-disable no-unused-vars */

import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet.js'
// import {Greet2} from './component/Greet.js'
import { Component } from 'react';
import Welcome from './component/Welcome.js';
// import Hello from './component/Hello.js'
import Message from './component/Message.js';
// import Count from './component/Counter.js;
import FunctionClick from './component/FunctionClick.js';
import ClassClick from './component/ClassClick.js';
import EventBind from './component/EventBind.js';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Greet name="Mohamed" heroName="spiderman"><p>This is children props</p>
        </Greet>
        <Greet name="Ahmed" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Hassan" heroName="Batman"></Greet> */}
        {/* <Greet2 />  */}
        {/* <Welcome name="Aya" heroName="superwoman"/>
        <Welcome name="Yasmin" heroName="Kindwoman"/>
        <Welcome name="Mado" heroName="superboy"/>  */}
        
        {/* <Message /> */}
        {/* <Count /> */}


        {/* <Hello /> */}
        <FunctionClick />
        <ClassClick />
        <EventBind />
      </div>
    );
  }
  
}

export default App;
