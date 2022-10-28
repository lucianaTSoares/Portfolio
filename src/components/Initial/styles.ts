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
		width: max-content;

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
		width: max-content;
		background-color: ${(props) => props.theme.colors.background};
	}
`

export const Infos = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	padding: 4rem;
	width: 100%;

	> div {
		display: flex;
		gap: 1.25rem;
		margin-top: 1.875rem;
	}
`
