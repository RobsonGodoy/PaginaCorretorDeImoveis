import { AppBar, Box, Button, Container, Link, Paper, Toolbar, Typography } from "@mui/material";
import { Outlet, Link as RouterLink } from 'react-router-dom';

const PaginaBaseAdmin = () => {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth='xl'>
                    <Toolbar>
                        <Typography>
                            Administração
                        </Typography>
                        <Box sx={{ display: 'flex', flexGrow: 1 }}>
                            <Link component={RouterLink} to='/admin/empreendimentos'>
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Empreendimentos
                                </Button>
                            </Link>
                            <Link component={RouterLink} to='/admin/empreendimentos/novo'>
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Novo Empreendimento
                                </Button>
                            </Link>
                            <Link component={RouterLink} to='/admin/lotes'>
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Lotes
                                </Button>
                            </Link>
                            <Link component={RouterLink} to='/admin/lotes/novo'>
                                <Button sx={{ my: 2, color: 'white' }}>
                                    Novo Lote
                                </Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box>
                <Container maxWidth='lg' sx={{ mt: 1 }}>
                    <Paper>
                        <Outlet />
                    </Paper>
                </Container>
            </Box>
        </>
    )
}

export default PaginaBaseAdmin;