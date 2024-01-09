import IEmpreendimento from "../../Interface/IEmpreendimento"
import './Empreendimento.css'

interface EmpreendimentoPros {
    empreendimento: IEmpreendimento
}

const Empreendimento = ({ empreendimento }: EmpreendimentoPros) => {
    return (
        <div className="Empreendimento">
            <div>
                {empreendimento.photo && (
                    <img
                        src={empreendimento.photo}
                        alt={empreendimento.titulo}
                        className="EmpreendimentoFoto"
                    />
                )}
            </div>
            <div className="EmpreendimentoDescricao">
                <h2>{empreendimento.titulo}</h2>
                <h5>{empreendimento.localizacao}</h5>
                <h5>Tamanho: {empreendimento.tamanho}m²</h5>
                <h4>Preço: R${empreendimento.preco},00</h4>
            </div>
        </div>
    )

}

export default Empreendimento;