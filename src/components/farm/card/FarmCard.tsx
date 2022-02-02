import React, { ReactNode, ReactElement } from 'react';
import styled from 'styled-components';
import { Flex, TooltipIcon } from '@rolls/core';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TypographyProps,
  CircularProgress,
} from '@material-ui/core';
import RollsPalette from '../../../theme/RollsPaletteNew'

const StyledCard = styled(Card)`
  height: 100%;
  overflow: visible;
  margin-bottom: -0.5rem;
  border-radius: 1rem;
  background-color: ${RollsPalette.rolls_dark};
`;

const StyledTitle = styled.div`
  margin-bottom: 0.5rem;
`;

const StyledValue = styled(Typography)`
  font-size: 1.25rem;
`;

type Props = {
  title: ReactNode;
  value?: ReactNode;
  valueColor?: TypographyProps['color'];
  description?: ReactNode;
  loading?: boolean;
  tooltip?: ReactElement<any>;
};

export default function FarmCard(props: Props) {
  const { title, value, description, valueColor, loading, tooltip } = props;

  return (
    <StyledCard>
      <CardContent>
        <StyledTitle>
          <Flex gap={1} alignItems="center">
            <Typography color="textSecondary">{title}</Typography>
            {tooltip && <TooltipIcon>{tooltip}</TooltipIcon>}
          </Flex>
        </StyledTitle>
        {loading ? (
          <Box>
            <CircularProgress color="secondary" size={25} />
          </Box>
        ) : (
          <StyledValue variant="h6" color="primary">
            {value}
          </StyledValue>
        )}

        {description && (
          <Typography variant="caption" color="textSecondary">
            {description}
          </Typography>
        )}
      </CardContent>
    </StyledCard>
  );
}

FarmCard.defaultProps = {
  valueColor: "secondary",
  description: undefined,
  loading: false,
  value: undefined,
};
