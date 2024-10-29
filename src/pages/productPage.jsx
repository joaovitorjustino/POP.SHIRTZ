import { useParams } from 'react-router-dom';
import camiseta from "../mocks/camiseta1.svg"
import CheckBoxSize from '../components/checkboxSize';
import AddSubButton from '../components/addSubButton';
import NewsletterInput from '../components/inputNewslatter';
import SuggestionItens from '../components/suggestionItens';
import TitleBody from '../components/titleBody';

export default function ProductPage() {
    const { id } = useParams();
    return (
        <>
            <div className='mx-auto flex flex-col-2 justify-between px-40 pb-14'>
                <div className='flex flex-col-2 py-3 w-1/2'>
                    <div className='flex flex-col w-40 gap-3 pr-3'>
                        <img src={camiseta} />
                        <img src={camiseta} />
                        <img src={camiseta} />
                    </div>
                    <div className='flex w-[520px]'>
                        <img src={camiseta} />
                    </div>
                </div>
                <div div className="w-1/2 p-4 pr-20">
                    <h1 className="text-5xl font-bold pb-8">NEW RULES TEES</h1>
                    <div className="flex">
                        <div className='max-w-max'>
                            <h2 className="font-thin text-xl text-wrap mb-5">Brand new tees by the new age classic brand new rules. Clean and classy.</h2>
                            <h2 className="font-bold text-2xl mb-5">R$79,00</h2>
                            <hr class="w-3/4 h-px mx-auto bg-purple-400 border-0 mb-5" />
                            <div className='flex flex-col items-center mx-auto mb-5'>
                                <CheckBoxSize />
                                <hr class="w-3/4 h-px mx-auto bg-purple-400 border-0 mb-5" />
                                <div className='flex flex-col-2 w-full gap-4'>
                                    <AddSubButton />
                                    <button className="relative flex justify-center w-full items-center h-10 rounded-full text-white bg-purple-600 overflow-hidden hover:bg-purple-700">
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
            <SuggestionItens />
        </>
    )
}