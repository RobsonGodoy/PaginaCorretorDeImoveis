import './header.css';
import logo from '../images/RSLogo.png';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='Header'>
            <img src={logo} alt="Logotipo" id='logotipoHeader' />
            <div className='Hcontato'>
                <div className='Hcel'>
                    <Link to="#" target='_blanck'>WhatsApp</Link>
                </div>
                <div className='Hoption'>
                    <Link to="/">Home</Link>
                    <Link to="/empreendimentos">Empreendimentos</Link>
                    <Link to="/admin">Contato</Link>
                </div>
            </div>
        </div>
    )
}

export default Header