import Heading from "./components/Heading";
import InputBox from "./components/InputBox";
import Button from "./components/Button";
import "./App.css";
import { useState } from "react";

function App() {
 

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('')
  const [error, setError] = useState('');


  const inputVal = (type,value)=>{
      if(type === 'num1'){
        setNum1(value);
        setResult('');
      }
      else if(type == 'num2'){
        setNum2(value);
        setResult('');
      }
  }

  const handleOperation = (sign)=>{
    if(num1===''){
    
      setError(`Error: Please fill in Num1 fields`)
      return;
    }
    if(num2 ===''){
      setError(`Error: Please fill in Num2 fields`)
      return;
    }

    if(sign === '+')
    {
      let total = `${num1}+${num2}`;
      setResult(`Success...!\n Result = ${eval(total)}`)
      setError('')
      
    }
    else if(sign === '-')
    {
      let total = `${num1}-${num2}`;
      setResult(`Success...!\n Result = ${eval(total)}`)
      setError('')
    }
    else if(sign === '*')
    {
      let total = `${num1}*${num2}`;
      setResult(`Success...!\n Result = ${eval(total)}`)
      setError('')
    }
    else{
      let total = `${num1}/${num2}`;
      setResult(`Success...!\n Result = ${eval(total)}`)
      setError('')
    }
  }

  // console.log(`${num1} and ${num2}`)

  return (
    <>
      <center>
        <div className="container">
          <Heading/>
          <div className="input-container">
            <InputBox placeholder="Num 1" inputType = 'num1' inputVal = {inputVal}></InputBox>
            <InputBox placeholder="Num 2" inputType = 'num2'  inputVal = {inputVal}></InputBox>
          </div>
          <div className="btn-container">
            <Button handleOperation = {handleOperation}></Button>
          </div>

          {error && <div className="error" style={{color: 'red'}}>{error}</div>}
          {result && <div className="result" style={{ whiteSpace: 'pre-line' }}>{result}</div>}
          

        </div>
      </center>
    </>
  );
}

export default App;
