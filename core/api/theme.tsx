'use client'

import '../../app/globals.css'
import { toggleTheme } from '../store/toggleTheme'

export default function GetTheme({children}) {
	const data = toggleTheme((state) => state.darkMode)
	
	return (
		<body className={`${data ? 'white' : 'dark'} antialiased`}>
			{children}
		</body>
	)
}
