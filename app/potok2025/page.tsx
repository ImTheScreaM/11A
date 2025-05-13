'use client'

import '@/components/assets/css/potok2025.css'

import { VIP } from '@/core/api/users'

import Image from 'next/image'

export default function Potok2025() {
	return (
		<div>
			<div className='vip_container'>
				АВТОРИТЕТЫ 11 КЛАССОВ
				{VIP.map(item => (
					<div className='vip_items' key={item.id}>
						<div className='vip_left'>
							<span className='vip_doc'>ДЕЛО №{item.id}</span>
							<div className='vip_pod'>ПОДСУДИМЫЙ {item.name}</div>
							<div className='vip_like-as'>
								ИЗВЕСТНЫЙ КАК {item.information}
							</div>
						</div>

						<div className='vip_right'>
							<Image
								src={item.img}
								className='potok2025'
								alt=''
								width={100}
								height={100}
							/>
						</div>
					</div>
				))}
			</div>
			<video style={{width:'400px'}} src='/video/video.mp4' controls></video>
		</div>
	)
}
