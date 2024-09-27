import camiseta from "../mocks/camiseta1.svg"

export default function ItemBox() {
    return (
        <button>
            <div>
                <img src={camiseta} />
                <h3 className="text-1 font-bold pt-4 text-left mb-2">Camiseta Basica</h3>
                <h3 className="text-2 font-bold text-left">R$ 79,00</h3>
            </div>
        </button>

    )
}