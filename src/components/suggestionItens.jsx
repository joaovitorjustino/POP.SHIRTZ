import ItemBox from "./itemBox"

export default function SuggestionItens(){
    return(
        <div className="grid gap-8 sm:gap-2 grid-cols-4 p-3 mb-10 px-[10%]">
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
    </div>
    )
}