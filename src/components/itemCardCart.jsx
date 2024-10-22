import camiseta from "../mocks/camiseta1.svg"
import AddSubButton from "./addSubButton"
import trash from "../assets/trash.svg"

export default function ItemCardCart() {
    return(
        <div className="flex flex-row">
            <img src={camiseta} className="w-40 px-6 py-3" />
            <div className="w-full px-3">
                <h3 className="text-base font-bold pt-4 text-left mb-4">Camiseta Basica</h3>
                <h3 className="text-sm font-bold text-left pb-4">R$ 79,00</h3>
                <div className="flex flex-row-reverse gap-3">
                    <button><img src={trash}/></button>
                    <AddSubButton />
                </div>
            </div>
        </div>
    )
}