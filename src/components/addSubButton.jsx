import { useEffect, useState } from "react"

const cont = 1

export default function AddSubButton(props) {
    const [counter, setCounter] = useState(cont)

    function SumSuc(sinal) {
        if (sinal == 0 && cont >= 1) {
            setCounter(counter - 1);
        } else {
            setCounter(counter + 1)
        }

    }


    return (
        <div className="flex flex-row border-0 bg-slate-400 rounded-full justify-around w-20 lg:w-36 px-3 items-center">
            <button id="-" className="text-base font-medium lg:text-xl hover:text-purple-700" onClick={() => { SumSuc(0) }}>-</button>
            <span className="text-base font-medium lg:text-lg">{counter}</span>
            <button id="+" className="text-base font-medium lg:text-xl hover:text-purple-700" onClick={() => { SumSuc(1) }}>+</button>
            {props.CallBack(counter)}
        </div>
    )
}