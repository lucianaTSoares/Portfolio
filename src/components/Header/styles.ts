import styled from 'styled-components'

export const HeaderStyle = styled.header<{ hasBorder: boolean }>`
	position: fixed;
	top: 0;
	width: 100%;
	box-shadow: ${({ hasBorder }) =>
		hasBorder ? `0px 0px 17px 0px #000` : undefined};
	z-index: 9999;
	background-color: ${(props) => props.theme.colors.background};

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 6.1rem;

		svg {
			font-size: 1.68rem;
		}

		div:last-child {
			@media screen and (max-width: 905px) {
				display: none;
			}
		}
	}
`

export const Logo = styled.p`
	font-family: 'Roboto Mono', monospace;
	font-size: 22px;
	line-height: 23px;
	user-select: none;

	span {
		display: block;
		color: ${(props) => props.theme.colors.tertiary};
		font-weight: 700;
	}
`
