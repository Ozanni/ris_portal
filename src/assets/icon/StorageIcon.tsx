import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const ItechStorageIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon color="inherit" {...props}>
      <path d="M24 3.42857V5.57143C24 7.45983 18.625 9 12 9C5.37499 9 0 7.45983 0 5.57143V3.42857C0 1.54017 5.37499 0 12 0C18.625 0 24 1.54017 24 3.42857ZM24 8.25V13.0714C24 14.9598 18.625 16.5 12 16.5C5.37499 16.5 0 14.9598 0 13.0714V8.25C2.57813 9.80357 7.29686 10.5268 12 10.5268C16.7031 10.5268 21.4219 9.80357 24 8.25ZM24 15.75V20.5714C24 22.4599 18.625 24 12 24C5.37499 24 0 22.4599 0 20.5714V15.75C2.57813 17.3037 7.29686 18.0267 12 18.0267C16.7031 18.0267 21.4219 17.3037 24 15.75Z" />
    </SvgIcon>
  );
};

ItechStorageIcon.displayName = 'ItechStorage';

export default ItechStorageIcon;
