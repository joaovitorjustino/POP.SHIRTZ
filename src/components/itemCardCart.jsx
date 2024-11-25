import trash from "../assets/trash.svg"
import { useContext } from "react";
import AppContext from "../context/context";
import formatCurrency from "../utils/currency";

export default function ItemCardCart({ id, imagem, nome, preco }) {
    const { cartItems, setCartItems } = useContext(AppContext);
    
    const handleRemoveItem = () => {
        const updatedItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedItems)
    }

    return(
        <div className="flex flex-row">
            <img src={imagem} className="w-40 px-6 py-3" />
            <div className="w-full px-3">
                <h3 className="text-base font-bold pt-4 text-left mb-4">{nome}</h3>
                <h3 className="text-sm font-bold text-left pb-4">{formatCurrency(preco, 'BRL')}</h3>
                <div className="flex flex-row-reverse gap-3">
                    <button onClick={handleRemoveItem}><img src={trash}/></button>
                </div>
            </div>
        </div>
    )
}