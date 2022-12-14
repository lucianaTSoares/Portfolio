import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import BurgerMenu from './BurgerMenu'
import * as S from './styles'

export default function Header() {
	const [border, setBorder] = useState(false)
	const [isProjectPage, setIsProjectPage] = useState(false)
	const urlPage = 'http://localhost:3000/projects'
	let actualUrlPage = ''

	const toggleBorder = () => {
		const scrolled = document.documentElement.scrollTop

		if (scrolled > 20) {
			setBorder(true)
		} else if (scrolled <= 20) {
			setBorder(false)
		}
	}

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', toggleBorder)
		actualUrlPage = window.location.href
	}

	useEffect(() => {
		if (typeof window !== 'undefined' && actualUrlPage === urlPage) {
			setIsProjectPage(true)
		} else {
			setIsProjectPage(false)
		}
	}, [actualUrlPage])
	
	return (
		<S.Header hasBorder={border}>
			<div className="container">
				<nav>
					<S.Logo>
						Lu <span>&#10100;dev&#95;&#10101;</span>
					</S.Logo>
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
		</S.Header>
	)
}
