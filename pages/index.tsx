import styled from '@emotion/styled';
import type { NextPage } from 'next';
import React from 'react';
import { H1 } from '../components/Typography';
import { UserList } from '../components/UserList';
import { isServer } from '../utils/consts';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 32px;
  gap: 32px;
`;

const Home: NextPage = () => {
  const filler = [];
  for (let i = 0; i < 100; i++) {
    filler.push(<div key={i}>{i}</div>);
  }
  return (
    <Main>
      <H1>User management</H1>
      {!isServer && <UserList />}
      {filler}
    </Main>
  );
};

export default Home;
