import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import './AdministraçaoEmpreendimentos.css';
import { useEffect, useState } from "react";
import { carregarEmpreendimentos, excluirEmpreendimento } from "../../../services/empreendimentos/rotasEmpreendimentos";
import IEmpreendimento from "../../../components/Interface/IEmpreendimento";

const AdministracaoEmpreendimentos = () => {
    const [empreendimentos, setEmpreendimentos] = useState<IEmpreendimento[]>([]);

    useEffect(() => {
        carregarEmpreendimentos(setEmpreendimentos);
    }, []);

    const handleExcluirEmpreendimento = async (empreendimentoId: string) => {
        try {
            await excluirEmpreendimento(empreendimentoId);
            // Atualizar a lista de empreendimentos após a exclusão
            carregarEmpreendimentos(setEmpreendimentos);
            alert('Empreendimento excluído com sucesso!');
        } catch (error) {
            console.error('Erro ao excluir empreendimento:', error);
            alert('Erro ao excluir empreendimento');
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>
                            Empreendimento
                        </TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >
                            Tamanho
                        </TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >
                            Preço
                        </TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} >
                            Editar
                        </TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {empreendimentos.map(empreendimentos =>
                        <TableRow key={empreendimentos._id}>
                            <TableCell>
                                {empreendimentos.titulo}
                            </TableCell>
                            <TableCell>
                                {empreendimentos.tamanho} M²
                            </TableCell>
                            <TableCell>
                                R${empreendimentos.preco},00
                            </TableCell>
                            <TableCell>
                                [<Link className="AdminLink" to={`/admin/empreendimentos/${empreendimentos._id}`}>Editar</Link>]
                            </TableCell>
                            <TableCell>
                                <Button 
                                variant="outlined"
                                 color="error"
                                 onClick={() => handleExcluirEmpreendimento(empreendimentos._id)} >
                                    Excluir
                                </Button>
                            </TableCell>
                        </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdministracaoEmpreendimentos;