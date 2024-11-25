import dbProdutos from "../mocks/db.json"
import CheckBoxSize from '../components/checkboxSize';
import SuggestionItens from '../components/suggestionItens';
import TitleBody from '../components/titleBody';
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import AppContext from "../context/context";
import formatCurrency from "../utils/currency";

export default function ProductPage() {
    const { cartItems, setCartItems } = useContext(AppContext);

    const idProduto = useParams()
    const produtoAtual = dbProdutos.produtos.filter((produto) => produto.id === idProduto.id);

    const addToCart = () => {
        setCartItems([...cartItems, produtoAtual[0]])
        console.log(cartItems[0].nome)
    }

    return (
        <>
            <div className='mx-auto flex flex-col-2 justify-between px-40 pb-14'>
                <div className='flex flex-col-2 py-3 w-1/2'>
                    <div className='flex flex-col w-40 gap-3 pr-3'>
                        <img src={produtoAtual[0].imagem} />
                        <img src={produtoAtual[0].imagem} />
                        <img src={produtoAtual[0].imagem} />
                    </div>
                    <div className='flex w-[520px]'>
                        <img src={produtoAtual[0].imagem} />
                    </div>
                </div>
                <div div className="w-1/2 p-4 pr-20">
                    <h1 className="text-5xl font-bold pb-8">{produtoAtual[0].nome}</h1>
                    <div className="flex">
                        <div className='max-w-max'>
                            <h2 className="font-thin text-xl text-wrap mb-5">{produtoAtual[0].descricao}</h2>
                            <h2 className="font-bold text-2xl mb-5">{formatCurrency(produtoAtual[0].preco, 'BRL')}</h2>
                            <hr className="w-3/4 h-px mx-auto bg-purple-400 border-0 mb-5" />
                            <div className='flex flex-col items-center mx-auto mb-5'>
                                <CheckBoxSize />
                                <hr className="w-3/4 h-px mx-auto bg-purple-400 border-0 mb-5" />
                                <div className='flex flex-col-2 w-full gap-4'>
                                    <button onClick={addToCart} className="relative flex justify-center w-full items-center h-10 rounded-full text-white bg-purple-600 overflow-hidden hover:bg-purple-700">
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="w-3/4 h-px mx-auto bg-purple-400 border-0 mb-5" />
            <TitleBody size={'text-6xl'} position={'justify-center'}>YOU MIGHT LIKE</TitleBody>
            <SuggestionItens cols={'grid-cols-4'} gap={'gap-8'} px={'px-[10%]'} />
        </>
    )
}