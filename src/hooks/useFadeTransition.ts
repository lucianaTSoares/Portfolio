'use client'

import { useState, useEffect } from 'react'
import { TRepository } from '@/types'

export function useFadeTransition(list: TRepository[], msDelay: number) {
	const [count, setCount] = useState(0)

	useEffect(() => {
		let counter = count
		const interval = setInterval(() => {
			if (counter >= list.length) {
				clearInterval(interval)
			} else {
				setCount((count) => count + 1)
				counter++
			}
		}, msDelay)
		return () => clearInterval(interval)
	}, [count, list, msDelay])

	return count
}