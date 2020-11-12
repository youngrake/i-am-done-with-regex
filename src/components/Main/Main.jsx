import React from 'react';

import { useFilterState, useFetch } from 'utils';

import { RegexCard, Loader } from 'components';
import FilterMenu from './FilterMenu';

import * as Styled from './styled';

const defaultFilters = {
  searchValue: '',
};

const Main = () => {
  // eslint-disable-next-line prefer-const
  let { entries, loading } = useFetch();

  const [filters, mergeFilters] = useFilterState(defaultFilters);
  if (entries) {
    entries = sortEntries(filters, entries);
  }

  return (
    <Styled.Container>
      <FilterMenu
        entries={entries}
        defaultFilters={defaultFilters}
        filters={filters}
        mergeFilters={mergeFilters}
      />
      {!loading ? (
        <Styled.RegexCardsContainer>
          {entries.map(entry => (
            <RegexCard key={entry.id} {...entry} />
          ))}
        </Styled.RegexCardsContainer>
      ) : (
        <Loader />
      )}
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
