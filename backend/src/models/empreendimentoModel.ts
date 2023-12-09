import mongoose, { Schema, Document } from 'mongoose';

export interface IEmpreendimento extends Document {
  titulo: string;
  localizacao: string;
  tamanho: number;
  preco: number;
}

const empreendimentoSchema: Schema = new Schema({
  titulo: { type: String, required: true },
  localizacao: { type: String, required: true },
  tamanho: { type: Number, required: true },
  preco: { type: Number, required: true },
});

const Empreendimento = mongoose.model<IEmpreendimento>('Empreendimento', empreendimentoSchema);

export default Empreendimento;