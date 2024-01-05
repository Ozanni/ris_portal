import { Stack, Switch, Typography, styled } from '@mui/material';
import React, { FC } from 'react';

import { ExampleDataType } from './temp';

export const UserConfigItem: FC<ExampleDataType> = (props) => {
  const { description, title } = props;
  return (
    <StyledItemWrapper>
      <Stack>
        <Typography variant="subtitle1" fontWeight="500">
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Stack>
      <Switch defaultChecked />
    </StyledItemWrapper>
  );
};

const StyledItemWrapper = styled('div')`
  display: grid;
  grid-template-columns: 3fr minmax(75px, 0.5fr);
`;
