import styled from 'styled-components'

export const FooterStyle = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 0 0;
	//border-top: 1px solid ${(props) => props.theme.colors.primary};
  gap: 20px;

	span {
		background-color: ${(props) => props.theme.colors.secondary};
		text-align: center;
		width: 100%;
		padding: 20px 0;
	}
`
