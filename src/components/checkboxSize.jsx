import { useState } from "react";

export default function CheckBoxSize() {
    const [checkedInfo, setCheckedInfo] = useState([]);

    const handleChangeSize = (e) => {
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
                <input type="checkbox" id="tamanhoP" value="P" className="hidden peer" required="" onChange={handleChangeSize} />
                <label for="tamanhoP" className="inline-flex items-center justify-center w-11 p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                    <div className="block">
                        <div className="w-full text-lg font-semibold">P</div>
                    </div>
                </label>
            </div>
            <div>
                <input type="checkbox" id="tamanhoM" value="M" className="hidden peer" required="" onChange={handleChangeSize} />
                <label for="tamanhoM" className="inline-flex items-center justify-center w-11 p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                    <div className="block">
                        <div className="w-full text-lg font-semibold">M</div>
                    </div>
                </label>
            </div>
            <div>
                <input type="checkbox" id="tamanhoG" value="G" className="hidden peer" required="" onChange={handleChangeSize} />
                <label for="tamanhoG" className="inline-flex items-center justify-center w-11 p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                    <div className="block">
                        <div className="w-full text-lg font-semibold">G</div>
                    </div>
                </label>
            </div>
            <div>
                <input type="checkbox" id="tamanhoGG" value="GG" className="hidden peer" required="" onChange={handleChangeSize} />
                <label for="tamanhoGG" className="inline-flex items-center justify-center w-11 p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                    <div className="block">
                        <div className="w-full text-lg font-semibold">GG</div>
                    </div>
                </label>
            </div>
            <div>
                <input type="checkbox" id="tamanhoG1" value="G1" className="hidden peer" required="" onChange={handleChangeSize} />
                <label for="tamanhoG1" className="inline-flex items-center justify-center w-11 p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                    <div className="block">
                        <div className="w-full text-lg font-semibold">G1</div>
                    </div>
                </label>
            </div>
            <div>
                <input type="checkbox" id="tamanhoG2" value="G2" className="hidden peer" required="" onChange={handleChangeSize} />
                <label for="tamanhoG2" className="inline-flex items-center justify-center w-11 p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                    <div className="block">
                        <div className="w-full text-lg font-semibold">G2</div>
                    </div>
                </label>
            </div>
            <div>
                <input type="checkbox" id="tamanhoG3" value="G3" className="hidden peer" required="" onChange={handleChangeSize} />
                <label for="tamanhoG3" className="inline-flex items-center justify-center w-11 p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                    <div className="block">
                        <div className="w-full text-lg font-semibold">G3</div>
                    </div>
                </label>
            </div>
            <div>
                <input type="checkbox" id="tamanhoG4" value="G4" className="hidden peer" required="" onChange={handleChangeSize} />
                <label for="tamanhoG4" className="inline-flex items-center justify-center w-11 p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                    <div className="block">
                        <div className="w-full text-lg font-semibold">G4</div>
                    </div>
                </label>
            </div>
        </div>
    )
}