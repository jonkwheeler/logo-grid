# LogoGrid

## Usage 🔌

~~~js
import LogoGrid from 'logo-grid'
~~~

## Examples

The component takes an prop `logos` which is an array of objects, here called `logoList` as an example.

~~~js
import LogoGrid from 'logo-grid'
import { Stripe, AirBnbIcon, Amazon } from '@my-awesome-svgs'

export const logoList = [
  { logo: Stripe, initialWidth: 108 },
  { logo: 'https://placeimg.com/640/480/nature', initialWidth: 85 },
  { logo: AirBnbIcon, initialWidth: 52 },
  { logo: Amazon, initialWidth: 136 },
  { logo: 'https://placeimg.com/640/480/nature', initialWidth: 75 },
]

<LogoGrid logos={logoList} />
~~~

### Props

| prop               | type               | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `logos`            | `array`            | `logos` takes an array of objects which need a `logo` key and optional `initialWidth` key. The `logo` key can take either a React element, like an SVG, or a string for the image src. While it is not required, it is highly suggested to supply an `initialWidth` for all logos. This is the initial width from the desktop design ~1600px wide. If a logo on the design file is 120px, then that is the `initialWidth: 120`. From there, the logo will scale up and down to it's container, and even on mobile. |
| `parentWidth`      | `number`           | This  is important. Similar to `initialWidth` on the logos, you should insert the initial `parentWidth` from the desktop design file you are following.                                                                                                                                                                                                                                                                                                                                                            |
| `fillColor`        | `string`           | Change the fill color of the Svg logos. If an Svg path has the className="do-not-fill", this will not be.                                                                                                                                                                                                                                                                                                                                                                                                          |
| `columns`          | `number`           | This actually only changes the amount on desktop. The current spec only allows for 2 columns on mobile.                                                                                                                                                                                                                                                                                                                                                                                                            |
| `withOffset`       | `boolean`          | This is make the left side flush with content above or below it. Helpful on left aligned layouts.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `columns`          | `number`           | This actually only changes the amount on desktop. The current spec only allows for 2 columns on mobile.                                                                                                                                                                                                                                                                                                                                                                                                            |
| `mobileAlign`      | `center` or `left` | Allows for "left" and "center", and changes the alignment of the logos on mobile.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `mobileScale`      | `number`           | Will scale the logos proportionally down on mobile. You can guage this with your eye. `0` to `2` usually with do it, since this is a percentage value. so `1.1` would be `110%` of the original.                                                                                                                                                                                                                                                                                                                   |
| `mobileBreakpoint` | `number`           | Defaults to 767. This means 1 px under the tablet it'll adjust to a 2 column layout on mobile.                                                                                                                                                                                                                                                                                                                                                                                                                     |





