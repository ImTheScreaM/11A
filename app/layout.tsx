import GetTheme from '@/core/api/theme'
import QueryProvider from '@/core/provider/QueryProvider'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: '11A',
	description: '11A guard',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<GetTheme>
				<QueryProvider>
					{children}
				</QueryProvider>
			</GetTheme>
		</html>
	)
}
