import { style, globalStyle } from '@vanilla-extract/css';

export const headlineStyle = style({
  color: '#ff3be7',
  fontFamily: 'sans-serif',
});

globalStyle('body', {
  backgroundColor: '#000',
  display: 'grid',
  minHeight: '100vh',
  placeItems: 'center',
});