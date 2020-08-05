import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/53064737?s=460&u=e3634e360a72af38e13d8989c98eaf3ba82f9ff3&v=4"
          alt="Gabriel Decilio"
        />
        <div>
          <strong>Gabriel Decilio</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Seila Teste
        <br />
        teste dois
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
