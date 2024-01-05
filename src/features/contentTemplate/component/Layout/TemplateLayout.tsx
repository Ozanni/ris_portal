import { styled } from '@mui/material';
import * as React from 'react';

import PacsHead from '@/components/Head/PacsHead';
import { ContentLayout } from '@/components/Layout/ContentLayout';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

const StyledLayout = styled(ContentLayout)`
  display: flex;
  max-width: 100vw;
  width: 100%;
  height: 100%;
  max-height: 100%;
  flex-direction: row;
  overflow: hidden;
`;
/**
 * Contains PacsHead and the page contents of statistic route
 */
export const TemplateLayout = ({ children, title }: LayoutProps) => {
  return <StyledLayout Head={<PacsHead customTitle={title} />}>{children}</StyledLayout>;
};
