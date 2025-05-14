'use client'

import '@/components/assets/css/header.css'
import logo from '@/components/assets/img/logo/logo.png'

import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
	return (
		<header className='header'>
			<Link href={'/'}> <Image className='logo_img' src={logo} alt='logo' width={170} height={150}/> </Link>
		</header>
	)
}

