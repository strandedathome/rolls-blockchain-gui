import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';
import { PecanRolls } from '@rolls/icons';

const StyledPecanRolls = styled(PecanRolls)`
  max-width: 100%;
  width: auto;
  height: auto;
  animation: rotation 20s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledPecanRolls />
    </Box>
  );
}
