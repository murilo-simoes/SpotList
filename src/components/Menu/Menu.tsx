import Image from "next/image";
import * as React from "react";
import logo from "../../../public/imgs/logo.png";

import { Container, Wrapper } from "./styled";

const Menu = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Image id="logo" src={logo} alt={"logo SpotList"} />
        </Wrapper>
      </Container>
    </>
  );
};

export default Menu;
