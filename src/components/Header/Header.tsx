import * as React from "react";
import { Container, Wrapper, ItensContainer } from "./styled";

const Header = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <ItensContainer>
            <div>
              <h1 className="titulo">
                Descubra quais artistas não sairam do seu ouvido!!!
              </h1>
              <p className="texto">
                Com uma lista que mostra quais artistas você mais escutou nas
                últimas 4 semanas.
              </p>
            </div>
            <div>
              <button className="button">Descobrir</button>
            </div>
          </ItensContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default Header;
