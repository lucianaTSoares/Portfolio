import { MouseEventHandler } from 'react'
import { ItemStyle } from './styles'

interface PropTypes {
	path: string
	children: React.ReactNode
	iconColor?: string
	title?: string
	target?: string
	handleClick?: MouseEventHandler<HTMLAnchorElement>
}

export default function ItemList({
	path,
	children,
	iconColor,
	title,
	target = '_blank',
	handleClick
}: PropTypes) {
	return (
		<ItemStyle iconColor={iconColor} title={title}>
			<a href={path} target={target} rel="noreferrer" onClick={handleClick}>
				{children}
			</a>
		</ItemStyle>
	)
}
