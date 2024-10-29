import email from "../assets/email.svg"

export default function NewsletterInput() {
    return (
        <div className='max-w-md w-screen'>
            <div className="relative flex items-center w-full h-12 rounded-full focus-within:shadow-lg bg-slate-100 overflow-hidden mb-3">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                    <img src={email} alt="email" />
                </div>

                <input
                    className="peer h-full w-full outline-none text-sm text-gray-700 bg-slate-100 pr-2"
                    type="text"
                    id="search"
                    placeholder="Cadastre o email.." />
            </div>
            <button className="relative flex justify-center items-center w-full h-12 rounded-full text-white bg-purple-600 overflow-hidden hover:bg-purple-700">
                Inscreva-se no Newsletter
            </button>
        </div>
    )
}