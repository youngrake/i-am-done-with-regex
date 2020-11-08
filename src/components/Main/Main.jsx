import React from 'react';

import { RegexCard } from 'components';
import { useStore } from 'utils';

import * as Styled from './styled';

const Main = () => {
  const { entries, loading } = useStore();

  if (loading) return <div>Loading</div>;

  return (
    <Styled.Container>
      <Styled.MenuBar />
      <Styled.RegexCardsContainer>
        {entries.map(entry => (
          <RegexCard key={entry.id} {...entry} />
        ))}
      </Styled.RegexCardsContainer>
    </Styled.Container>
  );
};

export default Main;
