import { Icon } from '@iconify/react'
import BurgerMenu from './BurgerMenu'
import * as S from './styles'

export default function Header() {
	return (
		<S.Header>
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
