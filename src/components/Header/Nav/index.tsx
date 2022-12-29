import { Icon } from '@iconify/react'

import { NavContainer } from './styles'
import navbarList from 'data/navbarList.json'
import ItemList from '@components/ItemList'

interface PropsType {
	open: boolean
	onClose: () => void
}

export default function Nav({ open, onClose }: PropsType) {
	return (
		<NavContainer open={open}>
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
		</NavContainer>
	)
}
