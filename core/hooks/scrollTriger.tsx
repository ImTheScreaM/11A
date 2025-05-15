'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HtmlHTMLAttributes, useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

export const LeftTriger = ({ children }:{children:any}) => {
	const scrollRef = useRef(null)

	useEffect(() => {
		if (typeof window != 'undefined') {
			gsap.fromTo(
				scrollRef.current,
				{ opacity: 0, x: -450 },
				{
					opacity: 1,
					x: 0,
					duration: 1,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: scrollRef.current,
						start: 'top 80%',
						toggleActions: 'play none none none',
					},
				}
			)
		} 
	}, [])

	return <section ref={scrollRef}>{children}</section>
}

export const RightTriger = ({ children }:{children:any}) => {
	const scrollRef = useRef(null)
	useEffect(() => {
		if (typeof window != 'undefined') {
			gsap.fromTo(
				scrollRef.current,
				{ opacity: 0, x: 450 },
				{
					opacity: 1,
					x: 0,
					duration: 1,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: scrollRef.current,
					},
				}
			)
		}
	}, [])

	return <section ref={scrollRef}>{children}</section>
}
