import React from 'react';

import * as Styled from './styled';

const NotFoundPage = () => {
  return (
    <Styled.ErrorContainer>
      <Styled.TitleContainer>
        <Styled.ErrorTitle>404 Not Found</Styled.ErrorTitle>
      </Styled.TitleContainer>
    </Styled.ErrorContainer>
  );
};

export default NotFoundPage;
