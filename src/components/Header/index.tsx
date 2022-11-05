import { Icon } from '@iconify/react'
import ItemList from '../ItemList'
import { Container } from './styles'

export default function Header() {
	const items = ['Sobre mim', 'Trajetória', 'Projetos', 'Skills', 'Depoimentos']

	return (
		<Container>
			<div className="container">
				<nav>
					<p>
						Lu <span>&#10100;dev&#95;&#10101;</span>
					</p>
					<ul>
						{items.map((item, key) => (
							<ItemList key={key}>{item}</ItemList>
						))}
					</ul>
					<Icon icon="charm:sun" />
				</nav>
			</div>
		</Container>
	)
}
