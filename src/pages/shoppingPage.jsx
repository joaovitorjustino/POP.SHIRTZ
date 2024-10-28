import ItemBox from "../components/itemBox";

export default function ShoppingPage() {
    return (
        <div className="flex flex-row px-[10%] gap-4">
            <div className="flex flex-initial basis-1/3 md:basis-1/4 sm:basis-1/5">
                <div className="flex flex-col w-auto h-max px-10 pt-5 border-solid border-2 border-slate-200 rounded-lg">
                    <div className="h-max">
                        <h1 className="text-3xl font-bold md:text-xl sm:text-lg">Filtro</h1>
                        <div className="flex flex-wrap justify-start gap-1 pb-4">
                            <div>
                                <input type="checkbox" id="camiseta" value="" className="hidden peer" required="" />
                                <label for="camiseta" className="inline-flex items-center justify-center p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">Camisetas</div>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" id="camisas" value="" className="hidden peer" required="" />
                                <label for="camisas" className="inline-flex items-center justify-center p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">Camisas</div>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" id="blusas" value="" className="hidden peer" required="" />
                                <label for="blusas" className="inline-flex items-center justify-center p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">Blusas</div>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" id="calcas" value="" className="hidden peer" required="" />
                                <label for="calcas" className="inline-flex items-center justify-center p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">Calças</div>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" id="assesorios" value="" className="hidden peer" required="" />
                                <label for="assesorios" className="inline-flex items-center justify-center p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">Assesorios</div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <hr className="w-[90%] h-px mx-auto bg-slate-200 border-0" />
                    </div>
                    <div className="h-max">
                        <h1 className="text-3xl font-bold md:text-xl sm:text-lg">Preço</h1>
                        <div>
                            <div className="price-range p-4">
                                <span className="text-sm">R$</span>
                                <span className="text-sm">300</span>
                                <input className="w-full accent-purple-600" type="range" min="50" max="300" />
                                <div className="-mt-2 flex w-full justify-between">
                                    <span className="text-sm text-gray-600">0</span>
                                    <span className="text-sm text-gray-600">300</span>
                                </div>
                            </div>
                        </div>
                        <hr className="w-[90%] h-px mx-auto bg-slate-200 border-0" />
                    </div>
                    <div className="h-max">
                        <h1 className="text-3xl font-bold md:text-xl sm:text-lg">Tamanho</h1>
                        <div className="flex flex-wrap justify-start gap-1 pb-4">
                            <div>
                                <input type="checkbox" id="tamanhoP" value="" className="hidden peer" required="" />
                                <label for="tamanhoP" className="inline-flex items-center justify-center w-11 p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">P</div>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" id="tamanhoM" value="" className="hidden peer" required="" />
                                <label for="tamanhoM" className="inline-flex items-center justify-center w-11 p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">M</div>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" id="tamanhoG" value="" className="hidden peer" required="" />
                                <label for="tamanhoG" className="inline-flex items-center justify-center w-11 p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">G</div>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" id="tamanhoGG" value="" className="hidden peer" required="" />
                                <label for="tamanhoGG" className="inline-flex items-center justify-center w-11 p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">GG</div>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" id="tamanhoG1" value="" className="hidden peer" required="" />
                                <label for="tamanhoG1" className="inline-flex items-center justify-center w-11 p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">G1</div>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" id="tamanhoG2" value="" className="hidden peer" required="" />
                                <label for="tamanhoG2" className="inline-flex items-center justify-center w-11 p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">G2</div>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" id="tamanhoG3" value="" className="hidden peer" required="" />
                                <label for="tamanhoG3" className="inline-flex items-center justify-center w-11 p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">G3</div>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" id="tamanhoG4" value="" className="hidden peer" required="" />
                                <label for="tamanhoG4" className="inline-flex items-center justify-center w-11 p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-violet-500 peer-checked:border-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:font-semibold peer-checked:decoration-brand-dark decoration-2">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">G4</div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="grid gap-4 grid-cols-3 p-3 mb-10">
                    <ItemBox />
                    <ItemBox />
                    <ItemBox />
                    <ItemBox />
                    <ItemBox />
                    <ItemBox />
                    <ItemBox />
                    <ItemBox />
                    <ItemBox />
                    <ItemBox />
                </div>
            </div>
        </div>
    )
}