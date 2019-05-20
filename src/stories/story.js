import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { color, number, boolean, select } from '@storybook/addon-knobs/react'
import { LogoGrid } from '../LogoGrid'

import notes from '../docs/logo-grid.md'

const randomNumber = (min, max) => Math.floor(Math.random() * (+max - +min) + +min)

storiesOf('LogoGrid', module).add(
  'Example',
  () => {
    let logos = []
    const numLogos = number('logos', 5)

    for (let i = 0; i < numLogos; i++) {
      logos.push({
        logo: `https://placeimg.com/640/${randomNumber(640, 320)}/nature`,
        initialWidth: randomNumber(60, 120),
      })
    }

    return (
      <div style={{ maxWidth: 1000, margin: 'auto' }}>
        <LogoGrid
          logos={logos}
          fillColor={color('fillColor')}
          columns={number('columns', 5)}
          parentWidth={number('parentWidth', 1000)}
          withOffset={boolean('withOffset')}
          desktopAlign={select('desktopAlign', ['center', 'left'], 'center')}
          mobileAlign={select('mobileAlign', ['center', 'left'], 'left')}
          mobileScale={number('mobileScale', 1)}
          mobileBreakpoint={number('mobileBreakpoint', 767)}
          desktopPaddingScale={number('desktopPaddingScale', 1)}
          mobilePaddingScale={number('mobilePaddingScale', 1)}
        />
      </div>
    )
  },
  {
    notes: { markdown: notes },
  },
)
