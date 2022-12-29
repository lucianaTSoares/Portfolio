import styled from 'styled-components'

export const ProjectsContainer = styled.section`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 9rem 0;

	> div {
		h2 {
			margin-bottom: 2rem;
		}

		> div {
			margin-top: 4rem;
			display: flex;
			justify-content: center;
		}
	}
`
