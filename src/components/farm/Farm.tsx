import React from 'react';
import { Trans } from '@lingui/macro';
import { useSelector } from 'react-redux';
import { AdvancedOptions, Flex } from '@rolls/core';
import LayoutMain from '../layout/LayoutMain';
import FarmLatestBlockChallenges from './FarmLatestBlockChallenges';
import FarmFullNodeConnections from './FarmFullNodeConnections';
import FarmYourHarvesterNetwork from './FarmYourHarvesterNetwork';
import FarmLastAttemptedProof from './FarmLastAttemptedProof';
import usePlots from '../../hooks/usePlots';
import type { RootState } from '../../modules/rootReducer';

export default function Farm() {
  const { hasPlots } = usePlots();
  const hasHarvesterConnections = !!useSelector((state: RootState) =>
    state.farming_state.farmer.connections.find(
      (connection) => connection.type === 2,
    ),
  );

  return (
    <LayoutMain title={<Trans>Farming</Trans>}>
      <Flex flexDirection="column" gap={3}>

        
            <FarmLastAttemptedProof />
            <FarmLatestBlockChallenges />
            <FarmYourHarvesterNetwork />
            <FarmFullNodeConnections />


      </Flex>
    </LayoutMain>
  );
}
