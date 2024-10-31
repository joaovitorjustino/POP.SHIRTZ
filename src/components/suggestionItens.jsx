import ItemBox from "./itemBox"
import dbprodutos from "../mocks/db.json"

export default function SuggestionItens({ cols, gap, px }) {
    return (
        <div className={`grid sm:gap-2 p-3 mb-10  ${px} ${cols} ${gap}`}>
            {dbprodutos.produtos.map((produto) => {
                return <ItemBox {...produto} id={produto.id} imagem={produto.imagem} nome={produto.nome} preco={produto.preco} />
            })}
        </div>
    )
}