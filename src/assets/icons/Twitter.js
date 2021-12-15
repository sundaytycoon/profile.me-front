import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 20px;
  height: 20px;
  fill: currentcolor;
  stroke: none;
  transition: transform 0.2s linear 0s;
`;

const Link = styled.a`
  color: rgb(196, 196, 196);
  fill: inherit;
  stroke: inherit;
  pointer-events: initial;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const Twitter = () => {
  return (
    <Svg viewBox="0 0 96 80">
      <Link
        href="https://twitter.com/linktree_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <path d="M93.35,1.48A38.82,38.82,0,0,1,80.84,6.37,19.45,19.45,0,0,0,66.46,0,20,20,0,0,0,46.77,20.2a20.37,20.37,0,0,0,.51,4.59A55.44,55.44,0,0,1,6.68,3.69,20.59,20.59,0,0,0,4,13.85a20.32,20.32,0,0,0,8.76,16.81,19.42,19.42,0,0,1-8.93-2.52v.25a20.08,20.08,0,0,0,15.81,19.8,19.31,19.31,0,0,1-8.9.35,19.77,19.77,0,0,0,18.4,14A38.9,38.9,0,0,1,4.7,71.21,38.39,38.39,0,0,1,0,70.93,54.84,54.84,0,0,0,30.19,80c36.23,0,56-30.77,56-57.46,0-.88,0-1.76,0-2.62A40.39,40.39,0,0,0,96,9.47a38.56,38.56,0,0,1-11.31,3.18A20.17,20.17,0,0,0,93.35,1.48Z"></path>
      </Link>
    </Svg>
  );
};

export default Twitter;
