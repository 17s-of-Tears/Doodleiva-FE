import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		fontSizes: {
			small: string
			base: string
			lg: string
			xl: string
			xxl: string
			xxxl: string
			titleSize: string
		}
		deviceSizes: {
			mobileS: string
			mobileM: string
			mobileL: string
			tablet: string
			tabletL: string
			NoteBook: string
		}
		colors: {
			black: string
			white: string
			gray_b: string
			gray_w: string
			primary: string
			secondary: string
		}
		device: {
			mobileS: string
			mobileM: string
			mobileL: string
			tablet: string
			tabletL: string
			NoteBook: string
		}
	}
}
