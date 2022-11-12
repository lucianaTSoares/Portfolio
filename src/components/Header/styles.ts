import styled from 'styled-components'

export const Header = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	//border-bottom: 1px solid ${(props) => props.theme.colors.primary};
	font-size: 18px;
	z-index: 9999;
	background-color: ${(props) => props.theme.colors.background};

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 7.1875rem;

		svg {
			font-size: 25px;
		}

		div:last-child {
			@media screen and (max-width: 765px) {
				display: none;
			}
		}
	}
`

export const Logo = styled.p`
	font-family: 'Roboto Mono', monospace;
	font-size: 20px;

	span {
		display: block;
		color: ${(props) => props.theme.colors.tertiary};
		font-weight: 700;
	}
`
