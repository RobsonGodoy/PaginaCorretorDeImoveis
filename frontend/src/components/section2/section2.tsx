import React, { useEffect, useState } from 'react';
import './section2.css';
import IEmpreendimento from '../Interface/IEmpreendimento';
import { carregarEmpreendimentos } from '../../services/empreendimentos/rotasEmpreendimentos';

function Section2() {
  const [opcao, setOpcao] = useState<string>('');
  const [empreendimentos, setEmpreendimentos] = useState<IEmpreendimento[]>([]);
  const [empreendimentoSelecionado, setEmpreendimentoSelecionado] = useState<IEmpreendimento | null>(null);

  useEffect(() => {
    carregarEmpreendimentos(setEmpreendimentos);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    setOpcao(selectedOption);

    // Encontrar o empreendimento correspondente ao título selecionado
    const selectedEmpreendimento = empreendimentos.find(emp => emp.titulo === selectedOption);
    setEmpreendimentoSelecionado(selectedEmpreendimento || null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Loteamento selecionado: ', empreendimentoSelecionado);
  };

  return (
    <form className='Sec02' onSubmit={handleSubmit}>
      <label htmlFor="opcao"> Selecione o empreendimento:</label>
      <select id='opcao' name='opcao' value={opcao} onChange={handleChange}>
        <option className='boxoption' value=''>Selecione uma opção</option>
        {empreendimentos.map(empreendimento =>
          <option key={empreendimento._id} value={empreendimento.titulo}>{empreendimento.titulo}</option>
        )}
      </select>

      {empreendimentoSelecionado && (
        <div>
          <ul className='loteamentos'>
            <li key={empreendimentoSelecionado._id}>{empreendimentoSelecionado.titulo}</li>
            <li>{empreendimentoSelecionado.localizacao}</li>
            <li>Tamanho: {empreendimentoSelecionado.tamanho}m²</li>
            <li>Preço: R${empreendimentoSelecionado.preco},00</li>
            {/* Adicione outras informações do empreendimento aqui, conforme necessário */}
          </ul>
        </div>
      )}
    </form>
  )
}

export default Section2;
