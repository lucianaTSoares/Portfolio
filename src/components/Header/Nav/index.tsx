import ItemList from '../../ItemList'
import navbarList from '../../../data/navbarList.json'
import * as S from './styles'
import { Icon } from '@iconify/react'

interface PropsType {
	open: boolean
	onClose: () => void
}

export default function Nav({ open, onClose }: PropsType) {
	return (
		<S.Container open={open}>
			<ul>
				{navbarList.map((item, key) => (
					<ItemList
						key={key}
						path={item.path}
						target="_self"
						handleClick={() => onClose()}
					>
						{item.label}
					</ItemList>
				))}
			</ul>
			<Icon icon="charm:sun" />
		</S.Container>
	)
}
