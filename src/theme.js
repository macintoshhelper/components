import {black, white, gray, blue, green, orange, purple, red, yellow} from 'primer-colors'
import {lineHeights} from 'primer-typography'

// General
const colors = {
  bodytext: gray[9],
  black,
  white,
  gray,
  blue,
  green,
  orange,
  purple,
  red,
  yellow,
  blackfade15: 'rgba(27, 31, 35, 0.15)',
  blackfade20: 'rgba(27, 31, 35, 0.20)',
  blackfade30: 'rgba(27,31,35,0.3)',
  blackfade35: 'rgba(27, 31, 35, 0.35)',
  blackfade50: 'rgba(27, 31, 35, 0.5)',
  whitefade15: 'rgba(255, 255, 255, 0.15)',
  whitefade50: 'rgba(255, 255, 255, 0.50)',
  state: {
    error: red[5],
    failure: red[5],
    pending: yellow[7],
    queued: yellow[7],
    success: green[5],
    unknown: gray[4]
  },
  border: {
    grayLight: '#eaecef',
    gray: gray[2],
    grayDark: '#d1d5da'
  },
  counter: {
    bg: 'rgba(27, 31, 35, 0.08)'
  },
  filterList: {
    hoverBg: '#eaecef'
  },
  text: {
    gray: gray[6],
    grayLight: gray[5],
    grayDark: gray[9],
    red: red[6]
  },
  bg: {
    gray: gray[1],
    grayLight: gray[0],
    disabled: '#F3F4F6'
  },
  accent: orange[5]
}

const breakpoints = ['544px', '768px', '1012px', '1280px']

const fonts = {
  normal: fontStack([
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol'
  ]),
  mono: fontStack(['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace'])
}

const fontWeights = {
  light: 300,
  normal: 400,
  semibold: 500,
  bold: 600
}

const borders = [0, '1px solid']

const radii = ['0', '3px', '6px', '100px']

const shadows = {
  small: '0 1px 1px rgba(27, 31, 35, 0.1)',
  medium: '0 1px 5px rgba(27, 31, 35, 0.15)',
  large: '0 1px 15px rgba(27, 31, 35, 0.15)',
  'extra-large': '0 10px 50px rgba(27, 31, 35, 0.07)',
  formControl: 'inset 0px 2px 0px rgba(225, 228, 232, 0.2)',
  formControlDisabled: 'inset 0px 2px 0px rgba(220, 227, 237, 0.3)',
  formControlFocus: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 0.2em',
  primaryShadow: '0px 1px 0px rgba(20, 70, 32, 0.1), inset 0px 2px 0px rgba(255, 255, 255, 0.03)',
  primaryActiveShadow: 'inset 0px 1px 0px rgba(20, 70, 32, 0.2)'
}

const sizes = {
  small: '544px',
  medium: '768px',
  large: '1012px',
  xlarge: '1280px'
}

const fontSizes = ['12px', '14px', '16px', '20px', '24px', '32px', '40px', '48px']

const space = ['0', '4px', '8px', '16px', '24px', '32px', '40px', '48px', '64px', '80px', '96px', '112px', '128px']

// Components

const buttons = {
  default: {
    color: {
      default: colors.text.grayDark,
      disabled: gray[4]
    },
    border: {
      default: colors.border.gray,
      active: colors.border.grayDark,
      disabled: colors.border.grayLight
    },
    bg: {
      default: colors.bg.grayLight,
      hover: '#F3F4F6', // custom gray
      active: '#edeff2', //custom gray
      disabled: colors.bg.grayLight
    },
    shadow: {
      default: '0px 1px 0px rgba(149, 157, 165, 0.1), inset 0px 2px 0px rgba(255, 255, 255, 0.25)',
      hover: '0px 1px 0px rgba(209, 213, 218, 0.2), inset 0px 2px 0px rgba(255, 255, 255, 0.1)',
      active: 'inset 0px 2px 0px rgba(149, 157, 165, 0.1)',
      focus: '0 0 0 3px rgba(3, 102, 214, 0.3)'
    }
  },
  primary: {
    color: {
      default: white,
      disabled: colors.whitefade50
    },
    border: {
      default: green[6],
      hover: green[7],
      active: green[7],
      disabled: 'rgba(34, 134, 58, 0.1)'
    },
    bg: {
      default: '#159739', //custom green
      focus: '#138934', //custom green
      hover: '#138934', //custom green
      active: '#128031', // 2% darker than hover bg
      disabled: '#94D3A2' // custom gray
    },
    shadow: {
      default: ' 0px 1px 0px rgba(20, 70, 32, 0.1), inset 0px 2px 0px rgba(255, 255, 255, 0.03)',
      active: 'inset 0px 1px 0px rgba(20, 70, 32, 0.2)',
      focus: '0 0 0 3px #94D3A2'
    }
  },
  danger: {
    color: {
      default: colors.text.red,
      hover: white,
      active: white,
      disabled: 'rgba(203,36,49, .5)' // custom?
    },
    border: {
      default: colors.border.gray,
      hover: red[7],
      active: red[8]
    },
    bg: {
      default: gray[0],
      hover: red[6],
      active: '#be222e', // 2% darker than hover bg
      disabled: '#F3F4F6'
    },
    shadow: {
      default: '0px 1px 0px rgba(149, 157, 165, 0.1), inset 0px 2px 0px rgba(255, 255, 255, 0.25)',
      hover: '0px 1px 0px rgba(149, 157, 165, 0.1), inset 0px 2px 0px rgba(255, 255, 255, 0.03)',
      active: 'inset 0px 2px 0px rgba(179, 29, 40, 0.4)',
      focus: '0 0 0 3px rgba(203, 36, 49, 0.4)'
    }
  },
  outline: {
    color: {
      default: blue[6],
      hover: white,
      active: white,
      disabled: gray[4]
    },
    border: {
      default: gray[2], //border-gray
      hover: blue[6],
      active: 'rgba(4, 66, 137, .5)'
    },
    bg: {
      default: gray[0],
      hover: blue[5],
      active: '#035fc7', // 2% darker than hover bg
      disabled: '#F3F4F6'
    },
    shadow: {
      default: '0px 1px 0px rgba(149, 157, 165, 0.1), inset 0px 2px 0px rgba(255, 255, 255, 0.25)',
      hover: '0px 1px 0px rgba(149, 157, 165, 0.1), inset 0px 2px 0px rgba(255, 255, 255, 0.03)',
      active: 'inset 0px 1px 0px rgba(4, 66, 137, 0.2)',
      focus: '0 0 0 3px rgba(3, 102, 214, 0.3)'
    }
  }
}

const popovers = {
  colors: {
    caret: 'rgba(27, 31, 35, 0.15)'
  }
}

const pagination = {
  fontSize: '13px',
  fontWeight: fontWeights.bold,
  borderRadius: radii[1],
  colors: {
    normal: {
      fg: colors.blue[5],
      bg: colors.white,
      border: colors.border.gray
    },
    disabled: {
      fg: colors.gray[3],
      bg: colors.gray[0],
      border: colors.border.gray
    },
    hover: {
      fg: colors.blue[5],
      bg: colors.gray[1],
      border: colors.border.gray
    },
    selected: {
      fg: colors.white,
      bg: colors.blue[5],
      border: colors.blue[5]
    }
  }
}

const theme = {
  // General
  borders,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,

  // Components
  buttons,
  pagination,
  popovers
}

export default theme
export {colors}

function fontStack(fonts) {
  return fonts.map(font => (font.includes(' ') ? `"${font}"` : font)).join(', ')
}
