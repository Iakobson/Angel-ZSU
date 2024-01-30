// @/services/fund-data.ts
import {
  IOurAchievement, IOurVideos, IOurAward,
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
    id: 211,
    title: 'Запит на автівку хлопцям з 54 бригади 25 батальйону (ОТУ Соледар, направлення Кремінна)',
    url: 'https://www.youtube.com/embed/w07ODwsCv-M?si=OfDt4rWgTRLWXGNx',
  },
  {
    id: 212,
    title: 'Запит на авто від 203 батальйону звязку 108 бригади',
    url: 'https://www.youtube.com/embed/mBh9iV0lTsk?si=j3ou6U1ZKbAdyp9W',
  },
  {
    id: 213,
    title: 'Запит на тепловізор від 3 ОШбр',
    url: 'https://www.youtube.com/embed/5rZi-ggcZWc?si=mZmOnPkAD0IIseSj',
  },
  {
    id: 214,
    title: '',
    url: '',
  },
  {
    id: 215,
    title: '',
    url: '',
  },
  {
    id: 216,
    title: '',
    url: '',
  },
];

export const ourReportVideos:IOurVideos[] = [
  {
    id: 211,
    title: 'Звіт по запиту на авто від підрозділу аеророзвідки 203 батальйону 108 бригади',
    url: 'https://www.youtube.com/embed/v6QTmE_a-dc?si=T3WFes6LMty4wWyz',
  },
  {
    id: 212,
    title: '',
    url: '',
  },
  {
    id: 213,
    title: '',
    url: '',
  },
  {
    id: 214,
    title: '',
    url: '',
  },
  {
    id: 215,
    title: '',
    url: '',
  },
  {
    id: 216,
    title: '',
    url: '',
  },
];

/* ----- Подяки нам від військових ----- */
export const ourAwards:IOurAward[] = [
  {
    id: 311,
    title: 'ОРДП KRAKEN',
    image: 'images/blog/Gratitude-Kraken.jpg',
    body: 'Окремий розвідувально-диверсійний підрозділ Головного управління розвідки'
  },
  {
    id: 312,
    title: '61 ОМБР',
    image: 'images/blog/Gratitude-61OMSB2-ua.jpg',
    body: '61-ша окрема механізована Степова бригада'
  },
  {
    id: 313,
    title: 'A 4062',
    image: 'images/blog/Gratitude-A4062-ua.jpg',
    body: 'Військова частина A 4062'
  },
  {
    id: 314,
    title: 'A 3160',
    image: 'images/blog/Gratitude-A3160-ua.jpg',
    body: 'Військова частина A 3160'
  },
  {
    id: 315,
    title: 'A 4247',
    image: 'images/blog/Gratitude-Krutogolov-A4247-ua.jpg',
    body: 'Військова частина A 4247'
  },
  {
    id: 316,
    title: '79 ОДШБр',
    image: 'images/blog/Gratitude-79ODSB-ua.jpg',
    body: '79-та окрема десантно-штурмова Таврійська бригада'
  },
  {
    id: 317,
    title: '61 ОМБР',
    image: 'images/blog/Gratitude-61OMSB-ua.jpg',
    body: '61-ша окрема механізована Степова бригада'
  },
  {
    id: 318,
    title: 'ПРСБ',
    image: 'images/blog/Gratitude-PRSBor-ua.jpg',
    body: 'Державна пожежно-рятувальна служба Бориспільщини'
  },
  {
    id: 319,
    title: 'A 4010',
    image: 'images/blog/Gratitude-A4010-ua.jpg',
    body: 'Військова частина A 4010'
  },
];






