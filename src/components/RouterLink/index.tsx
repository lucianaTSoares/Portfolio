import Link from 'next/link'

interface PropTypes {
	children: React.ReactNode
	path: string
}

export default function RouterLink({ children, path }: PropTypes) {
	return (
		<Link href={path} passHref>
			<a
				style={{
					fontWeight: 'bold',
					display: 'flex',
					alignItems: 'center',
					width: 'fit-content'
				}}
			>
				{children}
			</a>
		</Link>
	)
}
