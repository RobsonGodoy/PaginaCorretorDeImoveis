import express from 'express';
import { main } from './config/db/conn';
import cors from 'cors';

const rotaempreendimento = require('./routes/empreendimentos');
const app = express();
const PORTA = 7000;

// Configurações e middlewares
app.use(cors());
app.use(express.json());
app.use('/empreendimentos', rotaempreendimento);

// Iniciar conexão com o banco de dados
main();

// Iniciar o servidor
app.listen(PORTA, () => {
  console.log(`Servidor: SOBRAL.API rodando na porta ${PORTA}`);
});
// Conexão DB
/*(async () => {
    try {
      await main();
      // Inicie o servidor
      app.listen(PORTA, () => {
        console.log(`Servidor: SOBRAL.API rodando na porta ${PORTA}`);
      });
    } catch (error) {
      console.log(`Erro de conexão com o banco de dados: ${error}`);
    }
  })();*/