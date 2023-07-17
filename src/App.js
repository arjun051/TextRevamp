
import { useState } from 'react';
import './App.css';
import Navbar from './compoents/Navbar';
import Textform from './compoents/Textform';


function App() {
  const [mode, setmode] = useState('light')
  const togglemode = () => {
    if (mode == 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#0d0c35'


    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (

      <div className="App">
       
          
        <Navbar c1="TextRevamp" c2="Settings" dropdown="Help" mode={mode} togglemode={togglemode} />




        <div className="container">
          <Textform heading="Enter the text you want to edit:" mode={mode} />
        </div>


      </div>

  );
}

export default App;
