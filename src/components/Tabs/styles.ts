import styled from 'styled-components'

export const TabStyle = styled.div`
	display: flex;

	ul {
		width: 21%;
	}
`

export const TabBodyStyle = styled.div`
	width: 75%;
	margin-left: 20px;
	text-align: justify;
	line-height: 160%;

	div {
		margin-bottom: 1.875rem;
		display: flex;
		justify-content: space-between;
	}

	> p:last-child {
		margin-top: 1rem;
		span {
			color: ${(props) => props.theme.colors.tertiary};
			font-weight: 500;
		}
	}
`
