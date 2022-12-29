import React, { useEffect, useState } from 'react'
import { TabListItem } from './styles'

interface PropTypes {
	activeTab: string
	title: string
	handleClick: (...args: string[]) => void
}

export default function TabPage({ activeTab, title, handleClick }: PropTypes) {
	const [isEqual, setIsEqual] = useState(false)

	useEffect(() => {
		activeTab === title ? setIsEqual(true) : setIsEqual(false)
	}, [activeTab, title])

	return (
		<TabListItem isActive={isEqual} onClick={() => handleClick(title)}>
			<div></div>
			<h3>{title}</h3>
		</TabListItem>
	)
}
