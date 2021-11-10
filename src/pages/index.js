import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Main from '../components/main';
import Header from '../components/header';
import Footer from '../components/footer';

import GlobalStyle from '../styles/globalStyle';

const api = 'http://hp-api.herokuapp.com/api/characters';
// styles
const Index = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(api).then((res) => {
      console.log(res.data);
      setCharacters(res.data);
    });
  }, []);
  return (
    <>
      <Header />
      <Main characters={characters} />
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default Index;
