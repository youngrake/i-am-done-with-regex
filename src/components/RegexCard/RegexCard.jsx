import React from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';
import { ThemeContext, useTheme } from 'styled-components';

import * as Styled from './styled';

const RegexCard = ({ description, name, regex, tags }) => {
  const theme = useTheme(ThemeContext);

  const copyToClipBoard = () => {
    copy(regex);
  };

  return (
    <Styled.RegexCardContainer>
      <Styled.Header>
        <Styled.Title>{name}</Styled.Title>
        <Styled.Icon
          onMouseEnter={() => console.log(description)}
          alt="info"
          src={theme.assets.infoSvg}
        />
      </Styled.Header>
      <Styled.Regex readOnly defaultValue={regex} onClick={copyToClipBoard} />
      <Styled.Input required pattern={regex} placeholder="Validate" />
      <Styled.Tags>
        {tags.map((tag, index) => (
          <Styled.Tag key={index}>#{tag}</Styled.Tag>
        ))}
      </Styled.Tags>
    </Styled.RegexCardContainer>
  );
};

RegexCard.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  regex: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

RegexCard.defaultProps = {
  tags: [],
};

export default RegexCard;
