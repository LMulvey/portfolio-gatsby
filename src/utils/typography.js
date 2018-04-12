import Typography from 'typography';
import kirkhamTheme from 'typography-theme-kirkham';
kirkhamTheme.headerColor = 'hsla(255,255%,255%,1)';
kirkhamTheme.bodyColor = 'hsla(0,0%,0%,0.8)';

const typography = new Typography(kirkhamTheme);

export default typography;