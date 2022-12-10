import { ReactElement, useState } from 'react'
import PropTypes from 'prop-types'
import TabPage from './TabPage'
import { TabStyle, TabBodyStyle } from './styles'

type ChildrenObjectType = {
	'data-title': string
	children: React.ReactNode
}

interface PropTypes {
	children: ReactElement<ChildrenObjectType>[]
}

export default function Tabs({ children }: PropTypes) {
	const [titleOfActiveTab, setLabelOfActiveTab] = useState(
		children[0].props['data-title']
	)

	return (
		<TabStyle>
			<ul>
				{children.map((child) => {
					const dataTitle = child.props['data-title']
					return (
						<TabPage
							activeTab={titleOfActiveTab}
							key={dataTitle}
							title={dataTitle}
							handleClick={(tab: string) => setLabelOfActiveTab(tab)}
						/>
					)
				})}
			</ul>
			<TabBodyStyle>
				{children.map((child) => {
					if (child.props['data-title'] !== titleOfActiveTab) return undefined
					return child.props.children
				})}
			</TabBodyStyle>
		</TabStyle>
	)
}
