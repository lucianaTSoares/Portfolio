import Link from 'next/link'

interface PropTypes {
	children: React.ReactNode
	path: string
}

export default function RouterLink({ children, path }: PropTypes) {
	return (
		<Link href={path} passHref>
			<a>{children}</a>
		</Link>
	)
}
