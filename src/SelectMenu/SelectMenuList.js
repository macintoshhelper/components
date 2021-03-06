import styled, {css} from 'styled-components'
import theme from '../theme'
import {COMMON, get} from '../constants'

const listStyles = css`
  position: relative;
  padding: 0;
  margin: 0;
  flex: auto;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${get('colors.white')};
  border-top: ${get('borders.1')} ${get('colors.border.gray')};
  -webkit-overflow-scrolling: touch; // Adds momentum + bouncy scrolling

  @media (hover: hover) {
    .SelectMenuTab:focus {
      background-color: ${get('colors.blue.1')};
    }

    .SelectMenuTab:not([aria-checked='true']):hover {
      color: ${get('colors.gray.9')};
      background-color: ${get('colors.gray.2')};
    }

    .SelectMenuTab:not([aria-checked='true']):active {
      color: ${get('colors.gray.9')};
      background-color: ${get('colors.gray.1')};
    }
  }
`

const SelectMenuList = styled.div`
  ${listStyles}
  ${COMMON}
`
SelectMenuList.defaultProps = {
  theme
}

SelectMenuList.propTypes = {
  ...COMMON.propTypes
}

export default SelectMenuList
