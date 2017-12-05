import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  color: #fff;
  fill: #fff;
  width: 30px;
  height: 30px;
`;

export default ({ glyph }) => (
  <Icon>
    {glyph}
  </Icon>
);
