import ItemList from '../../ItemList'
import navbarList from '../../../data/navbarList.json'
import * as S from './styles'
import { Icon } from '@iconify/react'

interface PropsType {
	open: boolean
}

export default function Nav({ open }: PropsType) {
	return (
		<S.Container open={open}>
			<S.StyledUl>
				{navbarList.map((item, key) => (
					<ItemList key={key} path={item.path} target="_self">
						{item.label}
					</ItemList>
				))}
			</S.StyledUl>
			<Icon icon="charm:sun" />
		</S.Container>
	)
}
