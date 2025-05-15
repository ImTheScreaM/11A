import { createJSONStorage, persist } from 'zustand/middleware'
import { create } from 'zustand/react'

export const toggleTheme = create()(
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
			name:'setTheme'
		}
	)
)
