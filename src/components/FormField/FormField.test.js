import React from 'react';
import FormField from './FormField';
import { renderWithThemeProvider } from '../../helpers/renderWithThemeProvider';

describe('FormField', () => {
  it('Renders the component', () => {
    renderWithThemeProvider(<FormField name="name" id="name" />);
  });
});
