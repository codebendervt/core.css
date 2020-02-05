module.exports = {
  theme: {
    screens: {
      sm: '500px',
      md: '900px',
      lg: '1200px',
      xl: '1600px',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {}
  },
  prefix: 'gibs-',
  important: true,
  variants: {
    appearance: ['responsive'],
    width:['responsive']

  },
  corePlugins: [
    'margin',
    'padding',
    'container',
    'alignContent',
    'alignItems',
    'boxShadow',
    'flex',
    'flexDirection',
    'flexWrap',
    'float',
    'justifyContent',
    'objectPosition',
    'position',
    'width'
  ],

}
