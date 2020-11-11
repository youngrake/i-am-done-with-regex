import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

import SearchInput from './SearchInput';

export const FilterMenu = ({ filters, mergeFilters }) => {
  const { searchValue } = filters;

  return (
    <Styled.MenuBar>
      <SearchInput
        value={searchValue}
        onChange={value => mergeFilters({ searchValue: value })}
      />
    </Styled.MenuBar>
  );
};

FilterMenu.propTypes = {
  filters: PropTypes.object.isRequired,
  mergeFilters: PropTypes.func.isRequired,
};
