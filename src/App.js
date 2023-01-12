import './App.css';
import { useState } from 'react';
function App() {

  // const [res,setRes] = useState(0);
  // const [str,setStr] = useState('');

  let string = '';

  const add =(val) => {
    string = string + val;
  }
  const display = () => {alert(string);}

  return (
    <div className="App">
      {/* {console.log(string)} */}
      <div className='screen'>
          <h1>{string}</h1>
      </div>
      <div >
          <div className='prime-btns'>
            <div>Clear</div>
            <div>Delete</div>
          </div>
          <div className='button-section'>
            <div className='number-btns'>
              <div onClick={add('9')}>9</div><div onClick={add('8')}>8</div><div onClick={add('7')}>7</div>
              <div onClick={add('6')}>6</div><div onClick={add('5')}>5</div><div onClick={add('4')}>4</div>
              <div onClick={add('3')}>3</div><div onClick={add('2')}>2</div><div onClick={add('1')}>1</div>
              <div style={{marginLeft:'64.5px'}}  onClick={add(0)}>0</div>
            </div>
            <div className='arithmetic-btns'>
              <div onClick={add('/')}>/</div>
              <div onClick={add('*')}>x</div>
              <div onClick={add('+')}>+</div>
              <div onClick={add('-')}>-</div>
            </div>
          </div>
          <div className='submit-btn'>
            <div onClick={display()}>=</div>
          </div>
      </div>

    </div>
  );
}

export default App;
