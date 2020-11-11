import React, { useEffect, useState } from 'react';

import useMergeState from 'utils/useFilterState';
import { fetchData } from 'utils';

import { RegexCard } from 'components';
import { FilterMenu } from './FilterMenu';

import * as Styled from './styled';

const defaultFilters = {
  searchValue: '',
};

const Main = () => {
  // eslint-disable-next-line prefer-const
  let [entries, setEntries] = useState([]);
  const [filters, mergeFilters] = useMergeState(defaultFilters);

  entries = sortEntries(filters, entries);

  useEffect(() => {
    fetchData().then(data => {
      setEntries(data);
    });
  }, []);

  return (
    <Styled.Container>
      <FilterMenu
        entries={entries}
        defaultFilters={defaultFilters}
        filters={filters}
        mergeFilters={mergeFilters}
      />
      <Styled.RegexCardsContainer>
        {entries.map(entry => (
          <RegexCard key={entry.id} {...entry} />
        ))}
      </Styled.RegexCardsContainer>
    </Styled.Container>
  );
};

const sortEntries = (filters, entries) => {
  const { searchValue } = filters;

  let sorted = entries;

  if (searchValue) {
    sorted = entries.filter(entry =>
      entry.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }

  return sorted;
};

export default Main;
