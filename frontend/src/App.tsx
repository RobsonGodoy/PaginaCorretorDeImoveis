import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import HomePage from "./Pages/Home/Home"
import VitrineEmpreendimentos from "./Pages/VitrineEmpreendimentos/VitrineEmpreendimentos"
import PaginaBaseAdmin from "./Pages/Administracao/Empreendimentos/PaginaBaseAdmin"
import AdministracaoEmpreendimentos from "./Pages/Administracao/Empreendimentos/AdministracaoEmpreendimentos"
import FormularioEmpreendimentos from "./Pages/Administracao/Empreendimentos/FormularioEmpreendimentos"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/empreendimentos" element={<VitrineEmpreendimentos />} />

        <Route path='/admin/' element={<PaginaBaseAdmin />}>
          <Route path='empreendimentos' element={<AdministracaoEmpreendimentos />} />
          <Route path='empreendimentos/novo' element={<FormularioEmpreendimentos />} />
          <Route path='empreendimentos/:id' element={<FormularioEmpreendimentos />} />

        </Route>
      </Routes>
    </Router>
  )
}

export default App
