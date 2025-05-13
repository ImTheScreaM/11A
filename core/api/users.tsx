'use client'

import { IUser } from '../types/types'


import MironenkoDarina from '@/components/assets/img/people/MirDarina/mirondar.jpg'
import md1 from '@/components/assets/img/people/MirDarina/d1.jpg'
import md2 from '@/components/assets/img/people/MirDarina/d2.jpg'
import md3 from '@/components/assets/img/people/MirDarina/d3.jpg'

import MironenkoKristina from '@/components/assets/img/people/MirKristina/mironkris.jpg'
import mk1 from '@/components/assets/img/people/MirKristina/kris1.jpg'
import mk2 from '@/components/assets/img/people/MirKristina/kris2.jpg'

import SkorohodovIliya from '@/components/assets/img/people/SkIliya/ilitasck.jpg'
import si from '@/components/assets/img/people/SkIliya/il1.jpg'

import EgorGlumov from '@/components/assets/img/people/egorGlum/egorglv.jpg'
import eg1 from '@/components/assets/img/people/egorGlum/g1.jpg'
import eg2 from '@/components/assets/img/people/egorGlum/g2.jpg'

import StarovAlex from '@/components/assets/img/people/stAlex/starovalex.jpg'

import ShahowaLudmila from '@/components/assets/img/people/ludShah/ludshax.jpg'

import BozkoStepan from '@/components/assets/img/people/stepan/bozkostepan.jpg'
import bs from '@/components/assets/img/people/stepan/s1.jpg'

import ShitMaksim from '@/components/assets/img/people/shitMak/maks1.jpg'
import sm from '@/components/assets/img/people/shitMak/shitmaks.jpg'

import BytTaisiya from '@/components/assets/img/people/Taisia/byttaisia.jpg'
import bt1 from '@/components/assets/img/people/Taisia/t1.jpg'
import bt2 from '@/components/assets/img/people/Taisia/t2.jpg'
import bt3 from '@/components/assets/img/people/Taisia/t3.jpg'

import SherbayDaria from '@/components/assets/img/people/sherbDaria/sherdaria.jpg'
import sd1 from '@/components/assets/img/people/sherbDaria/d1.jpg'
import sd2 from '@/components/assets/img/people/sherbDaria/d2.jpg'

import ChypDimon from '@/components/assets/img/people/dimonChyp/dimchyp.jpg'
import cd1 from '@/components/assets/img/people/dimonChyp/d1.jpg'
import cd2 from '@/components/assets/img/people/dimonChyp/d2.jpg'

import ManagarovEgor from '@/components/assets/img/people/egorManag/egormanag.jpg'

import Semen from '@/components/assets/img/people/semen/semen.jpg'

import PavlovAleksandr from '@/components/assets/img/people/pavAlek/pavlovalek.jpg'
import pa1 from '@/components/assets/img/people/pavAlek/a1.jpg'
import pa2 from '@/components/assets/img/people/pavAlek/a2.jpg'

import ShevyakovAleksand from '@/components/assets/img/people/shevSan/shevSan.jpg'
import sa1 from '@/components/assets/img/people/shevSan/s2.jpg'
import sa2 from '@/components/assets/img/people/shevSan/s3.jpg'

import KydrenkoAndrey from '@/components/assets/img/people/andrey/kydandrey.jpg'
import ka1 from '@/components/assets/img/people/andrey/a1.jpg'
import ka2 from '@/components/assets/img/people/andrey/a2.jpg'


import AnasGangur from '@/components/assets/img/people/gangNas/gangNas.jpg'
import ag1 from '@/components/assets/img/people/gangNas/n1.jpg'
import ag2 from '@/components/assets/img/people/gangNas/n2.jpg'

import VeronikaKoles from '@/components/assets/img/people/kolver/kolveron.jpg'

import ChernyxEvgeniy from '@/components/assets/img/people/evgeniy/cherevgen.jpg'


