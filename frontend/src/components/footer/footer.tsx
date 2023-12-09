import './footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Fcontato">
        <div className="Fcel">
          <a href="#" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
        <div className="Foption">
          <a href="/">Home</a>
          <a href="/empreendimentos">Empreendimentos</a>
          <a href="/admin">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
