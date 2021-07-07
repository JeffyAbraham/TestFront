import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer data-testid='homepage' >
    <Directory />
  </HomePageContainer>
);

export default HomePage;
