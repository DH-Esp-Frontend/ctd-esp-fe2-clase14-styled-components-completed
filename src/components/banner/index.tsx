import React from "react";
import styled from "styled-components";

// styled-components
const Div = styled.div`
  padding: 124px 48px;
  background: url("wallpaper.png");
  background-repeat: no-repeat;
  background-position: center;
`;

const H1 = styled.h1`
  font-size: 32px;
  color: white;
`;

const P = styled.p`
  font-size: 16px;
  color: white;
  line-height: 160%;
`;

const Button = styled.button`
  margin-right: 32px;
  font-size: 18px;
  border-radius: 4px;
  border: none;
  padding: 12px 32px;
  background-color: ${({favorite}) => (favorite ? "yellow" : "purple")};
  color: ${(props) => (props.favorite ? "black" : "white")};
  cursor: pointer;
`;

const Banner = () => {
  return (
    <Div>
      <H1>Rick and Morty</H1>
      <P>
          Rick and Morty es una serie animada para adultos de ciencia
          ficción y comedia estadounidense creada por Justin Roiland y
          Dan Harmon para el bloque de programación nocturna Adult Swim,
          transmitido en el canal Cartoon Network.
      </P>
      <Button>Ver el trailer</Button>
      <Button favorite>Guardar en favoritos</Button>
    </Div>
  );
};

export default Banner;
