import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

const RegexCard = ({ id, description, name, regex, tags }) => {
  return (
    <Styled.RegexCardContainer>
      <Styled.Title>{name}</Styled.Title>
      {description}
      {id}
      <Styled.Regex defaultValue={regex} />
      <Styled.Input placeholder="Validate" />
      <Styled.Tags>
        {tags.map((tag, index) => (
          <Styled.Tag key={index}>#{tag}</Styled.Tag>
        ))}
      </Styled.Tags>
    </Styled.RegexCardContainer>
  );
};

RegexCard.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  regex: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

RegexCard.defaultProps = {
  tags: [],
};

export default RegexCard;
