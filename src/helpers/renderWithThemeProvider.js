import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';

// metoda oplatająca komponent w ThemeProvider, zeby miec dostep np w testach do komponentu uzywajacego theme

export const renderWithThemeProvider = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
