import { Icon } from '@iconify/react'
import ItemList from '../ItemList'
import { FooterStyle } from './styles'
import social from '../../data/social.json'
import List from '../../styles/icon-list-style'

export default function Footer() {
	return (
		<FooterStyle>
			<div>
				<p>Veja minhas rede sociais e entre em contato comigo!</p>
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
			</div>
			<span>2022 - Feito com amor &hearts;</span>
		</FooterStyle>
	)
}
