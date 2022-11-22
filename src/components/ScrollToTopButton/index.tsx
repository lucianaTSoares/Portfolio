import { Icon } from '@iconify/react'
import { useState } from 'react'
import { ButtonScrollStyle } from './styles'

export default function ScrollToTopButton() {
	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop

		if (scrolled > 20) {
			setVisible(true)
		} else if (scrolled <= 20) {
			setVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	typeof window !== 'undefined' &&
		window.addEventListener('scroll', toggleVisible)

	return (
		<ButtonScrollStyle onClick={() => scrollToTop()} visible={visible}>
			<Icon icon="mdi:arrow-up-thick" />
			<span>Voltar ao topo</span>
		</ButtonScrollStyle>
	)
}
