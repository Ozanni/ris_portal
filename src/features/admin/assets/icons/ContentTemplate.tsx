import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const ContentTemplate = (props: SvgIconProps) => {
  return (
    <SvgIcon color="inherit" viewBox="0 0 15 15" {...props}>
      <path d="M7.4375 3.98438V0H1.57812C1.18848 0 0.875 0.313477 0.875 0.703125V14.2969C0.875 14.6865 1.18848 15 1.57812 15H11.4219C11.8115 15 12.125 14.6865 12.125 14.2969V4.6875H8.14062C7.75391 4.6875 7.4375 4.37109 7.4375 3.98438ZM9.3125 10.8984C9.3125 11.0918 9.1543 11.25 8.96094 11.25H4.03906C3.8457 11.25 3.6875 11.0918 3.6875 10.8984V10.6641C3.6875 10.4707 3.8457 10.3125 4.03906 10.3125H8.96094C9.1543 10.3125 9.3125 10.4707 9.3125 10.6641V10.8984ZM9.3125 9.02344C9.3125 9.2168 9.1543 9.375 8.96094 9.375H4.03906C3.8457 9.375 3.6875 9.2168 3.6875 9.02344V8.78906C3.6875 8.5957 3.8457 8.4375 4.03906 8.4375H8.96094C9.1543 8.4375 9.3125 8.5957 9.3125 8.78906V9.02344ZM9.3125 6.91406V7.14844C9.3125 7.3418 9.1543 7.5 8.96094 7.5H4.03906C3.8457 7.5 3.6875 7.3418 3.6875 7.14844V6.91406C3.6875 6.7207 3.8457 6.5625 4.03906 6.5625H8.96094C9.1543 6.5625 9.3125 6.7207 9.3125 6.91406ZM12.125 3.57129V3.75H8.375V0H8.55371C8.74121 0 8.91992 0.0732422 9.05176 0.205078L11.9199 3.07617C12.0518 3.20801 12.125 3.38672 12.125 3.57129Z" />
    </SvgIcon>
  );
};

ContentTemplate.displayName = 'ContentTemplate';

export default ContentTemplate;