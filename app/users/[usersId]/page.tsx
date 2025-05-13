'use client'

import '@/components/assets/css/personePage.css'
import { Header } from '@/components/pages/header'
import { usePersoneStore } from '@/core/store/userCreate'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { use, useState } from 'react'

// @ts-ignore
export default function userPageDetails({
	params,
}: {
	params: Promise<{ usersId: number }>
}) {
	const [open, setOpen] = useState(false)

	const data = usePersoneStore(state => state.data)
	const userId = use(params)

	const getUserInformation = () => {
		const ID = userId?.usersId
		if (!ID) return
		return data.find((item: { id: number }):boolean => item?.id == userId.usersId)
	}

	const { name, information, img, className, idClass, galery } =
		getUserInformation()

	if (!getUserInformation()) {
		return <>Loading...</>
	}

	return (
		<div className='container_persone_page'>
			<Header />

			<div className='persone_page-title'>
				<div className='left_title-page'>
					<div className='left_title-page_top'>
						<span style={{ fontSize: '60px' }}>{name.split(' ')[0]}</span>
						<span style={{ fontSize: '40px' }}>{name.split(' ')[1]}</span>
					</div>
					<div className='left_title-page_bottom'>
						<span>Выпускник 11"А" класс ОГБОУ "Вейделевская СОШ"</span>
					</div>
				</div>
				<div className='right_title-page'>
					<img
						src={img.src}
						id="title_img"
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
							<span>{information.progress}</span>
						</li>
						<li className='item_hobby'>
							<span style={{ fontSize: '25px' }}>Хобби:</span>
							<span>{information.hobby}</span>
						</li>
						<li className='item_about'>
							<span style={{ fontSize: '25px' }}>Небольшая информация:</span>
							<span>{information.about}</span>
						</li>
					</ul>
				</div>
			</div>

			<div className='container_gallery'>
				{galery ? (
					<div className='gallery'>
						<span style={{ fontSize: '40px' }}>Галерея</span>
						<div className='gallery_img'>
							{galery.map((item: string, index:number) => (
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

			{information.nicknames ? (
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
		</div>
	)
}
