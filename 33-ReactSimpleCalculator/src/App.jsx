import { useState } from "react";

import "./App.css";

import Input2 from "./component/Input2";
import Topla from "./component/Buttons/topla";
import Cix from "./component/Buttons/cix";
import Vur from "./component/Buttons/vur";
import Bol from "./component/Buttons/bol";

import Result from "./component/result";
import Input1 from "./component/Input1";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange1 = (e) => {
    setNum1(e.target.value);
  };
  const handleInputChange2 = (e) => {
    setNum2(e.target.value);
  };

  const handleTopla = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };
  const handleCixma = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };
  const handleBolme = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };
  const handleVurma = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  return (
    <>
      <div className="inputs">
        <Input1 value={num1} onChange={handleInputChange1} />
        <Input2 value={num2} onChange={handleInputChange2} />
      </div>
      <div className="buttons">
        <Topla onClick={handleTopla} />
        <Cix onClick={handleCixma} />
        <Vur onClick={handleVurma} />
        <Bol onClick={handleBolme} />
      </div>

      <div>
        <Result result={result} />
      </div>
    </>
  );
}

export default App;
