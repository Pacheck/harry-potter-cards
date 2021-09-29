import React from 'react';

import * as S  from './styles';
const CardItem = () => {
  return <Container>
       <S.Container key={character.actor}>
      <S.Image src={character.image} alt="a" />
      <S.Name>{character.name}</S.Name>
      <S.Name>{character.house}</S.Name>
      <S.Age>{character.age}</S.Age>
  </Container>;
};

export default CardItem;
