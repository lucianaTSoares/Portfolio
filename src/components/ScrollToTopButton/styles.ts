import styled from 'styled-components'

export const ButtonScrollStyle = styled.div<{ visible: boolean }>`
	width: fit-content;
	border-radius: 6px;
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	padding: 4px;
	align-items: center;
	font-weight: bold;
	background-color: ${(props) => props.theme.colors.background};
	border: 2px solid #928b95;
	display: ${({ visible }) => (visible ? 'flex' : 'none')};
	transition: 500ms;
	overflow: hidden;
	user-select: none;
	cursor: pointer;

	span {
		max-width: 0;
		opacity: 0;
		white-space: nowrap;
		transition: 500ms;
	}

	&:hover {
		span {
			max-width: 200px;
			opacity: 1;
			margin: 0 5px;
		}
	}

	svg {
		width: 25px;
		height: 25px;
	}
`
