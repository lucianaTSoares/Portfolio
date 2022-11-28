import styled from 'styled-components'

export const Container = styled.div`
	margin-top: 2rem;
	min-height: 100vh;

	h2,
	h3 {
		margin-bottom: 2rem;
	}

	h3 {
		text-align: center;
		font-weight: 500;
	}

	@media screen and (min-width: 576px) {
		h2 {
			padding: 4rem;
		}
	}
`

export const ListSkillCard = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 13px;
	margin-bottom: 5rem;
	width: 100%;

	li {
		display: flex;
		flex: 0 0 calc(100% / 6);
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 2px solid #ffffff29;
		border-radius: 5px;
		width: 12rem;
		height: 12rem;
		gap: 15px;
		transition: 600ms;

		&:hover {
			border-color: #f3eff5db;

			svg {
				color: ${({ theme }) => theme.colors.icon};
				transition: 600ms;
			}
		}

		@media screen and (max-width: 1200px) {
			flex: 0 0 auto;
		}

		@media screen and (max-width: 576px) {
			flex-direction: row;
			height: 6rem;
			width: 100%;
			justify-content: start;
			padding-left: 1.3rem;

			svg {
				width: 40px;
				height: 40px;
			}
		}
	}
`
