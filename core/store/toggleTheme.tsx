import { createJSONStorage, persist } from 'zustand/middleware'
import { create } from 'zustand/react'

export const toggleTheme = create()(
	persist(
		set => ({
			darkMode: true,
			setDark: () => {
				set(state => ({ darkMode: false }))
			},
			setWhite: () => {
				set(state => ({ darkMode: true }))
			},
		}),
		{
			name:'setTheme'
		}
	)
)
