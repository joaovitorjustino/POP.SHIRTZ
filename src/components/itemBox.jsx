import { Link } from "react-router-dom"
import camiseta from "../mocks/camiseta1.svg"

export default function ItemBox() {
    return (
        <Link to={"/product/:id"}>
            <div id={1}>
                <img src={camiseta} />
                <h3 className="text-1 font-bold pt-4 text-left mb-2">Camiseta Basica</h3>
                <h3 className="text-2 font-bold text-left pb-4">R$ 79,00</h3>
            </div>
        </Link>
    )
}