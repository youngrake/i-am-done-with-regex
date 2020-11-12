import React from 'react';

import { Spinner } from './Spinner';

import * as Styled from './styled';

const Loader = () => {
  return (
    <Styled.Loader>
      <Spinner size={60} />
    </Styled.Loader>
  );
};

export default Loader;
