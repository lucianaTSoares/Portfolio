import { ItemStyle } from './styles'

interface PropTypes {
	path?: string
	children?: React.ReactNode
	iconColor?: string
	title?: string
}

export default function ItemList({
	path,
	children,
	iconColor,
	title
}: PropTypes) {
	return (
		<ItemStyle iconColor={iconColor} title={title}>
			<a href={path} target="_blank" rel="noreferrer">
				{children}
			</a>
		</ItemStyle>
	)
}
