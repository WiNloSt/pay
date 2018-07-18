import styled from 'styled-components'
import { darken, lighten } from 'polished'
export const Button = styled.button`
  box-sizing: border-box;
  transition: all 0.15s;
  background: ${props => {
    if (props.secondary) return props.theme.secondary.bg
    if (props.disabled) return props.theme.disabled.bg

    return props.theme.main.bg
  }};
  color: ${props => {
    if (props.secondary) return darken(0.1, props.theme.secondary.color)
    if (props.disabled) return props.theme.disabled.color

    return props.theme.main.color
  }};
  border: ${props => (props.secondary ? `1px solid ${props.theme.secondary.color}` : 0)};
  padding: ${({ theme: { space } }) => `${space.m} ${space.l}`};
  border-radius: ${props => props.theme.borderRadius};
  user-select: none;
  outline: none;
  &::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    ${props =>
      !props.disabled &&
      `
      color: ${props.secondary && props.theme.main.color};
      background: ${darken(0.05, props.theme.main.bg)};
    `};
  }

  &:active {
    background: ${props => darken(0.07, props.theme.main.bg)};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => lighten(0.2, props.theme.main.bg)};
  }
`
