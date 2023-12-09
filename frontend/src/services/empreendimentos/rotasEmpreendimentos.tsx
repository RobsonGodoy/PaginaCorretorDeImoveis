import axios from 'axios';
import IEmpreendimento from '../../components/Interface/IEmpreendimento';

const API_URL = 'http://localhost:7000/empreendimentos';

export const carregarEmpreendimentos = async (setEmpreendimentos: React.Dispatch<React.SetStateAction<IEmpreendimento[]>>) => {
  try {
    const response = await axios.get<IEmpreendimento[]>(API_URL);
    setEmpreendimentos(response.data);
  } catch (error) {
    console.error('Erro ao carregar empreendimentos:', error);
  }
};
export const getEmpreendimentoPorId = async (empreendimentoId: string) => {
  try {
    const response = await axios.get<IEmpreendimento>(`${API_URL}/${empreendimentoId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter empreendimento por ID:', error);
    throw error;
  }
};

export const criarEmpreendimento = async (novoEmpreendimento: Omit<IEmpreendimento, '_id'>) => {
  try {
    const response = await axios.post<IEmpreendimento>(API_URL, novoEmpreendimento);
    alert('Criado com sucesso');
    return response.data;
  } catch (error) {
    alert('Erro ao criar empreendimento');
    console.error('Erro ao criar empreendimento:', error);
    throw error;
  }
};

export const atualizarEmpreendimento = async (empreendimentoId: string, empreendimentoAtualizado: IEmpreendimento) => {
  try {
    const response = await axios.put<IEmpreendimento>(`${API_URL}/${empreendimentoId}`, empreendimentoAtualizado);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar empreendimento:', error);
    throw error;
  }
};

export const excluirEmpreendimento = async (empreendimentoId: string) => {
  try {
    const response = await axios.delete<IEmpreendimento>(`${API_URL}/${empreendimentoId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao excluir empreendimento:', error);
    throw error;
  }
};
