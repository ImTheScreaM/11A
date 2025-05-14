'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import '@/components/assets/css/swiper.css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import black_whiteclass from '@/components/assets/img/black_whiteclass.jpg'
import black_whiteclass_sport from '@/components/assets/img/black_whiteclass_sport.jpg'
import black_whiteclass_sportcirlse from '@/components/assets/img/black_whiteclass_sportcirlse.jpg'
import black_whitegirld2_sport from '@/components/assets/img/black_whitegirls2_sport.jpg'
import black_whitegirld_sport from '@/components/assets/img/black_whitegirls_sport.jpg'

export const ImgSlider = () => {
	const images = [
		black_whiteclass,
		black_whiteclass_sport,
		black_whiteclass_sportcirlse,
		black_whitegirld2_sport,
		black_whitegirld_sport,
	]

	return (
		<div className='swiper_container'>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				navigation
				style={{ width: '360px', height: 'auto' }}
			>
				<SwiperSlide>
					<Image src={images[0]} alt='classes' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={images[1]} alt='classes' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={images[3]} alt='classes' />
				</SwiperSlide>
			</Swiper>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				navigation
				className='swiper_second'
			>
				<SwiperSlide>
					<Image src={images[2]} alt='classes' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={images[4]} alt='classes' />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
