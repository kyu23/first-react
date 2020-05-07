import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wireframe from './Components/Wireframe';

function App() {
  return (
    <div className="container">
      <div className="title">
        <h1>Hello Dojo</h1>
      </div>
      <div className="listheader">
        <h3>Things I need to do:</h3>
      </div>
      <div className="listitems">
        <ul>
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run marathon</li>
          <li>Feed the dogs</li>
        </ul>
      </div>
    </div>
    
  );
}

export default App;
