export default function AddSubButton (){
    return(
        <div className="flex flex-row border-0 bg-slate-400 rounded-full justify-around w-20 lg:w-36 px-3 items-center">
            <button className="text-base font-medium lg:text-xl hover:text-purple-700">-</button>
            <span className="text-base font-medium lg:text-lg">1</span>
            <button className="text-base font-medium lg:text-xl hover:text-purple-700">+</button>
        </div>
    )
}