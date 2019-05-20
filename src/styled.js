import styled, { css } from 'styled-components'

const mobilePaddingDefault = 5
const desktopPaddingDefault = 25

const styledLogoContainerCss = props => css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  width: 100%;
  margin: -${desktopPaddingDefault * props.desktopPaddingScale}px auto;

  justify-content: ${props.singleRow ? 'space-between' : props.desktopAlign === 'left' ? 'flex-start' : 'center'};

  ${props.fillColor && `path:not(.do-not-fill) {fill: ${props.fillColor};}`};

  @media (max-width: ${props.mobileBreakpoint - 1}px) {
    padding: ${mobilePaddingDefault * props.mobilePaddingScale}vw 0;
    margin: -${mobilePaddingDefault * props.mobilePaddingScale}vw auto;
    justify-content: ${props.mobileAlign === 'left' ? 'flex-start' : 'center'};
  }

  .logo {
    ${!props.singleRow && `flex: 0 1 ${(100 / props.columns).toFixed(3)}%;`};

    @media (max-width: ${props.mobileBreakpoint - 1}px) {
      flex: 0 1 50%;
    }
  }

  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${desktopPaddingDefault * props.desktopPaddingScale}px 0;

    @media (max-width: ${props.mobileBreakpoint - 1}px) {
      padding: ${props.mobileAlign === 'left'
    ? `${mobilePaddingDefault * props.mobilePaddingScale}vw ${mobilePaddingDefault *
            props.mobilePaddingScale}vw ${mobilePaddingDefault * props.mobilePaddingScale}vw 0`
    : `${mobilePaddingDefault * props.mobilePaddingScale}vw ${(mobilePaddingDefault * props.mobilePaddingScale) /
            2}vw`};
      justify-content: ${props.mobileAlign === 'left' ? 'flex-start' : 'center'};
    }

    > * {
      max-width: 100%;
    }
  }

  ${props.offset &&
    `
  @media (min-width: ${props.mobileBreakpoint}px) {
    transform: translateX(-${props.offset});
  }
  `};
`

export const StyledLogoContainer = styled.div`
  ${props => styledLogoContainerCss(props)}
`

const getDesktopLogoWidth = props => ((props.initialWidth / props.parentWidth) * 100).toFixed(3)

const singleRowCss = props => css`
  @media (min-width: ${props.mobileBreakpoint}px) {
    flex: 0 1 ${getDesktopLogoWidth(props)}%;
    .logo-wrapper > * {
      width: 100%;
    }
  }
`

const getMobileLogoWidthPerc = props =>
  `${((props.initialWidth / (props.parentWidth / 5)) * props.mobileScale * 100).toFixed(3)}%`

const styledLogoCss = props => css`
  ${props.singleRow && singleRowCss(props)};

  .logo-wrapper > * {
    width: ${getMobileLogoWidthPerc(props)};

    ${props.singleRow && `@media (min-width: ${props.mobileBreakpoint}px) {width: 100%;}`};
  }
`

export const StyledLogo = styled.div`
  ${props => styledLogoCss(props)}
`
