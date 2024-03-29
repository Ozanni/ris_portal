import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const DiagnosisGroupTemplate = (props: SvgIconProps) => {
  return (
    <SvgIcon color="inherit" viewBox="0 0 15 15" {...props}>
      <path d="M13.5938 0C14.3704 0 15 0.62959 15 1.40625V9.84375C15 10.6204 14.3704 11.25 13.5938 11.25H5.15625C4.37959 11.25 3.75 10.6204 3.75 9.84375V1.40625C3.75 0.62959 4.37959 0 5.15625 0H13.5938ZM5.15625 12.1875C3.86391 12.1875 2.8125 11.1361 2.8125 9.84375V3.75H1.40625C0.62959 3.75 0 4.37959 0 5.15625V13.5938C0 14.3704 0.62959 15 1.40625 15H9.84375C10.6204 15 11.25 14.3704 11.25 13.5938V12.1875H5.15625Z" />
    </SvgIcon>
  );
};

DiagnosisGroupTemplate.displayName = 'DiagnosisGroupTemplate';

export default DiagnosisGroupTemplate;
