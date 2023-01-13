import './App.css';
import { useState } from 'react';
function App() {

  const [string,setString] = useState('');
  const add =(val) => {
    // setString('');
    setString(string+val);
  }
  const clear = () => {
    setString('');
  }
  const del = () => {
    setString(string.substring(0,string.length-1));
  }
  const display = () => {
    setString(eval(string))
  }

  return (
    <div className="App">
      <div className='screen'> 
          <h2>
          {string}
          </h2>
      </div>
      <div >
          <div className='prime-btns'>
            <div onClick={()=>clear()} >Clear</div>
            <div onClick={()=>del()}>Delete</div>
          </div>
          <div className='button-section'>
            <div className='number-btns'>
              <div onClick={()=>add('9')}>9</div>
              <div onClick={()=>add('8')}>8</div>
              <div onClick={()=>add('7')}>7</div>
              <div onClick={()=>add('6')}>6</div>
              <div onClick={()=>add('5')}>5</div>
              <div onClick={()=>add('4')}>4</div>
              <div onClick={()=>add('3')}>3</div>
              <div onClick={()=>add('2')}>2</div>
              <div onClick={()=>add('1')}>1</div>
              <div onClick={()=>add('.')}>.</div>
              <div onClick={()=>add('0')}>0</div>
            </div>
            <div className='arithmetic-btns'>
              <div onClick={()=>add('/')}>/</div>
              <div onClick={()=>add('*')}>x</div>
              <div onClick={()=>add('+')}>+</div>
              <div onClick={()=>add('-')}>-</div>
            </div>
          </div>
          <div className='submit-btn'>
            <div onClick={()=>display()}>=</div>
          </div>
      </div>

    </div>
  );
}

export default App;
