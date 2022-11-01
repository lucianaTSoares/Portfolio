import React from 'react'

interface PropTypes {
	path?: string
	tagImage?: React.ReactNode
}

export default function SocialItem({ path, tagImage }: PropTypes) {
	return (
		<li>
			<a href={path}>
				{tagImage}
			</a>
		</li>
	)
}
