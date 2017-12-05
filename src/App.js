import React from 'react';
import Observer from 'react-intersection-observer'
import styles from './root.css';
import { Wrapper } from './styled';
import TopHeader from './components/top/TopHeader';

const App = () =>

  (<Wrapper>
    <Observer>
      <TopHeader />
    </Observer>
  </Wrapper>);

export default App;
Ą
