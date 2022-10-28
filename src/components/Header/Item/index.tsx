import React from 'react'

interface PropTypes {
	children: React.ReactNode
}

export default function Item({ children }: PropTypes) {
	return <li>{children}</li>
}
