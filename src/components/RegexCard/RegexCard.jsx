import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext, useTheme } from 'styled-components';
import copy from 'copy-to-clipboard';
import ReactTooltip from 'react-tooltip';

import * as Styled from './styled';

const RegexCard = ({ description, name, regex }) => {
  const theme = useTheme(ThemeContext);

  const copyToClipBoard = () => {
    copy(regex);
  };

  return (
    <Styled.RegexCardContainer>
      <Styled.Header>
        <Styled.Title>{name}</Styled.Title>
        {description && (
          <>
            <Styled.Icon
              data-tip
              data-for={name}
              alt="info"
              src={theme.assets.infoSvg}
            />
            <ReactTooltip id={name} className="popup">
              <ul style={{ padding: '0px 15px' }}>
                {description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </ReactTooltip>
          </>
        )}
      </Styled.Header>
      <Styled.Regex onClick={copyToClipBoard} readOnly defaultValue={regex} />
      <Styled.Input required pattern={regex} placeholder="Validate" />
    </Styled.RegexCardContainer>
  );
};

RegexCard.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  regex: PropTypes.string.isRequired,
};

RegexCard.defaultProps = {
  description: undefined,
};

export default RegexCard;
