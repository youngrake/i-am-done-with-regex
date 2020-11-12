import React from 'react';

import * as Styled from './styled';

const Header = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Styled.Header>
      <Styled.HeaderContainer>
        <Styled.HeaderLogo to="/" onClick={scrollUp}>
          I am done with Regex
        </Styled.HeaderLogo>
        <Styled.GithubLink
          target="_blank"
          href="https://github.com/youngrake/i-am-done-with-regex">
          GitHub
        </Styled.GithubLink>
      </Styled.HeaderContainer>
    </Styled.Header>
  );
};

export default Header;
