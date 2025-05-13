import { persist } from 'zustand/middleware'
import { create } from 'zustand/react'
import { PEOPLE } from '../api/users'

export const usePersoneStore = create()(
	persist(
		set => ({
			data: PEOPLE,
		}),
		{
			name: 'userLocal',
		}
	)
)
