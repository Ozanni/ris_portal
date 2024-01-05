import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const ItechPatientHistory = (props: SvgIconProps) => {
  return (
    <SvgIcon color="inherit" {...props}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M21 3H16C16 1.34531 14.2062 0 12 0C9.79375 0 8 1.34531 8 3H3C1.34375 3 0 4.00781 0 5.25V21.75C0 22.9922 1.34375 24 3 24H21C22.6562 24 24 22.9922 24 21.75V5.25C24 4.00781 22.6562 3 21 3ZM12 1.875C12.8313 1.875 13.5 2.37656 13.5 3C13.5 3.62344 12.8313 4.125 12 4.125C11.1687 4.125 10.5 3.62344 10.5 3C10.5 2.37656 11.1687 1.875 12 1.875ZM18 16.125C18 16.3313 17.775 16.5 17.5 16.5H14V19.125C14 19.3313 13.775 19.5 13.5 19.5H10.5C10.225 19.5 10 19.3313 10 19.125V16.5H6.5C6.225 16.5 6 16.3313 6 16.125V13.875C6 13.6687 6.225 13.5 6.5 13.5H10V10.875C10 10.6687 10.225 10.5 10.5 10.5H13.5C13.775 10.5 14 10.6687 14 10.875V13.5H17.5C17.775 13.5 18 13.6687 18 13.875V16.125ZM18 7.125C18 7.33125 17.775 7.5 17.5 7.5H6.5C6.225 7.5 6 7.33125 6 7.125V6.375C6 6.16875 6.225 6 6.5 6H17.5C17.775 6 18 6.16875 18 6.375V7.125Z"
      />
    </SvgIcon>
  );
};

ItechPatientHistory.displayName = 'ItechPatientHistory';

export default ItechPatientHistory;
