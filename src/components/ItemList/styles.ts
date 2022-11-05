import styled from 'styled-components'

export const ItemStyle = styled.li<{ iconColor?: string }>`
	&:hover {
		svg {
			color: ${({ iconColor }) => iconColor};
			transition: 350ms;
		}
	}
`
