import styled, { css } from 'styled-components'

export const TabListItem = styled.li<{ isActive: boolean }>`
	cursor: pointer;
	display: flex;

	div {
		width: 3px;
		opacity: ${({ isActive }) => (isActive ? 1 : 0)};
		transition: 150ms linear;
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
		font-size: 1rem;
		font-weight: 500;
	}
`
