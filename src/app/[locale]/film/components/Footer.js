import style from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <div>
        <h3>Victor Merseguel © {year}</h3>
      </div>
      <div>
        <p>Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
