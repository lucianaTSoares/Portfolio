import styled from 'styled-components'

export const ProjectListCard = styled.ul`
	margin-top: 2rem;
	display: flex;
	gap: 30px;
	flex-wrap: wrap;
	justify-content: center;

	@media screen and (max-width: 768px) {
		flex-wrap: nowrap;
		flex-direction: column;
	}
`

export const ProjectListItem = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 28px;
	background-color: rgba(255, 255, 255, 0.03);
	padding: 2.3rem;
	border-radius: 5px;
	flex: 1 0 calc(100% / 4);
	width: calc(100% / 3);
	border: 1px solid transparent;
	transition: 400ms linear;

	&:hover {
		border-color: ${({ theme }) => theme.colors.tertiary};
		background-color: rgba(145, 56, 255, 0.05);
	}

	div:first-child {
		display: flex;
		flex-direction: column;
		gap: 1.8rem;

		p {
			line-height: 160%;
		}
	}

	div:last-child {
		a {
			margin-top: 1rem;
		}

		a,
		p {
			display: block;
			color: #92909a;
			font-weight: 500;
			width: fit-content;
		}
	}

	@media screen and (max-width: 1200px) {
		flex: 1 0 auto;
	}

	@media screen and (max-width: 768px) {
		width: unset;
	}
`

export const Badges = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;

	li {
		font-weight: 600;
		font-size: 0.9rem;
		border-radius: 20px;
		padding: 10px 15px;
		white-space: nowrap;
		background-color: rgba(119, 41, 215, 0.14);
		color: ${({ theme }) => theme.colors.tertiary};
	}
`
