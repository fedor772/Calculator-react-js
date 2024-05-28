import './App.css';
import { useState } from 'react';
import 'mdui/mdui.css';
import 'mdui';
import 'mdui/components/button.js';

export default function App() {
  const [result, setResult] = useState("ㅤ");
  function addOne() {
     setResult(result + "1");
  }
  function addTwo() {
     setResult(result + "2");
  }
  function addThree() {
     setResult(result + "3");
  }
  function addFour() {
     setResult(result + "4");
  }
  function addFive() {
     setResult(result + "5");
  }
  function addSix() {
     setResult(result + "6");
  }
  function addSeven() {
     setResult(result + "7");
  }
  function addEight() {
     setResult(result + "8");
  }
  function addNine() {
     setResult(result + "9");
  }
  function addNull() {
     setResult(result + "0");
  }
  function addDot() {
     setResult(result + ".");
  }
  function addEql() {
     setResult(eval(result));
  }
  function addPlus() {
     setResult(result + "+");
  }
  function addMinus() {
     setResult(result + "-");
  }
  function addMulti() {
     setResult(result + "*");
  }
  function addDivade() {
     setResult(result + "/");
  }
  function addClear() {
     setResult("ㅤ");
  }
  function addRemove() {
    let str = "";
    for (let i = 0; i < result.length - 1; i++) {
       str = str + result[i];
    }
    if (str) {
       setResult(str);
    }
  }
  
  return (
    <main>
      <div className="result">{result}</div>
      <div className="row">
        <mdui-button onClick={addOne}>1</mdui-button>
        <mdui-button onClick={addTwo}>2</mdui-button>
        <mdui-button onClick={addThree}>3</mdui-button>
        <mdui-button onClick={addPlus}>+</mdui-button>
        <mdui-button onClick={addClear}>×</mdui-button>
      </div>
      <div className="row">
        <mdui-button onClick={addFour}>4</mdui-button>
        <mdui-button onClick={addFive}>5</mdui-button>
        <mdui-button onClick={addSix}>6</mdui-button>
        <mdui-button onClick={addMinus}>-</mdui-button>
        <mdui-button onClick={addRemove}>⟨-</mdui-button>
      </div>
      <div className="row">
        <mdui-button onClick={addSeven}>7</mdui-button>
        <mdui-button onClick={addEight}>8</mdui-button>
        <mdui-button onClick={addNine}>9</mdui-button>
        <mdui-button onClick={addMulti}>*</mdui-button>
      </div>
      <div className="row">
        <mdui-button onClick={addNull}>0</mdui-button>
        <mdui-button onClick={addDot}>.</mdui-button>
        <mdui-button onClick={addEql}>=</mdui-button>
        <mdui-button onClick={addDivade}>/</mdui-button>
      </div>
    </main>
  )
}
