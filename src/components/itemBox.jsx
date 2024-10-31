import { Link } from "react-router-dom"

export default function ItemBox({ id, imagem, nome, preco }) {
    return (
        <Link to={`/product/${id}`}>
            < div id={id}>
                <img src={imagem} />
                <h3 className="text-1 font-bold pt-4 text-left mb-2">{nome}</h3>
                <h3 className="text-2 font-bold text-left pb-4">R$ {preco}</h3>
            </div>
        </Link >
    )
}