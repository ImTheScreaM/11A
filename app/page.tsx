'use client'
import { Header } from '@/components/pages/header'
import { Main } from '@/components/pages/main'
import { toggleTheme } from '@/core/store/toggleTheme'
import './globals.css'

export default function Home() {
	const theme = toggleTheme(state => state.darkMode)

	return (
		<div>
			<Header />
			<Main />
		</div>
	)
}
