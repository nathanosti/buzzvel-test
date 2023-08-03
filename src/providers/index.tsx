import { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from '@styles/theme';
import GlobalStyle from '@src/styles/globalStyles';

interface IProps {
  children?: ReactNode;
}

export default function Providers(props: IProps) {
  const { children } = props;

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
  );
}
