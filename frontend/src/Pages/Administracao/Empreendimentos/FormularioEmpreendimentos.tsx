import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import http from "../../../components/http"
import IEmpreendimento from "../../../components/Interface/IEmpreendimento"
import { atualizarEmpreendimento, criarEmpreendimento } from "../../../services/empreendimentos/rotasEmpreendimentos"

const FormularioEmpreendimentos = () => {

    const [nomeEmpreendimento, setNomeEmpreendimento] = useState('');
    const [localizacaoEmpreendimento, setLocalizacaoEmpreendimento] = useState('');
    const [tamanhoEmpreendimento, setTamanhoEmpreendimento] = useState<number>(0);
    const [precoEmpreendimento, setPrecoEmpreendimento] = useState<number>(0);

    const parametros = useParams<{id?: string}>()
    useEffect(() => {
        if (parametros.id) {
            http.get<IEmpreendimento>(`empreendimentos/${parametros.id}`)
                .then(resposta => {
                    setNomeEmpreendimento(resposta.data.titulo);
                    setLocalizacaoEmpreendimento(resposta.data.localizacao);
                    setTamanhoEmpreendimento(resposta.data.tamanho);
                    setPrecoEmpreendimento(resposta.data.preco);
                })
                .catch((e) => alert(`erro ao requisitar: ${e}`));
        }
    }, [parametros]);

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const novoEmpreendimento = {
            titulo: nomeEmpreendimento,
            localizacao: localizacaoEmpreendimento,
            tamanho: tamanhoEmpreendimento,
            preco: precoEmpreendimento,
        };
        try {
            if (parametros.id) {
                const updateEmpreendimento = {...novoEmpreendimento, _id: parametros.id}
                 atualizarEmpreendimento(parametros.id, updateEmpreendimento);
                alert('Empreendimento atualizado com sucesso!');
            } else {
                 criarEmpreendimento(novoEmpreendimento);
                alert('Empreendimento cadastrado com sucesso!');
            }
        }catch (error) {
            console.error('Erro ao salvar empreendimento:', error);
            alert('Erro ao salvar empreendimento');
        }


    }

    return (
        <>
            <Box>
                <Container maxWidth='lg' sx={{ mt: 1 }}>
                    <Paper sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column', alignItems: 'center' }}>
                            <Typography component='h1' variant='h6'>
                                Formulário Empreendimentos
                            </Typography>
                            <Box component='form' sx={{ width: '100%' }} onSubmit={aoSubmeterForm}>
                                <TextField
                                    value={nomeEmpreendimento}
                                    onChange={(evento) => setNomeEmpreendimento(evento.target.value)}
                                    label='Nome do Empreendimento'
                                    variant="standard"
                                    fullWidth
                                    required
                                />
                                <TextField
                                    value={localizacaoEmpreendimento}
                                    onChange={(evento) => setLocalizacaoEmpreendimento(evento.target.value)}
                                    label='Localização'
                                    variant="standard"
                                    fullWidth
                                    required
                                />
                                <TextField
                                    value={tamanhoEmpreendimento}
                                    onChange={(evento) => setTamanhoEmpreendimento(Number(evento.target.value))}
                                    label='Tamanho (m²)'
                                    variant="standard"
                                    fullWidth
                                    required
                                    type="number"
                                />
                                <TextField
                                    value={precoEmpreendimento}
                                    onChange={(evento) => setPrecoEmpreendimento(Number(evento.target.value))}
                                    label='Preço'
                                    variant="standard"
                                    fullWidth
                                    required
                                    type="number"
                                />
                                <Button sx={{ marginTop: 1 }} type="submit" variant="outlined" fullWidth>
                                    Salvar
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    )
}

export default FormularioEmpreendimentos