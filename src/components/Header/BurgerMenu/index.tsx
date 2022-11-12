import { useState } from 'react'
import Nav from '../Nav'
import * as S from './styles'

export default function BurgerMenu() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<S.MenuToggle open={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
				<span></span>
				<span></span>
				<span></span>
			</S.MenuToggle>
			<Nav open={isOpen} />
		</>
	)
}
