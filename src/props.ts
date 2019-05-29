import * as React from 'react'
interface LogoItem {
  initialWidth?: number
  logo?: React.ReactNode | string
}

export interface LogoGridProps {
  className?: string
  columns?: number
  desktopAlign?: 'center' | 'left'
  desktopPaddingScale?: number
  fillColor?: string
  logos?: LogoItem[]
  mobileAlign?: 'center' | 'left'
  mobileBreakpoint?: number
  mobilePaddingScale?: number
  mobileScale?: number
  parentWidth?: number
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
