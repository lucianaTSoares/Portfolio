import styled from 'styled-components'

export const Container = styled.section`
	height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;

	h1 {
		font-size: 2rem;
		line-height: 2.25rem;

		> span {
			display: block;
			font-style: italic;
			font-weight: 400;
			color: ${(props) => props.theme.colors.primary};
			background-color: ${(props) => props.theme.colors.background};
		}
	}

	p {
		font-size: 1.25rem;
		line-height: 1.5rem;
		background-color: ${(props) => props.theme.colors.background};

		span {
			color: ${(props) => props.theme.colors.tertiary};
			font-weight: 600;
		}
	}

	ul {
		justify-content: flex-start;
		margin-top: 0;
	}
`

export const Infos = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	width: 100%;
	
	> div {
		display: flex;
		gap: 1.25rem;
		margin-top: 1.875rem;
	}

	@media screen and (min-width: 576px) {
		padding: 4rem;
	}
`