export const PEOPLE: IUser[] = [
	{
		id: 1,
		name: 'Мироненко Дарина',
		img: MironenkoDarina,
		className: 'MironenkoDarina',
		idClass: 'id_people',
		galery:[md1,md2,md3],
		information: {
			hobby: 'Волейбол',
			progress: 'Отличница',
			sex: 'ж',
			about: 'Учится в медицинском классе',
		},
	},
	{
		id: 2,
		name: 'Мироненко Кристина',
		img: MironenkoKristina,
		className: 'MironenkoKristina',
		idClass: 'id_people',
		galery:[mk1,mk2],
		information: {
			hobby: 'Волейбол',
			progress: 'Отличница',
			sex: 'ж',
			about: 'Учится в медицинском классе',
		},
	},
	{
		id: 3,
		name: 'Скороходов Илья',
		img: SkorohodovIliya,
		className: 'SkorohodovIliya',
		idClass: 'id_people',
		galery:[si],
		information: {
			hobby: 'Дота,Футболл,Кс',
			progress: 'Троечник',
			sex: 'м',
			about: 'Учится в физмат классе,хотя сдает общество =/',
			nicknames: 'Сын Головача',
		},
	},
	{
		id: 4,
		name: 'Глумов Егор',
		img: EgorGlumov,
		className: 'EgorGlumov',
		idClass: 'id_people',
		galery:[eg1,eg2],
		information: {
			hobby: 'Футбол',
			progress: 'Отличник',
			sex: 'м',
			about: 'Учится в физмат классе',
			nicknames: 'Похотливый',
		},
	},
	{
		id: 5,
		name: 'Старов Алексей',
		img: StarovAlex,
		className: 'StarovAlex',
		idClass: 'id_people',
		information: {
			hobby: 'Дота и все',
			progress: 'Хорошист',
			sex: 'м',
			about: 'Учится в ИТ классе',
		},
	},
	{
		id: 6,
		name: 'Шахова Людмила',
		img: ShahowaLudmila,
		className: 'ShahovaLud',
		idClass: 'id_people',
		information: {
			hobby: 'undefined',
			progress: 'Хорошистка',
			sex: 'ж',
			about: 'Учится в медицинском классе',
		},
	},
	{
		id: 7,
		name: 'Божко Степан',
		img: BozkoStepan,
		className: 'BozkoStep',
		idClass: 'id_people',
		galery:[bs],
		information: {
			hobby: 'undefined',
			progress: 'Хорошист или троечник',
			sex: 'м',
			about: 'Учится в медицинском классе',
			nicknames: 'Башкатов',
		},
	},
	{
		id: 8,
		name: 'Щетинин Максим',
		img: ShitMaksim,
		className: 'ShitMaks',
		idClass: 'id_people',
		galery:[sm],
		information: {
			hobby: 'undefined',
			progress: 'Троечник',
			sex: 'м',
			about: 'Учится в ИТ классе',
			nicknames: 'СВО',
		},
	},
	{
		id: 9,
		name: 'Бут Таисия',
		img: BytTaisiya,
		className: 'BytTai',
		idClass: 'id_people',
		galery:[bt1,bt2,bt3],
		information: {
			hobby: 'Поет',
			progress: 'Отличница',
			sex: 'ж',
			about: 'Учится в медицинском классе',
		},
	},
	{
		id: 10,
		name: 'Щербань Дарья',
		img: SherbayDaria,
		className: 'SherbDaria',
		idClass: 'id_people',
		galery:[sd1,sd2],
		information: {
			hobby: 'Поет',
			progress: 'Отличница',
			sex: 'ж',
			about: 'Учится в медицинском классе',
		},
	},
	{
		id: 11,
		name: 'Чупринин Дмитрий',
		img: ChypDimon,
		className: 'ChypDmitr',
		idClass: 'id_people',
		galery:[cd1,cd2],
		information: {
			hobby: 'Волейбол',
			progress: 'Хорошист',
			sex: 'м',
			about: 'Учится в физмат классе',
			nicknames: 'Я похотливый',
		},
	},
	{
		id: 12,
		name: 'Манагаров Егор',
		img: ManagarovEgor,
		className: 'ManagarEgor',
		idClass: 'id_people',
		information: {
			hobby: 'Создавать музыку и картинки )',
			progress: 'Троечник',
			sex: 'м',
			about: 'Учится в ИТ классе',
		},
	},
	{
		id: 13,
		name: 'Геращенко Владислав',
		img: Semen,
		className: 'GerVlad',
		idClass: 'id_people',
		information: {
			hobby: 'Дота',
			progress: 'Хорошист или троечник',
			sex: 'м',
			about: 'Учится в ИТ классе',
			nicknames: 'Куница',
		},
	},
	{
		id: 14,
		name: 'Павлов Александр',
		img: PavlovAleksandr,
		className: 'PavlovAlex',
		idClass: 'id_people',
		galery:[pa1,pa2],
		information: {
			hobby: 'Футбол',
			progress: 'Троечник (в душе отличник)',
			sex: 'м',
			about: 'Учится в ИТ классе',
			nicknames: 'Гидроэлектро станция',
		},
	},
	{
		id: 15,
		name: 'Шевяков Александр',
		img: ShevyakovAleksand,
		className: 'ShevAles',
		idClass: 'id_people',
		galery:[sa1,sa2],
		information: {
			hobby: 'Мотоциклы',
			progress: 'Хорошист',
			sex: 'м',
			about: 'Учится в физмат классе',
			nicknames: '3 раза',
		},
	},
	{
		id: 16,
		name: 'Кудрявых Андрей',
		img: KydrenkoAndrey,
		className: 'KydAndr',
		idClass: 'id_people',
		galery:[ka1,ka2],
		information: {
			hobby: 'Военная тематика',
			progress: 'Троечник',
			sex: 'м',
			about: 'Учится в ИТ классе',
			nicknames: 'Канатка x3 мутящая обосранная,похотливая',
		},
	},
	{
		id: 17,
		name: 'Гангур Анастасия',
		img: AnasGangur,
		className: 'GangAna',
		idClass: 'id_people',
		galery:[ag1,ag2],
		information: {
			hobby: 'Шахматы',
			progress: 'Отличница',
			sex: 'ж',
			about: 'Учится в ИТ классе',
		},
	},
	{
		id: 18,
		name: 'Колесникова Вероника',
		img: VeronikaKoles,
		className: 'KolVeron',
		idClass: 'id_people',
		information: {
			hobby: 'undefined',
			progress: 'Отличница',
			sex: 'ж',
			about: 'Учится в ИТ классе',
		},
	},
	{
		id: 19,
		name: 'Черных Евгений',
		img: ChernyxEvgeniy,
		className: 'CherEv',
		idClass: 'id_people',
		information: {
			hobby: 'Мотоциклы',
			progress: 'Троечник',
			sex: 'м',
			about: 'Учится в физмат классе',
			nicknames: 'Женьчок',
		},
	},
]

// export const VIP = [
// 	{
// 		id: 666,
// 		name: 'Виталик Кравченко Михайлович',
// 		information: 'ПУБЕРТАТНАЯ ЯЗВА',
// 		img:Vitily,
// 	},
// 	{
// 		id: 667,
// 		name: 'Кириллов Иван Дмитреевич',
// 		information: 'ГУЛЬ НАВИ 1000-7',
// 		img:Vanek,
// 	},
// ]
