import CheckBoxSize from "../components/checkboxSize";
import CheckBoxType from "../components/checkboxType";
import SlideBar from "../components/slideBar";
import SuggestionItens from "../components/suggestionItens";

export default function ShoppingPage() {
    return (
        <div className="flex flex-row px-[10%] gap-4">
            <div className="flex flex-initial basis-1/3 md:basis-1/4 sm:basis-1/5">
                <div className="flex flex-col w-auto h-max px-10 pt-5 border-solid border-2 border-slate-200 rounded-lg">
                    <div className="h-max">
                        <h1 className="text-3xl font-bold md:text-xl sm:text-lg">Filtro</h1>
                        <div className="flex flex-wrap justify-start gap-1 pb-4">
                            <CheckBoxType />
                        </div>
                        <hr className="w-[90%] h-px mx-auto bg-slate-200 border-0" />
                    </div>
                    <div className="h-max">
                        <h1 className="text-3xl font-bold md:text-xl sm:text-lg">Preço</h1>
                        <div>
                            <SlideBar />
                        </div>
                        <hr className="w-[90%] h-px mx-auto bg-slate-200 border-0" />
                    </div>
                    <div className="h-max">
                        <h1 className="text-3xl font-bold md:text-xl sm:text-lg">Tamanho</h1>
                        <CheckBoxSize />
                    </div>
                </div>
            </div>
            <div>
                <SuggestionItens cols={'grid-cols-3'} gap={'gap-4'} px={''}/>
            </div>
        </div>
    )
}