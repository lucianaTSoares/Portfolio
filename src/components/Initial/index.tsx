import { Icon } from '@iconify/react'
import Button from '../Button'
import ItemList from '../ItemList'
import { Container, Infos } from './styles'
import social from '../../data/social.json'
import List from '../../styles/icon-list-style'

export default function Initial() {
	return (
		<Container className="container">
			<Infos className="dots-background">
				<h1>
					Luciana Soares <span>Desenvolvedora Web.</span>
				</h1>
				<p>
					Apaixonada por proporcionar as <span>melhores experiências</span> para
					as pessoas com a tecnologia.
				</p>
				<List>
					{social.map((item, key) => (
						<ItemList
							key={key}
							path={item.path}
							iconColor={item.color}
							title={item.name}
						>
							<Icon icon={item.iconName} />
						</ItemList>
					))}
				</List>
				<div>
					<Button href="#" variant="secondary">
						Baixar CV
					</Button>
				</div>
			</Infos>
		</Container>
	)
}
