import styled, { css } from 'styled-components'

export const MenuToggle = styled.div<{ open: boolean }>`
	z-index: 1;
	user-select: none;

	span {
		display: block;
		width: 33px;
		height: 4px;
		background: ${(props) => props.theme.colors.text};
		border-radius: 3px;
		z-index: 1;
		transition: all 0.5s ease;

		${({ open }) => css`
			&:not(:last-child) {
				margin-bottom: ${!open ? '7px' : undefined};
			}

			&:first-child {
				transform: ${open
					? 'rotate(45deg) translate(0, 6px)'
					: 'rotate(0) translate(0)'};
			}

			&:nth-child(2) {
				opacity: ${!open ? '1' : '0'};
				transform: ${open ? 'rotate(0deg) scale(0.2, 0.2)' : 'scale(1)'};
			}

			&:last-child {
				transform: ${open
					? 'rotate(-45deg) translate(0, -6px)'
					: 'rotate(0) translate(0)'};
			}
		`}
	}

	@media screen and (min-width: 768px) {
		display: none;
	}
`
