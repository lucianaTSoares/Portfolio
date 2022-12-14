import styled from 'styled-components'

export const Container = styled.section`
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
	margin-bottom: 5rem;
	text-align: center;
`

export const ItemListSkill = styled.li<{ color: string }>`
	display: flex;
	flex: 0 0 calc(100% / 7);
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.03);
	border: 1px solid transparent;
	border-radius: 5px;
	width: 9.2rem;
	height: 9.4rem;
	gap: 15px;
	transition: 400ms linear;
	padding: 0 5px;

	p {
		font-size: 1rem;
		line-height: 130%;
		transition: 400ms linear;
	}

	svg {
		color: ${({ color }) => color && `rgb(${color})`};
	}

	&:hover {
		border-color: ${({ color }) => color && `rgb(${color})`};
		background-color: ${({ color }) => color && `rgba(${color}, 0.05)`};

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
