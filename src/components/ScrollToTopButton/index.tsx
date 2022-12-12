import { Icon } from '@iconify/react'
import { useState } from 'react'
import { ButtonScrollStyle } from './styles'

export default function ScrollToTopButton() {
	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop
		scrolled > 700 ? setVisible(true) : setVisible(false)
	}

	typeof window !== 'undefined' &&
		window.addEventListener('scroll', toggleVisible)

	return (
		<ButtonScrollStyle
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			visible={visible}
		>
			<Icon icon="mdi:arrow-up-thick" />
			<span>Voltar ao topo</span>
		</ButtonScrollStyle>
	)
}
