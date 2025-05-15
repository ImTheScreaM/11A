'use client'

import { ReactNode } from 'react'
import '../../app/globals.css'
import { toggleTheme } from '../store/toggleTheme'

export default function GetTheme({children,}:{children:ReactNode}) {
	const data = toggleTheme((state) => state.darkMode)
	
	return (
		<body className={`${data ? 'white' : 'dark'} antialiased`}>
			{children}
		</body>
	)
}
