import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';

import { MyDivider } from '@/components/Elements';

import { exampleData, UserConfigTab } from './temp';
import { UserConfigItem } from './UserConfigItem';
import { useUserConfigContext } from './UserConfigProvider';
import { UserConfigShortcut } from './UserConfigShortcut';

interface TabPanelProps {
  children?: React.ReactNode;
  panelKey: UserConfigTab;
  value: UserConfigTab;
}

export const UserConfigContent = () => {
  const { currentTab, setCurrentTab } = useUserConfigContext();

  const handleChange = (event: React.SyntheticEvent, newValue: UserConfigTab) => {
    setCurrentTab(newValue);
  };

  return (
    <Stack width="100%">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={currentTab} onChange={handleChange}>
          <Tab label="Cấu hình chung" value={UserConfigTab.CommonConfig} />
          <Tab label="Phím tắt" value={UserConfigTab.ShortcutConfig} />
        </Tabs>
      </Box>
      <CustomTabPanel value={currentTab} panelKey={UserConfigTab.CommonConfig}>
        {exampleData.map((item, index) => (
          <>
            <UserConfigItem
              key={index}
              description={item.description}
              title={item.title}
            />
            <MyDivider />
          </>
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={currentTab} panelKey={UserConfigTab.ShortcutConfig}>
        <UserConfigShortcut />
      </CustomTabPanel>
    </Stack>
  );
};

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, panelKey, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== panelKey}
      id={panelKey}
      aria-labelledby={panelKey}
      {...other}
    >
      {value === panelKey && <Box sx={{ p: 1, pl: 2 }}>{children}</Box>}
    </div>
  );
};
