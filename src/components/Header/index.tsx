import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import BurgerMenu from './BurgerMenu'

import { HeaderStyle, Logo } from './styles'

export default function Header() {
	const [border, setBorder] = useState(false)
	const [isProjectPage, setIsProjectPage] = useState(false)
	const [projectUrlPage, setProjectUrlPage] = useState('')
	const windowCondition = typeof window !== 'undefined'
	let actualUrlPage = ''

	const toggleBorder = () => {
		const scrolled = document.documentElement.scrollTop

		if (scrolled > 10) {
			setBorder(true)
		} else {
			setBorder(false)
		}
	}

	if (windowCondition) {
		window.addEventListener('scroll', toggleBorder)
		actualUrlPage = `${window.location.href}`
	}

	useEffect(() => {
		windowCondition && setProjectUrlPage(`${window.location.href}projects`)
	}, [])

	useEffect(() => {
		if (windowCondition && projectUrlPage === actualUrlPage) {
			setIsProjectPage(true)
		} else {
			setIsProjectPage(false)
		}
	}, [actualUrlPage])

	return (
		<HeaderStyle hasBorder={border}>
			<div className="container">
				<nav>
					<Logo>
						Lu <span>&#10100;dev&#95;&#10101;</span>
					</Logo>
					{!isProjectPage && (
						<>
							<BurgerMenu />
							<div>
								<Icon icon="charm:sun" />
							</div>
						</>
					)}
				</nav>
			</div>
		</HeaderStyle>
	)
}
