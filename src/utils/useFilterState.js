import { useState, useCallback } from 'react';
import { isFunction } from 'lodash';

const useFilterState = initialState => {
  const [state, setState] = useState(initialState || {});

  const mergeFilters = useCallback(newState => {
    if (isFunction(newState)) {
      setState(currentState => ({
        ...currentState,
        ...newState(currentState),
      }));
    } else {
      setState(currentState => ({ ...currentState, ...newState }));
    }
  }, []);

  return [state, mergeFilters];
};

export default useFilterState;
