import { useState } from "react";

export default function CheckBoxType() {
    const [checkedInfo, setCheckedInfo] = useState([]);

    const handleChangeType = (e) => {
        const { value, checked } = e.target;
        console.log(value, checked)
        if (checked) {
            setCheckedInfo([...checkedInfo, value])
        } else {
            setCheckedInfo(checkedInfo.filter((e) => e !== value))
        }
        console.log(checkedInfo)
    }

    return (
        <div className="flex flex-wrap justify-start gap-1 pb-4">
            <div>
                <input type="checkbox" id="camiseta" value="Camisetas" className="hidden peer" required="" onChange={handleChangeType} />
                <label for="camiseta" className="inline-flex items-center justify-center p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                    <div className="block">
                        <div className="w-full text-lg font-semibold">Camisetas</div>
                    </div>
                </label>
            </div>
            <div>
                <input type="checkbox" id="camisas" value="Camisas" className="hidden peer" required="" onChange={handleChangeType} />
                <label for="camisas" className="inline-flex items-center justify-center p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                    <div className="block">
                        <div className="w-full text-lg font-semibold">Camisas</div>
                    </div>
                </label>
            </div>
            <div>
                <input type="checkbox" id="blusas" value="Blusas" className="hidden peer" required="" onChange={handleChangeType} />
                <label for="blusas" className="inline-flex items-center justify-center p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                    <div className="block">
                        <div className="w-full text-lg font-semibold">Blusas</div>
                    </div>
                </label>
            </div>
            <div>
                <input type="checkbox" id="calcas" value="Calças" className="hidden peer" required="" onChange={handleChangeType} />
                <label for="calcas" className="inline-flex items-center justify-center p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                    <div className="block">
                        <div className="w-full text-lg font-semibold">Calças</div>
                    </div>
                </label>
            </div>
            <div>
                <input type="checkbox" id="assesorios" value="Assesorios" className="hidden peer" required="" onChange={handleChangeType} />
                <label for="assesorios" className="inline-flex items-center justify-center p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                    <div className="block">
                        <div className="w-full text-lg font-semibold">Assesorios</div>
                    </div>
                </label>
            </div>
        </div>
    )
}