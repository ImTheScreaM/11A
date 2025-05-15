import { persist } from 'zustand/middleware'
import { create } from 'zustand/react'
import { PEOPLE } from '../api/users'

interface IUserStore {
	data:object[]
}

export const usePersoneStore = create<IUserStore>()(
	persist(
		set => ({
			data: PEOPLE,
		}),
		{
			name: 'userLocal',
		}
	)
)
