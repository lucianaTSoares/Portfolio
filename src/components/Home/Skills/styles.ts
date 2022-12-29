import styled from 'styled-components'

export const SkillsContainer = styled.section`
	min-height: 100vh;
	padding-top: 10rem;

	h2,
	h3 {
		margin-bottom: 2rem;
	}

	h3 {
		text-align: center;
		font-weight: 500;
	}
`

export const ListSkillCard = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 13px;
	text-align: center;
`

export const ItemListSkill = styled.li<{ color: string }>`
	background-color: rgba(255, 255, 255, 0.03);
	width: 9.2rem;
	height: 9.4rem;
	display: flex;
	flex: 0 0 calc(100% / 7);

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 1px solid transparent;
		border-radius: 5px;
		transition: all 400ms linear;
		height: 100%;
		width: 100%;
		padding: 0 5px;
		gap: 15px;
	}

	p {
		font-size: 1rem;
		line-height: 130%;
		transition: 400ms linear;
	}

	svg {
		color: ${({ color }) => color && `rgb(${color})`};
	}

	&:hover {
		div {
			border-color: ${({ color }) => color && `rgb(${color})`};
			background-color: ${({ color }) => color && `rgba(${color}, 0.05)`};
		}

		p {
			color: ${({ color }) => color && `rgb(${color})`};
		}
	}

	@media screen and (max-width: 1300px) {
		flex: 0 0 auto;
	}

	@media screen and (max-width: 693px) {
		flex: 1 0 calc(100% / 3);
		/* flex-direction: row;
		height: 6rem;
		width: 100%;
		justify-content: start;
		padding-left: 1.3rem; */

		svg {
			width: 40px;
			height: 40px;
		}
	}
`
