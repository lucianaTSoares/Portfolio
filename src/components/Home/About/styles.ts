import Image from 'next/image'
import styled from 'styled-components'

export const AboutContainer = styled.section`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h2 {
		margin-bottom: 3rem;
	}

	> div {
		> div {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	p {
		line-height: 160%;
		width: 60%;
		text-align: justify;

		br {
			content: '';
			display: block;
			margin: 1rem;
		}
	}

	@media screen and (max-width: 1250px) {
		> div {
			> div {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				gap: 50px;
			}

			p {
				width: 100%;
				text-align: left;
			}
		}
	}
`

export const ImageStyle = styled.div`
	filter: drop-shadow(1px 1px 8px #000);

	@media screen and (max-width: 1250px) {
		display: none !important;
	}
`
