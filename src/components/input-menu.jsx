import lupa from "../assets/lupa.svg"

export default function InputMenu() {
    return (
        <div className='max-w-md w-screen'>
            <div className="relative flex items-center w-full h-12 rounded-full focus-within:shadow-lg bg-slate-100 overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                    <img src={lupa} alt="lupa" />
                </div>

                <input
                    className="peer h-full w-full outline-none text-sm text-gray-700 bg-slate-100 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search something.." />
            </div>
        </div>
    )
}