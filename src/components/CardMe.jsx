import React from "react";
import mePhoto from "../img/mePhoto.jpeg";
import { Habilidades } from "./Habilidades";
import Proyectos from "./Proyectos";
export const CardMe = () => {
  return (
    <div className="contenedor contenedor-2">
      <div className="card">
        <figure className="figura">
          <div>
            <img className="photo" src={mePhoto} alt="" />
          </div>
        </figure>
        <section className="principal">
          <h2>Hi Im Gerardo Itzcoatl</h2>

          <p className="texto">
            Hi I'm student of Software Engineering in Universidad Politecnica
            Pachuca Mexico I am 20 years I like learn things new ❤️
          </p>

          <div className="socials">
            <a
              className="socials"
              href="https://www.instagram.com/maldonadoitz/"
            >
              <img
                className="insta"
                src="https://img.shields.io/badge/Instagram--ff69b4?style=social&logo=instagram"
                alt="Instagram"
              />
            </a>

            <a
              className=""
              href="https://www.linkedin.com/in/gerardo-itzcoatl-maldonado-palacios-b92975205/"
            >
              <img
                src="https://img.shields.io/badge/LinkedIn--_.svg?style=social&logo=linkedin"
                alt="LinkedIn"
                className="insta"
              />
            </a>
          </div>
        </section>
        <section>
          <div>
            <h3 className="habilidades">Habilidades</h3>
            <Habilidades />
          </div>
          <div>
            <h3 className="habilidades">Proyectos</h3>
            <Proyectos />
          </div>
        </section>
      </div>
    </div>
  );
};
