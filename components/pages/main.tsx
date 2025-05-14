'use client'

import '@/components/assets/css/main.css'
import { LeftTriger, RightTriger } from '@/core/hooks/scrollTriger'
import { usePersoneStore } from '@/core/store/userCreate'
import { IUser } from '@/core/types/types'
import { ImgSlider } from '../ui/swiper/swiper'

import gsap from 'gsap'
import Link from 'next/link'
import { useEffect, useRef } from 'react'


export const Main = () => {
	const name = usePersoneStore(state => state.data)
	const box = useRef(null)

	useEffect(() => {
		if (typeof window != 'undefined') {
			gsap.fromTo(
				box.current,
				{ opacity: 0, x: -150 },
				{ opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
			)
		}
	}, [])

	return (
		<main className='container_main'>
			<div className='entry' ref={box}>
				<h1>Выпускники 2025 года (ОГБОУ "Вейделевская СОШ")</h1>
				<h3>
					Добро пожаловать на сайт наших выпускников! Этот ресурс создан, чтобы
					хранить воспоминания, кто учился вместе в 2025 году в нашей родной
					школе. Здесь вы найдете историю нашего класса,фотогалереи и личные
					страницы одноклассников.
				</h3>
			</div>

			<RightTriger>
				<div className='container_about_site'>
					<div className='about_site'>
						<span className='about_site_title' style={{ fontSize: '45px' }}>
							О чем этот сайт?
						</span>
						<div className='about_site_information'>
							<div id='about_pict_pages'>
								<div className='about_site_pict'>
									<span style={{ fontSize: '35px' }}>Фотки</span>
									<div style={{ margin: '2px' }}>
										<h3>Фотки нашего класса (вместе и отдельно)</h3>
									</div>
								</div>
							</div>
							<div id='about_pict_pages'>
								<div className='about_site_pages'>
									<span style={{ fontSize: '35px' }}>Странички</span>
									<div style={{ margin: '2px' }}>
										<h3>Личные странички где будет информация о каждом</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</RightTriger>

			<LeftTriger>
				<div className='container_album--pictures'>
					<div>
						<span style={{ fontSize: '35px' }}>Фотогалерея</span>
						<div className='img_container'>
							<ImgSlider />
						</div>
					</div>
				</div>
			</LeftTriger>

			<RightTriger>
				<div className='container_class-pages'>
					<div className='class-pages'>
						<span style={{ fontSize: '35px' }}>Странички</span>
						<div className='container_users'>
							{name.map((item: IUser) => (
								<Link
									href={`/users/${item.id}`}
									key={item.id}
									className='item_users'
								>
									<div className='item_img-users'>
										<img src={item.img.src} id={item.idClass} />
									</div>
									<span className='name_users'>{item.name}</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</RightTriger>
		</main>
	)
}
