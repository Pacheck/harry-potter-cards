import React from 'react';

import * as S from './styles.js';

const Main = ({ characters }) => {
  return characters.map((char) => {
    return <Card character={char} />;
  });
};

export default Main;
