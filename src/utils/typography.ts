import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Raleway', 'Noto Serif TC'],
  bodyFontFamily: ['Raleway', 'Noto Serif TC'],
});

const googleFonts: { name: string; bold?: number[] }[] = [
  {
    name: 'Nanum Gothic',
  },
  {
    name: 'IBM Plex Mono',
    bold: [400, 700],
  },
  {
    name: 'Noto Serif TC',
    bold: [400, 700],
  },
  {
    name: 'Raleway',
    bold: [400, 700],
  },
];

const googleFont = googleFonts
  .map(v => {
    if (v.bold) {
      return `${v.name.replace(/ /gi, '+')}:wght@${v.bold.join(';')}`;
    } else {
      return `${v.name.replace(/ /gi, '+')}`;
    }
  })
  .join('&family=')
  .toString();

export { googleFont, typography as default };
