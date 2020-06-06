import React, { useState } from 'react';

const ScientificMod = () => {

    const reg = /\d+(\.\d{1,2})?/
    
    const [number, setNumber] = useState(0)
    const _onChange = (event) => {
        if (!number.length && reg.test(+(number + event.target.value))) {
            setNumber((number + `${event.target.value}`).replace(/^0+/, ''))
        } else if (reg.test(+(number + event.target.value))) {
            setNumber((number + `${event.target.value}`));
        } else if (number.length && ["^", "√"].includes(event.target.value)) {
            if (event.target.value === "√") {
                setNumber(`${Math.sqrt(number)}`)
            } else {
                setNumber(`${number * number}`)
            }
        } else if (event.target.value === "reverse") {
            if (number[0] === "-") {
                setNumber(Math.abs(number))
            } else {
                setNumber(`-` + number)
            }
        }
    }

    const _clearVal = () => {
        setNumber(0)
    }
    const _removeDigit = () => {
        if (number === 'NaN' || number == 0 || number.length === 1) {
            setNumber(0)
        } else {
            setNumber(number.slice(0, -1))
        }
    }


    return (
        <div>
            <div className="calculator">
                <input value={number} onChange={(e) => setNumber(e.target.value)}></input>
                <div>
                    <button value="" onClick={_removeDigit} >C</button>
                    <button onClick={_clearVal} className="is-clear">Clear</button>
                    <button value="^" onClick={_onChange} >^</button>
                    <button value="&#8730;" onClick={_onChange} >√</button>
                    <button value="7" onClick={_onChange} >7</button>
                    <button value="8" onClick={_onChange} >8</button>
                    <button value="9" onClick={_onChange} >9</button>
                    <button value="reverse" onClick={_onChange} >+/-</button>
                    <button value="4" onClick={_onChange} >4</button>
                    <button value="5" onClick={_onChange}>5</button>
                    <button value="6" onClick={_onChange}>6</button>
                    <button value="1" onClick={_onChange} >1</button>
                    <button value="2" onClick={_onChange} >2</button>
                    <button value="3" onClick={_onChange} >3</button>
                    <button value="0" onClick={_onChange} >0</button>
                    <button value="." onClick={_onChange} >.</button>
                </div>
            </div>
        </div>
    )
}

export default ScientificMod;