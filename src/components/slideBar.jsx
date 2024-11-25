import { useState } from "react"
import formatCurrency from "../utils/currency";

export default function SlideBar() {
    const [value, setValue] = useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    

    return (
        <div className="price-range p-4">
            <span className="text-sm">{formatCurrency(value, 'BRL')}</span>
            <input className="w-full accent-purple-600" type="range" min="0" max="300" /*value={value} onChange={handleChange}*/ />
            <div className="-mt-2 flex w-full justify-between">
                <span className="text-sm text-gray-600">0</span>
                <span className="text-sm text-gray-600">300</span>
            </div>
            {console.log(value)}
        </div>
    )
}