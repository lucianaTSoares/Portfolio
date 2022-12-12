import styled, { css } from 'styled-components'

export const TabListItem = styled.li<{ isActive: boolean }>`
	cursor: pointer;
	display: flex;
	line-height: 120%;

	div {
		width: 3px;
		opacity: ${({ isActive }) => (isActive ? 1 : 0)};
		transition: 250ms linear;
	}

	${({ isActive }) =>
		isActive &&
		css`
			div {
				background-color: ${(props) => props.theme.colors.tertiary};
			}
			color: ${(props) => props.theme.colors.tertiary};
		`}

	h3 {
		padding: 24px 32px;
		font-weight: 500;
		font-size: 1.125rem;
		transition: 250ms;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
		text-align: center;

		div {
			width: 100%;
			height: 3px;
		}
	}
`
