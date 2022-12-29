import styled from 'styled-components'

export const ExperianceContainer = styled.section`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h2 {
		margin-bottom: 3rem;
	}

	@media screen and (max-width: 768px) {
		padding-top: 8rem;
		display: block;
	}
`
