import restaurantCover1 from '../assets/images/restaurant_example_1.avif';
import restaurantCover2 from '../assets/images/restaurant_cover_2.avif';
import restaurantCover3 from '../assets/images/restaurant_cover-3.avif';
import restaurantCover4 from '../assets/images/restaurant_cover_4.avif';
import restaurantCover5 from '../assets/images/restaurant_cover_5.avif';
import restaurantCover6 from '../assets/images/restaurant_cover_6.avif';
const restaurants = [
    {
        coverUrl: restaurantCover1,
        name:'Burger Palace',
        items: ['American','Burgers'],
        rate: 4.5
    },
    {
        coverUrl:restaurantCover2,
        name:'Pizza Heaven',
        items: ['Italien','Pizza'],
        rate: 4.7
    },
    {
        coverUrl:restaurantCover3,
        name: 'Sushi Express',
        items: ['Japanese','Sushi'],
        rate: 4.6
    },
    {
        coverUrl:restaurantCover4,
        name: 'Tacos Fiesta',
        items: ['Mexican','Sushi'],
        rate: 4.3
    },
    {
        coverUrl:restaurantCover5,
        name: 'Salad Bar',
        items: ['Healthy','Salads'],
        rate: 4.4
    },
    {
        coverUrl:restaurantCover6,
        name: 'Noddle House',
        items: ['Asian','Noodles'],
        rate: 4.2
    },
];

export default restaurants;