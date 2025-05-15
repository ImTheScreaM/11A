'use client'

import '@/components/assets/css/personePage.css'

import { Header } from '@/components/pages/header'
import { usePersoneStore } from '@/core/store/userCreate'

import gsap from 'gsap'
import Image, { StaticImageData } from 'next/image'
import { use, useEffect, useRef, useState } from 'react'

interface IUsePage {
	id?: number
	name?: string | object | undefined
	information?: object | undefined
	img?: object | undefined
	galery?: object | undefined
	src?: string
}

interface IInformation {
	progress?: string
	hobby?: string
	about?: string
	nicknames?: string
}

interface IGetUser {
	name?: string
	information?: IInformation
	img?: StaticImageData
	galery?: []
}

export default function UserPageDetails({
	params,
}: {
	params: Promise<{ usersId: number }>
}) {
	const [open, setOpen] = useState(false)
	const box = useRef(null)

	const data = usePersoneStore(state => state.data)
	const userId = use(params)

	useEffect(() => {
		if (typeof window != 'undefined') {
			gsap.fromTo(
				box.current,
				{ opacity: 0, x: -150, y: -100 },
				{ opacity: 1, x: 0, y: 0, duration: 1, ease: 'power2.in' }
			)
		}
	}, [])

	function getUserInformation(): IUsePage | undefined {
		const ID = userId?.usersId
		if (!ID) return
		const result = data.find((item: IUsePage) => item.id == userId.usersId)
		return result
	}

	const { name, information, img, galery } = getUserInformation() as IGetUser

	if (!getUserInformation()) {
		return <>Loading...</>
	}

	return (
		<div className='container_persone_page'>
			<Header />
			<section ref={box}>
				<div className='persone_page-title'>
					<div className='left_title-page'>
						<div className='left_title-page_top'>
							<span style={{ fontSize: '60px' }}>{name?.split(' ')[0]}</span>
							<span style={{ fontSize: '40px' }}>{name?.split(' ')[1]}</span>
						</div>
						<div className='left_title-page_bottom'>
							<span>Выпускник 11 А класс ОГБОУ Вейделевская СОШ</span>
						</div>
					</div>
					<div className='right_title-page'>
						<Image
							src={img?.src || 'null'}
							id='title_img'
							alt='right_page'
							width={50}
							height={50}
							style={{ minHeight: '344px', maxHeight: '344px' }}
						/>
					</div>
				</div>

				<div className='container_information'>
					<span style={{ fontSize: '40px' }}>Характеристики</span>
					<div className='information'>
						<ul className='container_item'>
							<li className='item_progress'>
								<span style={{ fontSize: '25px' }}>Успеваемость:</span>
								<span>{information?.progress}</span>
							</li>
							<li className='item_hobby'>
								<span style={{ fontSize: '25px' }}>Хобби:</span>
								<span>{information?.hobby}</span>
							</li>
							<li className='item_about'>
								<span style={{ fontSize: '25px' }}>Небольшая информация:</span>
								<span>{information?.about}</span>
							</li>
						</ul>
					</div>
				</div>

				<div className='container_gallery'>
					{galery ? (
						<div className='gallery'>
							<span style={{ fontSize: '40px' }}>Галерея</span>
							<div className='gallery_img'>
								{galery.map((item: string, index: number) => (
									<div key={index}>
										<Image
											src={item}
											width={344}
											id='galery-image'
											height={344}
											alt='people'
										/>
									</div>
								))}
							</div>
						</div>
					) : null}
				</div>

				{information?.nicknames ? (
					<div className='container_nicknames'>
						<div className='nicknames'>
							<span
								onClick={() => setOpen(!open)}
								className='title_nicknames'
								style={{ fontSize: '40px' }}
							>
								Кликухи
								<svg
									className={!open ? 'rotate_arrow' : ''}
									width='44'
									height='44'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M16.594 8.578L18 9.984L12 15.984L6 9.984L7.406 8.578L12 13.172L16.594 8.578Z'
										fill='#fff'
									></path>
								</svg>
							</span>
							<ul>
								<li>
									<span className={open ? 'items_nicknames' : 'hide_items'}>
										{information.nicknames}
									</span>
								</li>
							</ul>
						</div>
					</div>
				) : null}
			</section>
		</div>
	)
}
