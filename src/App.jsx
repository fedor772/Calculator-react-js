import "./App.css";
import { useState } from "react";
import "mdui/mdui.css";
import "mdui";

export default function App() {
   const [result, setResult] = useState("");
   function addRemove() {
      let str = "";
      for (let i = 0; i < result.length - 1; i++) {
         str = str + result[i];
      }
      setResult(str);
   }

   return (
      <main>
         <div className="result">{result}</div>
         <div className="row">
            <mdui-button onClick={() => setResult(result + "1")}>1</mdui-button>
            <mdui-button onClick={() => setResult(result + "2")}>2</mdui-button>
            <mdui-button onClick={() => setResult(result + "3")}>3</mdui-button>
            <mdui-button onClick={() => setResult(result + "+")}>+</mdui-button>
            <mdui-button onClick={() => setResult("")}>×</mdui-button>
         </div>
         <div className="row">
            <mdui-button onClick={() => setResult(result + "4")}>4</mdui-button>
            <mdui-button onClick={() => setResult(result + "5")}>5</mdui-button>
            <mdui-button onClick={() => setResult(result + "6")}>6</mdui-button>
            <mdui-button onClick={() => setResult(result + "-")}>-</mdui-button>
            <mdui-button onClick={addRemove}>⟨-</mdui-button>
         </div>
         <div className="row">
            <mdui-button onClick={() => setResult(result + "7")}>7</mdui-button>
            <mdui-button onClick={() => setResult(result + "8")}>8</mdui-button>
            <mdui-button onClick={() => setResult(result + "9")}>9</mdui-button>
            <mdui-button onClick={() => setResult(result + "*")}>*</mdui-button>
            <mdui-button onClick={() => setResult(result + "(")}>(</mdui-button>
         </div>
         <div className="row">
            <mdui-button onClick={() => setResult(result + "0")}>0</mdui-button>
            <mdui-button onClick={() => setResult(result + ".")}>.</mdui-button>
            <mdui-button onClick={() => setResult(eval(result))}>=</mdui-button>
            <mdui-button onClick={() => setResult(result + "/")}>/</mdui-button>
            <mdui-button onClick={() => setResult(result + ")")}>)</mdui-button>
         </div>
      </main>
   );
}
