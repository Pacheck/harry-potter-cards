import React from "react";
import CardItem from "../card/index.jsx";

import * as S from "./styles.js";

const Main = ({ characters }) => (
  <S.Container>
    {characters.map(
      (char, index) => index < 24 && <CardItem character={char} />
    )}
  </S.Container>
);

export default Main;
