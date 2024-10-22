import ItemCardCart from "../components/itemCardCart"
import TitleBody from "../components/title-body"

export default function Cart() {
    return (
        <div>
            <TitleBody size={'text-2xl'} position={'justify-between py-4 pl-[15%]'}>SEU CARRINHO</TitleBody>
            <div className="flex flex-row gap-6 justify-evenly px-8 pb-14 max-w-6xl mx-auto items-start">
                <div className="border w-3/5 divide-y rounded-lg">
                    <ItemCardCart />
                    <ItemCardCart />
                </div>
                <div div className="border w-2/5 p-4 rounded-lg">
                    <h3 className="text-base font-bold">Valor Total:</h3>
                    <div className="flex flex-row justify-between">
                        <div>
                            <h2 className="font-thin">Subtotal: </h2>
                            <h2 className="font-thin">Desconto: </h2>
                            <h2 className="font-thin">Taxa de entrega: </h2>
                        </div>
                        <div className="text-end">
                            <h2 className="font-thin">R$ 100,00</h2>
                            <h2 className="font-thin">R$ 00,00</h2>
                            <h2 className="font-thin">R$ 100,00</h2>
                        </div>
                    </div>
                    <hr className="w-[90%] h-px mx-auto bg-slate-200 border-0 my-6" />
                    <div className="flex flex-row justify-between">
                        <div>
                            <h3 className="text-base font-bold">Subtotal: </h3>
                        </div>
                        <div className="text-end">
                            <h3 className="font-bold">R$ 100,00</h3>
                            <button className="flex flex-col-reverse justify-center justify-items-end items-center w-32 h-12 rounded-full text-white bg-purple-600 overflow-hidden hover:bg-purple-700 mt-4">
                                Finalizar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}