import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 21px;
  height: 21px;
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

const Rect = styled.rect`
  width: 20px;
  height: 20px;
  fill: transparent;
  stroke: none;
`;

const Linktree = () => {
  return (
    <Svg viewBox="0 0 24 24">
      <Link
        href="https://linktr.ee/linktr.ee"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Rect />
        <path d="M8.92,2.44a1.06,1.06,0,0,0-1.86,0L.1,15.07A1,1,0,0,0,1,16.44h4.7v4.78a.9.9,0,0,0,.89.89H9.33a.91.91,0,0,0,.89-.89V16.44H8.92a1.05,1.05,0,0,1-1-.89A1,1,0,0,1,8,15.07l3.89-7h0Z"></path>
        <path d="M15.08,2.44a1.06,1.06,0,0,1,1.86,0l7,12.63A1,1,0,0,1,23,16.44H18.39v4.78a.9.9,0,0,1-.89.89H14.59a.9.9,0,0,1-.89-.89V16.44H15a1.05,1.05,0,0,0,1.06-.89,1,1,0,0,0-.08-.48L12.08,8h0Z"></path>
      </Link>
    </Svg>
  );
};

export default Linktree;
