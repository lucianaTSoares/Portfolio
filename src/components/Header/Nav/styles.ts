import styled from 'styled-components'

export const NavContainer = styled.div<{ open: boolean }>`
	display: flex;
	gap: 2.1rem;
	align-items: center;
	justify-content: center;

	ul {
		display: flex;
		gap: 2.1rem;
		font-weight: 600;
	}

	@media screen and (max-width: 905px) {
		position: fixed;
		top: 0;
		right: ${({ open }) => (!open ? '-60rem' : '0')};
		transition: 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
		flex-direction: column;
		background-color: #000;
		width: 100vw;
		height: 100vh;

		ul {
			flex-direction: column;
			align-items: center;
		}
	}

	@media screen and (min-width: 905px) {
		svg {
			display: none;
		}
	}
`
