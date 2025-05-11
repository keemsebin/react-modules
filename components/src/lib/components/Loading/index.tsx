import { StyledSpinner } from './Loading.styled';

export type LoadingProps = {
  /**
   * The size of the loading spinner
   * @type {string}
   * @description It can be a string (e.g. 'md')
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   *
   * @type {string}
   * @description It can be a string (e.g. 'black') or a number (e.g. 100).  1rem = 16px
   * @default 'black'
   */
  color?: string;
};

export const Loading = ({ size = 'md', color = 'black', ...props }: LoadingProps) => {
  return (
    <StyledSpinner
      size={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2.25C6.616 2.25 2.25 6.616 2.25 12C2.25 17.384 6.616 21.75 12 21.75V19.313C10.5539 19.3128 9.14035 18.8838 7.93805 18.0803C6.73575 17.2768 5.79871 16.1348 5.2454 14.7987C4.6921 13.4627 4.54738 11.9925 4.82955 10.5743C5.11171 9.15596 5.80809 7.85318 6.83064 6.83064C7.85318 5.80809 9.15596 5.11171 10.5743 4.82955C11.9925 4.54738 13.4627 4.6921 14.7987 5.2454C16.1348 5.79871 17.2768 6.73575 18.0803 7.93805C18.8838 9.14035 19.3128 10.5539 19.313 12H21.75C21.75 6.616 17.384 2.25 12 2.25Z"
        fill={color}
      />
    </StyledSpinner>
  );
};
