import { DefaultTheme } from 'styled-components'

const calcRem = (size: number) => `${size / 16}rem`

const fontSizes = {
	small: calcRem(14),
	base: calcRem(16),
	lg: calcRem(18),
	xl: calcRem(20),
	xxl: calcRem(22),
	xxxl: calcRem(24),
	titleSize: calcRem(45)
}

const deviceSizes = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '450px',
	tablet: '768px',
	tabletL: '1024px',
	NoteBook: '1440px'
}

const colors = {
	black: '#000',
	white: '#fff',
	gray_b: '#333',
	gray_w: '#ddd',
	primary: '#16A085',
	secondary: '#1ABC9C'
}

const device = {
	mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
	mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
	mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
	tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
	tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
	NoteBook: `only screen and (max-width: ${deviceSizes.NoteBook})`
}

const theme: DefaultTheme = {
	fontSizes,
	colors,
	deviceSizes,
	device
}

export default theme