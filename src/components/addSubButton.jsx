export default function AddSubButton (){
    return(
        <div className="flex flex-row border-0 bg-slate-400 rounded-full justify-around w-20 px-3">
            <button className="text-base font-medium hover:text-purple-700">-</button>
            <span className="text-base font-medium">1</span>
            <button className="text-base font-medium hover:text-purple-700">+</button>
        </div>
    )
}