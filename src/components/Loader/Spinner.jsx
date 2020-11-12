import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';

export const Spinner = ({ size }) => {
  const theme = useTheme();

  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: 'auto',
          background: 'none',
          display: 'block',
          shapeRendering: 'auto',
        }}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid">
        <g>
          <path
            d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843"
            fill="none"
            stroke={theme.colors.text}
            strokeWidth="12"
          />
          <path d="M49 3L49 27L61 15L49 3" fill={theme.colors.text} />
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          />
        </g>
      </svg>
    </span>
  );
};

Spinner.propTypes = {
  size: PropTypes.number,
};

Spinner.defaultProps = {
  size: 32,
};
