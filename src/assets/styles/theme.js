export const size = {
  width: {
    // xxs: 360,
    xs: 420,
    s: 520,
    m: 768,
    l: 1024,
    xl: 1200,
    xxl: 1400,
  }
}
export const theme = {
  colors: {
    white: '#FFF',
    lightGray: '#EEEFF4',
    mediumGray: '#7D828F',
    darkGray: '#60636D',
    black: '#1B1D23',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  fontSize: {
    xxs: '15px',
    xs: '18px',
    s: '20px',
    m: '40px',
    l: '56px',
    xl: '80px',
    xxl: '200px',
  },
  device: {
    xs: `min-width: ${size.width.xs}px`,
    s: `min-width: ${size.width.s}px`,
    m: `min-width: ${size.width.m}px`,
    l: `min-width: ${size.width.l}px`,
    xl: `min-width: ${size.width.xl}px`,
  }
}

