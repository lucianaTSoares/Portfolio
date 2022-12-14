import styled from 'styled-components'

export const TabStyle = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10px;

	ul {
		width: 27%;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		height: initial;

		ul {
			width: initial;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 1.875rem;
		}
	}
`

export const TabBodyStyle = styled.div`
	width: 85%;
	line-height: 160%;
	background-color: rgba(255, 255, 255, 0.04);
	border-radius: 7px;
	padding: 1.5rem;

	div {
		margin-bottom: 1.875rem;
		display: flex;
		justify-content: space-between;

		h4 {
			font-size: 1.25rem;
		}

		p {
			font-weight: 600;
			color: #7c7a87;
			font-size: 1rem;
			text-align: right;
		}
	}

	> p:last-child {
		margin-top: 1.5rem;
		font-weight: 500;
		span {
			color: ${(props) => props.theme.colors.tertiary};
			font-weight: 500;
		}
	}

	@media screen and (max-width: 992px) {
		width: initial;

		div {
			flex-direction: column;
			
			p {
				text-align: left;
			}
		}
	}
`
