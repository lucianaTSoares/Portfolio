import Item from './Item'
import { Container } from './styles'

export default function Header() {
	const items = [
		'Início',
		'Sobre mim',
		'Trajetória',
		'Projetos',
		'Skills',
		'Depoimentos'
	]
	return (
		<Container>
			<div className="container">
				<nav>
					<a href="#">
						Lu <span>&#10100;dev&#95;&#10101;</span>
					</a>
					<ul>
						{items.map((item, key) => (
							<Item key={key}>{item}</Item>
						))}
					</ul>
				</nav>
			</div>
		</Container>
	)
}
