import React, { useState, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import * as Styled from '../styled';

const SearchInput = ({ onChange, value: v, ...inputProps }) => {
  const [value, setValue] = useState(v);
  const isControlled = v !== undefined;

  const handleChange = useCallback(
    debounce(newValue => onChange(newValue), 500),
    [],
  );

  const valueRef = useRef(value);
  valueRef.current = value;

  useEffect(() => {
    if (v !== valueRef.current) {
      setValue(v);
    }
  }, [v]);

  return (
    <Styled.SearchInput>
      <Styled.SearchInputIcon size={32} />
      <Styled.SearchInputElement
        {...inputProps}
        value={isControlled ? value : undefined}
        onChange={e => {
          setValue(e.target.value);
          handleChange(e.target.value);
        }}
      />
    </Styled.SearchInput>
  );
};

SearchInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
  value: undefined,
};

export default SearchInput;
