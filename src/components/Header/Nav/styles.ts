import styled from 'styled-components'

export const Container = styled.div<{ open: boolean }>`
	display: flex;
	gap: 1.5625rem;
	align-items: center;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		background-color: #000;
		transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: 100vw;
		padding-top: 4rem;
		transition: ${({ open }) =>
			open
				? 'all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1)'
				: 'all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1)'};
	}

	@media screen and (min-width: 768px) {
		svg {
			display: none;
		}
	}
`

export const StyledUl = styled.ul`
	display: flex;
	gap: 1.5625rem;
	font-weight: 600;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`
