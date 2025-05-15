'use client'

import '@/components/assets/css/header.css'
import logo from '@/components/assets/img/logo/logo.png'

import { toggleTheme } from '@/core/store/toggleTheme'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
	const themeBoolean = toggleTheme(state => state.darkMode)
	const setWhite = toggleTheme(state => state.setWhite)
	const setDark = toggleTheme(state => state.setDark)

	

	return (
		<header className='header'>
			<div className='header_link'>
				<Link href={'/'}>
					{' '}
					<Image
						className='logo_img'
						src={logo}
						alt='logo'
						width={170}
						height={150}
					/>{' '}
				</Link>
			</div>
			<div>
				{themeBoolean ? (
					<button className='header-white_toggle' onClick={() => setDark()}>
						White
					</button>
				) : (
					<button className='header-dark_toggle' onClick={() => setWhite()}>
						Dark
					</button>
				)}
			</div>
		</header>
	)
}
