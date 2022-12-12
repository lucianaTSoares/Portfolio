import Link from 'next/link'
import React from 'react'
import { ButtonStyle } from './styles'

interface PropTypes {
	href: string
	target?: string
	children: React.ReactNode
	variant?: string
}

export default function Button({
	href,
	target = '_blank',
	children,
	variant = 'primary'
}: PropTypes) {
	return (
		<Link href={href} passHref>
			<ButtonStyle variant={variant} href={href} target={target}>
				{children}
			</ButtonStyle>
		</Link>
	)
}
