import ItemBox from "../components/item-box";

export default function ShoppingPage() {
    return (
        <div className="flex flex-row">
            <div className="basis-1/3 pl-[10%] md:pl-20 sm:pl-10 md:basis-1/4 sm:basis-1/5">
                <div className="flex flex-col  w-80 px-10 pt-5 border-solid border-2 border-slate-200 rounded-lg sm:w-auto">
                    <div className="h-60">
                        <h1 className="text-3xl font-bold md:text-xl sm:text-lg">Filtro</h1>
                        <div>
                            tipo de roupa
                        </div>
                        <hr className="w-[90%] h-px mx-auto bg-slate-200 border-0" />
                    </div>
                    <div className="h-32">
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
                    <div className="h-64">
                        <h1 className="text-3xl font-bold md:text-xl sm:text-lg">Tamanho</h1>
                        <div>
                            botoes de tamanhos
                        </div>
                        <hr className="w-[90%] h-px mx-auto bg-slate-200 border-0" />
                    </div>
                </div>
            </div>
            <div>
                <h1>Camisetas</h1>
                <div className="grid gap-8 sm:gap-2 grid-cols-3 p-3 mb-10 pr-[10%] md:pr-20 sm:pr-10">
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