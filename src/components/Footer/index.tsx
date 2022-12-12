import { Icon } from '@iconify/react'
import ItemList from '../ItemList'
import { FooterStyle } from './styles'
import List from '../../styles/icon-list-style'
import socialList from '../../data/socialList'

export default function Footer() {
	return (
		<FooterStyle>
			<List>
				{socialList.map((item, key) => (
					<ItemList
						key={key}
						path={item.path}
						iconColor={item.color}
						title={item.name}
					>
						{item.icon}
					</ItemList>
				))}
			</List>
			<div>&copy; Todos os direitos reservados.</div>
		</FooterStyle>
	)
}
