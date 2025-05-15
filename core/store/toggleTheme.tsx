import { persist } from 'zustand/middleware'
import { create } from 'zustand/react'

interface IToggleTheme {
	darkMode: boolean
	setDark: () => void
	setWhite: () => void
}

export const toggleTheme = create<IToggleTheme>()(
	persist(
		set => ({
			darkMode: true,
			setDark: () => {
				set(() => ({ darkMode: false }))
			},
			setWhite: () => {
				set(() => ({ darkMode: true }))
			},
		}),
		{
			name: 'setTheme',
		}
	)
)
