import styled from 'styled-components'
import { darken, lighten } from 'polished'
export const Button = styled.button`
  box-sizing: border-box;
  transition: all 0.15s;
  background: ${props =>
    props.secondary ? props.theme.bgColor.mainSec : props.theme.bgColor.main};
  color: ${props =>
    props.secondary ? darken(0.1, props.theme.color.mainSec) : props.theme.color.main};
  border: ${props => (props.secondary ? `1px solid ${props.theme.color.mainSec}` : 0)};
  padding: ${({ theme: { space } }) => `${space.m} ${space.l}`};
  border-radius: ${props => props.theme.borderRadius};
  user-select: none;
  outline: none;
  &::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    color: ${props => props.secondary && props.theme.color.main};
    background: ${props => darken(0.05, props.theme.bgColor.main)};
  }

  &:active {
    background: ${props => darken(0.07, props.theme.bgColor.main)};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => lighten(0.2, props.theme.bgColor.main)};
  }
`
