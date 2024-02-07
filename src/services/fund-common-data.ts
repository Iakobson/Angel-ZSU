// @/services/fund-common-data.ts
import {
  IOurAchievement, ITeamMember, IOurAward,
} from '@/models/interfaces';
// for Local Images
import KrutogolovaPic from '../../public/images/members/Krutogolova.png';
import ShevchenkoPic from '../../public/images/members/Shevchenko.png';
import BalbekovPic from '../../public/images/members/Balbekov.png';
import SlominskaPic from '../../public/images/members/Slominska.png';
import KvashaPic from '../../public/images/members/Kvasha.png';
import PereverzevaPic from '../../public/images/members/Pereverzeva.jpg';

import Krutogolov from '../../public/images/members/Krutogolov.png';
import KazminPic from '../../public/images/members/Kazmin.png';
import AbramenkopPic from '../../public/images/members/Abramenko.png';
import philipPic from '../../public/images/members/philip-martin.jpg';


/* ----- НАШІ З ВАМИ ДОСЯГНЕННЯ ----- */
export const ourAchievements:IOurAchievement[] = [
  {
    id: 111,
    label: 'Донарів вже долучилося до зборів.',
    value: '1 000 +',
  },
  {
    id: 112,
    label: 'Зібрано з вашою допомогою.',
    value: '700 000 +',
  },
  {
    id: 113,
    label: 'Подяк від ЗСУ за допомогу.',
    value: '50 +',
  },
];

/* ----- Члени нашої команди ----- */
export const ourMembersData:ITeamMember[] = [
  {
    id: 511,
    photo: KrutogolovaPic,
    name: 'Крутоголов Юлія',
    professional: 'директор фонду',
    description: 'Київ. Київська область. Україна.',
    territory: {
      city: 'Kyiv',
      logo: '/images/emblems/COA-of-Kyiv.png',
    },
  },
  {
    id: 512,
    photo: ShevchenkoPic,
    name: 'Шевченко Ігор',
    professional: 'волонтер',
    description: 'Бровари. Броварський район. Київська область.',
    territory: {
      city: 'Brovary',
      logo: '/images/emblems/Brovary-gerb.png',
    },
  },
  {
    id: 513,
    photo: BalbekovPic,
    name: 'Балбеков Ілля',
    professional: 'волонтер',
    description: 'Конотоп. Конотопський район. Сумщина.',
    territory: {
      city: 'Konotop',
      logo: '/images/emblems/microsoft.png',
    },
  },
  {
    id: 514,
    photo: SlominskaPic,
    name: 'Сломінська Анастасія',
    professional: 'волонтер',
    description: 'Бровари. Броварський район. Київська область.',
    territory: {
      city: 'Brovary',
      logo: '/images/emblems/Brovary-gerb.png',
    },
  },
  {
    id: 515,
    photo: KvashaPic,
    name: 'Ігор Кваша',
    professional: 'волонтер',
    description: 'Київ. Київська область. Україна.',
    territory: {
      city: 'Kyiv',
      logo: '/images/emblems/COA-of-Kyiv.png',
    },
  },
  {
    id: 516,
    photo: PereverzevaPic,
    name: 'Переверзєва Владислава',
    professional: 'волонтер',
    description: 'Дніпро. Придніпровська височина. Україна.',
    territory: {
      city: 'Dnipro',
      logo: '/images/emblems/Dnipro_Gerb.png',
    },
  },
  {
    id: 517,
    photo: philipPic,
    name: 'Стоцький Віталій',
    professional: 'волонтер',
    description: 'Бровари. Броварський район. Київська область.',
    territory: {
      city: 'Brovary',
      logo: '/images/emblems/Brovary-gerb.png',
    },
  },
  {
    id: 518,
    photo: Krutogolov,
    name: 'Крутоголов Микола',
    professional: 'волонтер',
    description: 'Київ. Київська область. Україна.',
    territory: {
      city: 'Kyiv',
      logo: '/images/emblems/COA-of-Kyiv.png',
    },
  },
  {
    id: 519,
    photo: KazminPic,
    name: 'Олександр Казьмін',
    professional: 'волонтер',
    description: 'Бровари. Броварський район. Київська область.',
    territory: {
      city: 'Brovary',
      logo: '/images/emblems/Brovary-gerb.png',
    },
  },
  {
    id: 521,
    photo: AbramenkopPic,
    name: 'Абраменко Дмитро',
    professional: 'волонтер',
    description: 'Бровари. Броварський район. Київська область.',
    territory: {
      city: 'Brovary',
      logo: '/images/emblems/Brovary-gerb.png',
    },
  },
  {
    id: 520,
    photo: philipPic,
    name: 'Rizki Known',
    professional: 'волонтер',
    description: 'Ніжин. Ніжинський район. Чернігівщина.',
    territory: {
      city: 'Nizhyn',
      logo: '/images/emblems/Nizhyn-COA.png',
    },
  },
];

/* ----- Подяки нам від військових ----- */
export const ourAwards:IOurAward[] = [
  {
    id: 711,
    title: 'ОРДП KRAKEN',
    image: '/images/blog/Gratitude-Kraken.jpg',
    body: 'Розвідувально-диверсійний підрозділ ГУР'
  },
  {
    id: 712,
    title: '61 ОМБР',
    image: '/images/blog/Gratitude-61OMSB2-ua.jpg',
    body: '61-ша окрема механізована Степова бригада'
  },
  {
    id: 713,
    title: 'A 4062',
    image: '/images/blog/Gratitude-A4062-ua.jpg',
    body: 'Військова частина A 4062'
  },
  {
    id: 714,
    title: 'A 3160',
    image: '/images/blog/Gratitude-A3160-ua.jpg',
    body: 'Військова частина A 3160'
  },
  {
    id: 715,
    title: 'A 4247',
    image: '/images/blog/Gratitude-Krutogolov-A4247-ua.jpg',
    body: 'Військова частина A 4247'
  },
  {
    id: 716,
    title: '79 ОДШБр',
    image: '/images/blog/Gratitude-79ODSB-ua.jpg',
    body: '79-та десантно-штурмова Таврійська бригада'
  },
  {
    id: 717,
    title: '61 ОМБР',
    image: '/images/blog/Gratitude-61OMSB-ua.jpg',
    body: '61-ша окрема механізована Степова бригада'
  },
  {
    id: 718,
    title: 'ПРСБ',
    image: '/images/blog/Gratitude-PRSBor-ua.jpg',
    body: 'Пожежно-рятувальна служба Бориспільщини'
  },
  {
    id: 719,
    title: 'A 4010',
    image: '/images/blog/Gratitude-A4010-ua.jpg',
    body: 'Військова частина A 4010'
  },
];

