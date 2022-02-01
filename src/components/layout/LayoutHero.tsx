import React, { ReactNode } from 'react';
import { AppBar, Toolbar, Box } from '@material-ui/core';
import styled from 'styled-components';
import { Flex, LocaleToggle } from '@rolls/core';
import { defaultLocale, locales } from '../../config/locales';
import RollsPalette from '../layout/RollsPalette';

const StyledWrapper = styled(Box)`
  padding-top: ${({ theme }) => `${theme.spacing(3)}px`};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: ${({ theme }) =>
    theme.palette.type === 'dark'
      // opening screen
      ? `linear-gradient(45deg, ${RollsPalette.rolls_darkest} 30%, ${RollsPalette.rolls_dark} 90%)`
      : `linear-gradient(45deg, ${RollsPalette.rolls_white} 30%, #fdfdfd 90%)`};
`;

const StyledBody = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

type Props = {
  children?: ReactNode;
  header?: ReactNode;
};

export default function LayoutHero(props: Props) {
  const { children, header } = props;

  return (
    <StyledWrapper>
      <AppBar color="transparent" elevation={0}>
        <Toolbar>
          {header}
          <Flex flexGrow={1} />
          <LocaleToggle locales={locales} defaultLocale={defaultLocale} />
        </Toolbar>
      </AppBar>
      <StyledBody>
        <Flex flexDirection="column" gap={2} alignItems="center">
          {children}
        </Flex>
      </StyledBody>
    </StyledWrapper>
  );
}

LayoutHero.defaultProps = {
  header: undefined,
  children: undefined,
};
