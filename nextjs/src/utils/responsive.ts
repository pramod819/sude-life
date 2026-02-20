export const mobileCss = (css) => (props) => `${props.theme.breakpoints.down(
    'xs'
)} {
  ${css}
}`

export const tabletCss = (css) => (props) => `${props.theme.breakpoints.between(
    'sm',
    'md'
)} {
  ${css}
}`

export const desktopCss = (css) => (props) => `${props.theme.breakpoints.up(
    'lg'
)} {
  ${css}
}`

export const largeDesktopCss =
    (css) => (props) => `${props.theme.breakpoints.up('xl')} {
  ${css}
}`
