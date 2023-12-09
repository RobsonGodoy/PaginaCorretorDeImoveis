import { useState, useEffect } from 'react';
import Empreendimento from '../../components/ListaEmpreendimentos/Empreendimento';
import Header from '../../components/header/header';
import './VitrineEmpreendimentos.css';
import IEmpreendimento from '../../components/Interface/IEmpreendimento';
import { carregarEmpreendimentos } from '../../services/empreendimentos/rotasEmpreendimentos';
import Footer from '../../components/footer/footer';

function VitrineEmpreendimentos() {
    const [empreendimentos, setEmpreendimentos] = useState<IEmpreendimento[]>([]);

    useEffect(() => {
        carregarEmpreendimentos(setEmpreendimentos);
    }, []);

    return (
        <>
            <Header />
            <h1 className="TituloEmpreendimento">Os melhores empreendimentos para te atender</h1>
            <div className="SectionEmpreendimento">
                {empreendimentos.map((item) => (
                    <Empreendimento empreendimento={item} key={item._id} />
                ))}
            </div>
            <Footer />
        </>
    );
}

export default VitrineEmpreendimentos;


/*import Empreendimento from "../../components/ListaEmpreendimentos/Empreendimento"
import Header from "../../components/header/header"
import empreendimentos from '../../empreendimentos.json'
import './VitrineEmpreendimentos.css'

function VitrineEmpreendimentos() {
    return (
        <>
            <Header />
            <h1 className="TituloEmpreendimento">Os melhores empreendimentos para te atender </h1>
            <div className="SectionEmpreendimento">{empreendimentos.map(item => <Empreendimento empreendimento={item} key={item.id} />)}</div>
        </>
    )
}

export default VitrineEmpreendimentos*/