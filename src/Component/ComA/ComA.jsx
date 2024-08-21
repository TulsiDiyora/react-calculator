import React, { useRef } from 'react';
import './ComA.css'

const Calculator = () => {
    const inputRef = useRef(null);

    const handleClick = (ele) => {
        inputRef.current.value += ele.target.name;
    };
        
    const clear = () => {
        inputRef.current.value = "";
    };

    const calculate = () => {
      
        inputRef.current.value = eval(inputRef.current.value).toString();
     
    };

    return (
        <div className="calculator">
            <input  type="text" ref={inputRef} className="calc-input" readOnly />
            <div className="calc-btn">
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button name="+" onClick={handleClick}>+</button>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button name="-" onClick={handleClick}>&ndash;</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button name="*" onClick={handleClick}>&times;</button>
                <button name="0" onClick={handleClick}>0</button>
                <button name="." onClick={handleClick}>.</button>
                <button onClick={calculate}>=</button>
                <button name="/" onClick={handleClick}>&divide;</button>
                <button onClick={clear} className="clear-btn">Clear</button>
            </div>
        </div>
    );
};

export default Calculator;