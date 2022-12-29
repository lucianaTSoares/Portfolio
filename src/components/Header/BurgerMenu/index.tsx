import { useState } from 'react'
import Nav from '../Nav'
import { MenuToggle } from './styles'

export default function BurgerMenu() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<MenuToggle open={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
				<span></span>
				<span></span>
				<span></span>
			</MenuToggle>
			<Nav open={isOpen} onClose={() => setIsOpen(!isOpen)} />
		</>
	)
}
