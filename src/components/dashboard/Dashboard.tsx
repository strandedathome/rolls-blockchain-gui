import React from 'react';
import styled from 'styled-components';
import { Route, Switch, useRouteMatch } from 'react-router';
import { AppBar, Toolbar, Drawer, Divider } from '@material-ui/core';
import {
  LocaleToggle,
  Flex,
  Logo,
  ToolbarSpacing,
} from '@rolls/core';
import { defaultLocale, locales } from '../../config/locales';
import Wallets from '../wallet/Wallets';
import FullNode from '../fullNode/FullNode';
import Farm from '../farm/Farm';
import Blocks from '../blocks/Blocks';
import Block from '../block/Block';
import Settings from '../settings/Settings';
import DashboardSideBar from './DashboardSideBar';
import { DashboardTitleTarget } from './DashboardTitle';
import TradeManager from '../trading/TradeManager';
import BackupCreate from '../backup/BackupCreate';
import RollsPalette from '../../theme/RollsPaletteNew';

const StyledRoot = styled(Flex)`
  height: 100%;
  // overflow: hidden;
`;

const StyledAppBar = styled(AppBar)`
  background-color: ${RollsPalette.rolls_dark};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  width: ${({ theme }) => `calc(100% - ${theme.drawer.width})`};
  margin-left: ${({ theme }) => theme.drawer.width};
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
`;

const StyledDrawer = styled(Drawer)`
  z-index: ${({ theme }) => theme.zIndex.drawer + 2};
  width: ${({ theme }) => theme.drawer.width};
  flex-shrink: 0;

  > div {
    width: ${({ theme }) => theme.drawer.width};
  }
`;

const StyledBody = styled(Flex)`
  min-width: 0;
`;

const StyledBrandWrapper = styled(Flex)`
  height: 64px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${RollsPalette.rolls_dark};
  // border: 5px solid red!important;
`;

export default function Dashboard() {
  const { path } = useRouteMatch();

  return (
    <StyledRoot>
      <BackupCreate />
      
      <StyledAppBar color="transparent" elevation={0}>
        <Toolbar>
          <DashboardTitleTarget />
          <Flex flexGrow={1} />
          <LocaleToggle locales={locales} defaultLocale={defaultLocale} />
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer variant="permanent">
        <StyledBrandWrapper>
          <Logo width={ 1 / 2 } />
        </StyledBrandWrapper>
        <Divider />
        <DashboardSideBar />
      </StyledDrawer>
      <StyledBody flexDirection="column" flexGrow={1}>
        <ToolbarSpacing />
        <Switch>
          <Route path={`${path}`} exact>
            <FullNode />
          </Route>
          <Route path={`${path}/block/:headerHash`} exact>
            <Block />
          </Route>
          <Route path={`${path}/wallets/:walletId?`}>
            <Wallets />
          </Route>
          <Route path={`${path}/farm`}>
            <Farm />
          </Route>
          <Route path={`${path}/blocks`}>
            <Blocks />
          </Route>
          <Route path={`${path}/trade`}>
            <TradeManager />
          </Route>
          <Route path={`${path}/settings`}>
            <Settings />
          </Route>
        </Switch>
      </StyledBody>
    </StyledRoot>
  );
}
