import SocialItem from './SocialItem'
import { FooterStyle } from './styles'

export default function Footer() {
	return (
		<FooterStyle>
			<div>
				<p>Veja minhas rede sociais!</p>
				<ul>
					<SocialItem path=''>
				</ul>
			</div>
			<span>2022 - Feito com amor &hearts;</span>
		</FooterStyle>
	)
}
