import React from 'react';

import * as S from './styles.js';

const Main = ({ characters }) => {
  return characters.map((character) => (
    <S.Container key={character.actor}>
      <S.Image src={character.image} alt="a" />
      <S.Name>{character.name}</S.Name>
      <S.Name>{character.house}</S.Name>
      <S.Age>{character.age}</S.Age>
    </S.Container>
  ));
};

export default Main;
