import React from 'react';
import ReactDOM from 'react-dom'
import './styles.css'
import ColorPicker from './color-picker';


function App() {
  return (
    <div className="App">
      
      <ColorPicker />
    </div>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);