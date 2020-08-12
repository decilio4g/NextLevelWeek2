import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeaderIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";
import api from "../../services/api";

const Landing: FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    async function handleGetTotalConnections() {
      const response = await api.get("connections");
      setTotalConnections(response.data.total);
    }

    handleGetTotalConnections();
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={Logo} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          className="hero-image"
          src={landingImg}
          alt="Plataforma de estudos"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeaderIcon} alt="Coração Roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
