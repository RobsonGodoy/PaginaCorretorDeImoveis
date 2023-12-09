import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();
const MONGO_URI = `mongodb+srv://${process.env.URL}`
export async function main() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(MONGO_URI);
        console.log('Conectado ao Banco de Dados!');
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}
