import styled, { css } from 'styled-components'

interface PropTypes {
	variant: string
}

export const ButtonStyle = styled.a`
	width: 10.9rem;
	border-radius: 10px;
	padding: 15px;
	font-weight: 600;
	display: flex;
  justify-content: center;
  align-items: center;

	&:hover {
		cursor: pointer;
	}

	${({ variant }: PropTypes) =>
		variant === 'primary' &&
		css`
			background-image: linear-gradient(
				to right,
				${(props) => props.theme.colors.primary},
				${(props) => props.theme.colors.tertiary}
			);
		`}
	${({ variant }: PropTypes) =>
		variant === 'secondary' &&
		css`
			background: linear-gradient(
						${(props) => props.theme.colors.background},
						${(props) => props.theme.colors.background}
					)
					padding-box,
				linear-gradient(
						to right,
						${(props) => props.theme.colors.primary},
						${(props) => props.theme.colors.tertiary}
					)
					border-box;
			border: 2px solid transparent;
		`}
`
