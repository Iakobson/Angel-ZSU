// @/services/fund-data.ts
import { IOurAchievement, IOurVideos, IOurAward } from '@/models/interfaces';

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
const ourVideo:IOurVideos[] = [
  {
    id: 211,
    title: 'Обмануті волонтери і військові: як відрізнити шахраїв від чесних продавців',
    link: 'https://www.youtube.com/watch?app=desktop&v=HNiCRffMdEE&feature=youtu.be',
  },
  {
    id: 212,
    title: '',
    link: '',
  },
  {
    id: 213,
    title: '',
    link: '',
  },
  {
    id: 214,
    title: '',
    link: '',
  },
  {
    id: 215,
    title: '',
    link: '',
  },
  {
    id: 216,
    title: '',
    link: '',
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






