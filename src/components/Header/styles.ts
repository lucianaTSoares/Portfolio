import styled from 'styled-components'

export const Container = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	border-bottom: 1px solid ${(props) => props.theme.colors.primary};
	font-size: 18px;
	z-index: 9999;

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 5rem;

		> a {
			font-family: 'Roboto Mono', monospace;
			font-size: 20px;

			span {
				color: ${(props) => props.theme.colors.tertiary};
				font-weight: 700;
			}
		}
	}

	ul {
		display: flex;
		gap: 1.5625rem;
		font-weight: 600;
	}
`
