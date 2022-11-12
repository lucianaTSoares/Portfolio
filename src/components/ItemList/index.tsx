import { ItemStyle } from './styles'

interface PropTypes {
	path: string
	children: React.ReactNode
	iconColor?: string
	title?: string
	target?: string
}

export default function ItemList({
	path,
	children,
	iconColor,
	title,
	target = '_blank'
}: PropTypes) {
	return (
		<ItemStyle iconColor={iconColor} title={title}>
			<a href={path} target={target} rel="noreferrer">
				{children}
			</a>
		</ItemStyle>
	)
}
