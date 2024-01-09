// routes/empreendimentos.ts
import { Router } from 'express';
import Empreendimento from '../models/empreendimentoModel';

const router = Router();

// Rota para obter todos os empreendimentos
router.get('/', async (req, res) => {
  try {
    const empreendimentos = await Empreendimento.find();
    res.json(empreendimentos);
  } catch (error) {
    console.error('Erro ao buscar empreendimentos:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});
// Rota para obter um empreendimento pelo ID
router.get('/:id', async (req, res) => {
  try {
    const empreendimento = await Empreendimento.findById(req.params.id);

    if (!empreendimento) {
      return res.status(404).json({ error: 'Empreendimento não encontrado' });
    }

    res.json(empreendimento);
  } catch (error) {
    console.error('Erro ao obter empreendimento por ID:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para adicionar um novo empreendimento
router.post('/', async (req, res) => {
  const { titulo, localizacao, tamanho, preco, photo } = req.body;

  try {
    const novoEmpreendimento = new Empreendimento({ titulo, localizacao, tamanho, preco, photo });
    await novoEmpreendimento.save();
    res.json(novoEmpreendimento);
  } catch (error) {
    console.error('Erro ao adicionar empreendimento:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para atualizar um empreendimento pelo ID
router.put('/:id', async (req, res) => {
  const { titulo, localizacao, tamanho, preco, photo } = req.body;

  try {
    const empreendimentoAtualizado = await Empreendimento.findByIdAndUpdate(
      req.params.id,
      { titulo, localizacao, tamanho, preco, photo },
      { new: true }
    );

    if (!empreendimentoAtualizado) {
      return res.status(404).json({ error: 'Empreendimento não encontrado' });
    }

    res.json(empreendimentoAtualizado);
  } catch (error) {
    console.error('Erro ao atualizar empreendimento:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para excluir um empreendimento pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const empreendimentoExcluido = await Empreendimento.findByIdAndDelete(req.params.id);

    if (!empreendimentoExcluido) {
      return res.status(404).json({ error: 'Empreendimento não encontrado' });
    }

    res.json({ message: 'Empreendimento excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir empreendimento:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;