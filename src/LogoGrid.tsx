import * as React from 'react'
import { LogoGridNewProps, LogoGridProps } from './props'
import { StyledLogo, StyledLogoContainer } from './styled'

export const LogoGrid = ({
  className = '',
  columns = 5,
  desktopAlign = 'center',
  desktopPaddingScale = 1,
  fillColor,
  logos = [{ logo: 'https://placeimg.com/640/480/nature', initialWidth: 100 }],
  mobileAlign = 'left',
  mobileBreakpoint = 767,
  mobileScale = 1,
  mobilePaddingScale = 1,
  parentWidth = 1000,
  withOffset = false,
  ...rest
}: LogoGridProps) => {
  const newProps: LogoGridNewProps = {}

  newProps.singleRow = logos.length <= columns
  newProps.numOfColumns = logos.length < columns ? logos.length : columns
  newProps.initialLogoWrapperWidth = parentWidth / newProps.numOfColumns
  newProps.firstLogoOffset = (newProps.initialLogoWrapperWidth - logos[0].initialWidth) / 2
  newProps.lastLogoOffset = (newProps.initialLogoWrapperWidth - logos[newProps.numOfColumns - 1].initialWidth) / 2
  newProps.flushLeft = `${((newProps.firstLogoOffset / parentWidth) * 100).toFixed(3)}%`
  newProps.initialPxOffset = (newProps.firstLogoOffset - newProps.lastLogoOffset) / 2
  newProps.centeredOffset = `${((newProps.initialPxOffset / parentWidth) * 100).toFixed(3)}%`

  if (withOffset) {
    if (desktopAlign === 'left') {
      newProps.offset = newProps.flushLeft
    } else {
      newProps.offset = newProps.centeredOffset
    }
  } else {
    newProps.offset = '0%'
  }

  return (
    <StyledLogoContainer
      className={`${className} logo-grid ${newProps.singleRow ? 'single-row' : 'multi-row'}`.trim()}
      columns={columns}
      desktopAlign={desktopAlign}
      fillColor={fillColor}
      logos={logos}
      mobileAlign={mobileAlign}
      mobileScale={mobileScale}
      mobileBreakpoint={mobileBreakpoint}
      desktopPaddingScale={desktopPaddingScale}
      mobilePaddingScale={mobilePaddingScale}
      {...newProps}
      {...rest}>
      {logos.map(({ initialWidth = 100, logo = null }, idx) => {
        if (!logo) {
          return null
        }
        const key = `logo-${idx + 1}`

        return (
          <StyledLogo
            className={`logo ${key}`}
            key={key}
            columns={columns}
            parentWidth={parentWidth}
            initialWidth={initialWidth}
            singleRow={newProps.singleRow}
            mobileBreakpoint={mobileBreakpoint}
            mobileScale={mobileScale}>
            <div className="logo-wrapper">
              {typeof logo === 'string' ? React.createElement('img', { src: logo }) : React.createElement(logo)}
            </div>
          </StyledLogo>
        )
      })}
    </StyledLogoContainer>
  )
}
