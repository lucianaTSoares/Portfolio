import { Icon } from '@iconify/react'
import { useState } from 'react'
import BurgerMenu from './BurgerMenu'
import * as S from './styles'

export default function Header() {
	const [border, setBorder] = useState(false)

	const toggleBorder = () => {
		const scrolled = document.documentElement.scrollTop

		if (scrolled > 20) {
			setBorder(true)
		} else if (scrolled <= 20) {
			setBorder(false)
		}
	}

	typeof window !== 'undefined' &&
		window.addEventListener('scroll', toggleBorder)

	return (
		<S.Header hasBorder={border}>
			<div className="container">
				<nav>
					<S.Logo>
						Lu <span>&#10100;dev&#95;&#10101;</span>
					</S.Logo>
					<BurgerMenu />
					<div>
						<Icon icon="charm:sun" />
					</div>
				</nav>
			</div>
		</S.Header>
	)
}
