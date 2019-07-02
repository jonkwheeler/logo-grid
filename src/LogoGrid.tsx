import * as React from 'react'
import { StyledLogo, StyledLogoContainer } from './styled'

interface LogoItem {
  /**
   * Specify the width of the logo from Desktop view
   * @desc This is important. You should insert the initial width from the desktop design file you are following, without white space.
   * @type number
   * @example
   * import LogoGrid from 'logo-grid'
   * import { Stripe } from 'my-awesome-svgs'
   *
   * export const logoList = [
   *   { logo: Stripe, initialWidth: 108 },
   * ]
   *
   * <LogoGrid logos={logoList} />
   */
  initialWidth?: number

  /**
   * Specify the logo which should be rendered. Can also be an image src.
   * @type number
   * @example
   * import LogoGrid from 'logo-grid'
   * import { Stripe } from 'my-awesome-svgs'
   *
   * export const logoList = [
   *   { logo: Stripe, initialWidth: 108 },
   *   { logo: 'https://placeimg.com/640/480/nature', initialWidth: 85 },
   * ]
   *
   * <LogoGrid logos={logoList} />
   */
  logo?: React.ReactNode | string
}

export interface LogoGridProps {
  /**
   * The className of the LogoGrid component.
   * @type string
   */
  className?: string

  /**
   * Specify the number of columns for the logos/images on Desktop only
   * @type number
   * @defaultValue 5
   * @example columns={5}
   */
  columns?: number

  /**
   * Specify the alignment of the logos on Desktop only
   * @type 'center' | 'left'
   * @defaultValue 'center'
   * @example desktopAlign="center"
   */
  desktopAlign?: 'center' | 'left'

  /**
   * Change the scale of the padding on Desktop between the logos
   * @type number
   * @defaultValue 1
   * @example
   * desktopPaddingScale={1.2}
   * desktopPaddingScale={0.8}
   */
  desktopPaddingScale?: number

  /**
   * Add a fill color to all the svg path of the provided logos
   * @type string
   * @example
   * fillColor='red'
   * fillColor='blue'
   */
  fillColor?: string

  /**
   * Add an array of logos
   * @type LogoItem[]
   * @defaultValue [{ logo: 'https://placeimg.com/640/480/nature', initialWidth: 100 }]
   * @example
   * import LogoGrid from 'logo-grid'
   * import { Stripe, AirBnbIcon, Amazon } from 'my-awesome-svgs'
   *
   * export const logoList = [
   *   { logo: Stripe, initialWidth: 108 },
   *   { logo: 'https://placeimg.com/640/480/nature', initialWidth: 85 },
   *   { logo: AirBnbIcon, initialWidth: 52 },
   *   { logo: Amazon, initialWidth: 136 },
   *   { logo: 'https://placeimg.com/640/480/nature', initialWidth: 75 },
   * ]
   *
   * <LogoGrid logos={logoList} />
   */
  logos?: LogoItem[]

  /**
   * Specify the alignment of the logos on Mobile only
   * @type 'center' | 'left'
   * @defaultValue 'left'
   * @example mobileAlign="left"
   */
  mobileAlign?: 'center' | 'left'

  /**
   * Specify the breakpoint px value at which to switch from mobile to desktop layouts
   * @type number
   * @defaultValue 767
   * @example mobileBreakpoint={600}
   */
  mobileBreakpoint?: number

  /**
   * Change the scale of the padding on Mobile between the logos
   * @type number
   * @defaultValue 1
   * @example
   * mobilePaddingScale={1.2}
   * mobilePaddingScale={0.8}
   */
  mobilePaddingScale?: number

  /**
   * Change the scale of the padding on Mobile between the logos
   * @desc Will scale the logos proportionally down on mobile. You can guage this with your eye. 0 to 2 usually with do it, since this is a percentage value. so 1.1 would be 110% of the original.
   * @type number
   * @defaultValue 1
   * @example
   * mobileScale={1.2}
   * mobileScale={0.8}
   */
  mobileScale?: number

  /**
   * Specify the width of all logos as a group.
   * @desc This is important. Similar to initialWidth on the logos, you should insert the initial parentWidth from the desktop design file you are following, without white space.
   * @type number
   * @defaultValue 1000
   * @example
   * parentWidth={900}
   * parentWidth={976}
   */
  parentWidth?: number

  /**
   * Specify whether the logos should shift to the left or not.
   * @desc This is make the left side flush with content above or below it. Helpful on left aligned layouts.
   * @type boolean
   * @defaultValue false
   * @example withOffset={true}
   */
  withOffset?: boolean
}

export interface LogoGridNewProps {
  centeredOffset?: string
  firstLogoOffset?: number
  flushLeft?: string
  initialLogoWrapperWidth?: number
  initialPxOffset?: number
  lastLogoOffset?: number
  numOfColumns?: number
  offset?: string
  singleRow?: boolean
}

const defaultProps: LogoGridProps = {
  className: '',
  columns: 5,
  desktopAlign: 'center',
  desktopPaddingScale: 1,
  logos: [{ logo: 'https://placeimg.com/640/480/nature', initialWidth: 100 }],
  mobileAlign: 'left',
  mobileBreakpoint: 767,
  mobileScale: 1,
  mobilePaddingScale: 1,
  parentWidth: 1000,
  withOffset: false,
}

const LogoGrid: React.FunctionComponent<LogoGridProps> & { defaultProps: Partial<LogoGridProps> } = ({
  className,
  columns,
  desktopAlign,
  desktopPaddingScale,
  fillColor,
  logos,
  mobileAlign,
  mobileBreakpoint,
  mobileScale,
  mobilePaddingScale,
  parentWidth,
  withOffset,
  ...rest
}) => {
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

LogoGrid.defaultProps = defaultProps

export { LogoGrid }
