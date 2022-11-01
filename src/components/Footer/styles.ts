import styled from 'styled-components'

export const FooterStyle = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	border-top: 1px solid ${(props) => props.theme.colors.primary};
  gap: 20px;

	div {
		padding: 0;
	}

	span {
		border-top: 1px solid ${(props) => props.theme.colors.primary};
	}
`
