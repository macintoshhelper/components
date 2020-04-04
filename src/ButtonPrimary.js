import styled from 'styled-components'
import ButtonBase from './ButtonBase'
import {get} from './constants'
import {Platform} from './primitives'

const ButtonPrimary = styled(ButtonBase)`
  color: ${get('buttons.primary.color.default')};
  background-color: ${get('buttons.primary.bg.default')};
  border: 1px solid ${get('buttons.primary.border.default')};
  ${Platform.OS === 'web' ? `box-shadow: ${get('buttons.primary.shadow.default')};` : ''}

  &:hover {
    background-color: ${get('buttons.primary.bg.hover')};
    border-color: ${get('buttons.primary.border.hover')};
  }
  // focus must come before :active so that the active box shadow overrides
  &:focus {
    border-color: transparent;
    ${Platform.OS === 'web' ? `box-shadow: ${get('buttons.primary.shadow.focus')}; */` : ''}
    background-color: ${get('buttons.primary.bg.focus')};
  }

  &:active {
    background-color: ${get('buttons.primary.bg.active')};
    ${Platform.OS === 'web' ? `box-shadow: ${get('buttons.primary.shadow.active')}; */` : ''}
    border-color: ${get('buttons.primary.border.active')};
  }

  &:disabled {
    color: ${get('buttons.primary.color.disabled')};
    background-color: ${get('buttons.primary.bg.disabled')};
    border-color: ${get('buttons.primary.border.disabled')};
  }
`

export default ButtonPrimary
