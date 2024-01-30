// @/services/fund-data.ts
import {
  IOurAchievement, IOurVideos, ITeamMember, IOurAward,
} from '@/models/interfaces';

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
    value: '300 000 +',
  },
  {
    id: 113,
    label: 'Подяк від ЗСУ за допомогу.',
    value: '50 +',
  },
];

/* ----- Відео з YouTube ----- */
export const ourCampaignVideos:IOurVideos[] = [
  {
    id: 311,
    title: 'Запит на автівку хлопцям з 54 бригади 25 батальйону (ОТУ Соледар, направлення Кремінна)',
    url: 'https://www.youtube.com/embed/w07ODwsCv-M?si=OfDt4rWgTRLWXGNx',
  },
  {
    id: 312,
    title: 'Запит на авто від 203 батальйону звязку 108 бригади',
    url: 'https://www.youtube.com/embed/mBh9iV0lTsk?si=j3ou6U1ZKbAdyp9W',
  },
  {
    id: 313,
    title: 'Запит на тепловізор від 3 ОШбр',
    url: 'https://www.youtube.com/embed/5rZi-ggcZWc?si=mZmOnPkAD0IIseSj',
  },
  {
    id: 314,
    title: '',
    url: '',
  },
  {
    id: 315,
    title: '',
    url: '',
  },
  {
    id: 316,
    title: '',
    url: '',
  },
];

export const ourReportVideos:IOurVideos[] = [
  {
    id: 411,
    title: 'Звіт по запиту на авто від підрозділу аеророзвідки 203 батальйону 108 бригади',
    url: 'https://www.youtube.com/embed/v6QTmE_a-dc?si=T3WFes6LMty4wWyz',
  },
  {
    id: 412,
    title: '',
    url: '',
  },
  {
    id: 413,
    title: '',
    url: '',
  },
  {
    id: 414,
    title: '',
    url: '',
  },
  {
    id: 415,
    title: '',
    url: '',
  },
  {
    id: 416,
    title: '',
    url: '',
  },
];

/* ----- Члени нашої команди ----- */
export const ourMembersData:ITeamMember[] = [
  {
    id: 511,
    photo: '/images/members/christian-buehner.jpg',
    name: 'Jhon Dwirian',
    professional: 'волонтер',
    description:
      'Duis aute irure dolor in reprehenderit. Excepteur sint occaecat proident, sunt in culpa mollit anim id est laborum.',
    territory: {
      city: 'Grab',
      logo: '/images/companies/grab.png',
    },
  },
  {
    id: 512,
    photo: '/images/members/jonas-kakaroto.jpg',
    name: 'Leon Kennedy',
    professional: 'волонтер',
    description:
      'Duis aute irure dolor in reprehenderit in voluptatela pariatur. Excepteur sint, sunt int mollit anim id est laborum.',
    territory: {
      city: 'Google',
      logo: '/images/companies/google.png',
    },
  },
  {
    id: 513,
    photo: '/images/members/noah-buscher.jpg',
    name: 'Nguyn Thuy',
    professional: 'волонтер',
    description:
      'Duis aute irure dolor in reprehenderit. Excepteur sint onon proident, sunt in culpa qui oflit anim id est laborum.',
    territory: {
      city: 'Airbnb',
      logo: '/images/companies/airbnb.png',
    },
  },
  {
    id: 514,
    photo: '/images/members/philip-martin.jpg',
    name: 'Rizki Known',
    professional: 'волонтер',
    description:
      'Duis aute irure dolor in voluptatdolore eu fugiat nulla pariatur. Excepnon proident, offi mollit anim id est laborum.',
    territory: {
      city: 'Microsoft',
      logo: '/images/companies/microsoft.png',
    },
  },
];

/* ----- Подяки нам від військових ----- */
export const ourAwards:IOurAward[] = [
  {
    id: 711,
    title: 'ОРДП KRAKEN',
    image: 'images/blog/Gratitude-Kraken.jpg',
    body: 'Окремий розвідувально-диверсійний підрозділ Головного управління розвідки'
  },
  {
    id: 712,
    title: '61 ОМБР',
    image: 'images/blog/Gratitude-61OMSB2-ua.jpg',
    body: '61-ша окрема механізована Степова бригада'
  },
  {
    id: 713,
    title: 'A 4062',
    image: 'images/blog/Gratitude-A4062-ua.jpg',
    body: 'Військова частина A 4062'
  },
  {
    id: 714,
    title: 'A 3160',
    image: 'images/blog/Gratitude-A3160-ua.jpg',
    body: 'Військова частина A 3160'
  },
  {
    id: 715,
    title: 'A 4247',
    image: 'images/blog/Gratitude-Krutogolov-A4247-ua.jpg',
    body: 'Військова частина A 4247'
  },
  {
    id: 716,
    title: '79 ОДШБр',
    image: 'images/blog/Gratitude-79ODSB-ua.jpg',
    body: '79-та окрема десантно-штурмова Таврійська бригада'
  },
  {
    id: 717,
    title: '61 ОМБР',
    image: 'images/blog/Gratitude-61OMSB-ua.jpg',
    body: '61-ша окрема механізована Степова бригада'
  },
  {
    id: 718,
    title: 'ПРСБ',
    image: 'images/blog/Gratitude-PRSBor-ua.jpg',
    body: 'Державна пожежно-рятувальна служба Бориспільщини'
  },
  {
    id: 719,
    title: 'A 4010',
    image: 'images/blog/Gratitude-A4010-ua.jpg',
    body: 'Військова частина A 4010'
  },
];



