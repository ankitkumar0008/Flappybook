import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} <strong>Ankit Kumar</strong>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;