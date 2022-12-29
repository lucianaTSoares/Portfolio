import ItemList from '@components/ItemList'
import socialList from 'data/socialList'
import { ListSkillCard } from '../Home/Skills/styles'
import { FooterStyle } from './styles'

export default function Footer() {
	return (
		<FooterStyle>
			<ListSkillCard>
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
			</ListSkillCard>
			<div>&copy; Todos os direitos reservados.</div>
		</FooterStyle>
	)
}
