import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} eShop. Todos los derechos reservados.</p>
        <p className="footer-credit">
          Desarrollado con 💻 por <span>Miriam</span>
        </p>
      </div>
    </footer>
  );
};
