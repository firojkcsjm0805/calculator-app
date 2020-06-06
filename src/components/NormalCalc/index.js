import React, { useState } from 'react';

const KeyPad = () => {
    const [number, setNumber] = useState("0")

    const _onChange = (event) => {
        try {
            if (!["+", "/", "-", "*"].includes(number[number.length - 1]) || eval(number + `${event.target.value}`)) {
                setNumber((number + `${event.target.value}`).replace(/^0+/, ''))
            }
        } catch (error) {
            setNumber(`${number.substr(0, number.length - 1)}${event.target.value}`)
        }
    }

    const _clearVal = () => {
        setNumber(0)
    }

    const onCalculate = () => {
        try {
            setNumber(eval(number));
        } catch (error) {
        }
    }

    const _removeDigit = () => {
        if (number == 0 || number.length === 1) {
            setNumber(0)
        } else {
            setNumber(number.slice(0, -1))
        }
    }

    return (
        <div className="calculator">
            <input value={number} onChange={(e) => setNumber(e.target.value)}></input>
            <div>
                <button value="" onClick={_removeDigit} >C</button>
                <button onClick={_clearVal} className="is-clear">Clear</button>
                <button value="+" onClick={_onChange} >+</button>
                <button value="-" onClick={_onChange} >-</button>
                <button value="7" onClick={_onChange} >7</button>
                <button value="8" onClick={_onChange} >8</button>
                <button value="9" onClick={_onChange} >9</button>
                <button value="*" onClick={_onChange} >*</button>
                <button value="4" onClick={_onChange} >4</button>
                <button value="5" onClick={_onChange} >5</button>
                <button value="6" onClick={_onChange} >6</button>
                <button value="-" onClick={_onChange} >-</button>
                <button value="1" onClick={_onChange}>1</button>
                <button value="2" onClick={_onChange}>2</button>
                <button value="3" onClick={_onChange} >3</button>
                <button value="/" onClick={_onChange} >/</button>
                <button value="0" onClick={_onChange} >0</button>
                <button value="." onClick={_onChange} >.</button>
                <button value="=" onClick={onCalculate} >=</button>
                <button value="%" onClick={_onChange} >%</button>
            </div>
        </div>
    )
}
export default KeyPad;