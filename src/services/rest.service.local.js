import { storageService } from './async-storage.service.js';
import { utilService } from './util.service.js';
// import { userService } from './user.service.js';
// import { func } from "prop-types"

const STORAGE_KEY = 'rest';
createrests();

export const restService = {
  query,
  getById,
  getLabels,
};
window.cs = restService;

function getLabels() {
  const labels = [
    'Asian',
    'BBQ',
    'Pizza',
    'Burgers',
    'Sushi',
    'Salads',
    'Coffee',
    'mexican',
    'Pasta',
  ];
  return labels;
}

async function query(filterBy = getDefaultFilter()) {
  var rests = await storageService.query(STORAGE_KEY);
  return rests;
}

function getById(restId) {
  return storageService.get(STORAGE_KEY, restId);
}

function createrests() {
  let rests = utilService.loadFromStorage(STORAGE_KEY);
  if (!rests || !rests.length) {
    rests = [
      {
        _id: 's101',
        name: 'bbb',
        labels: ['burgers,BBQ'],
        imgUrls: [
          `/img/5.jpeg`,
          `/img/3.jpeg`,
          `/img/1.jpeg`,
         
        ],
        summary: 'best burger in tlv...',
        meals: [
          {
            id: '1',
          name:"burger small",
          subTitle:"burger with fries",
          price: '10',
          img: '/img/5.jpeg'
      },

        ],
       
        host: {
          _id: 'u101',
          fullname: 'Davit Pok',
          imgUrl:
            'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
        },
        loc: {
          country: 'israel',
          city: 'Tlv',
          address: '17 Kombo st',
          lat: -8.61308,
          lng: 41.1413,
        },
        reviews: [
          {
            id: '123',
            txt: 'Very helpful hosts. Cooked traditional...sadddddddddddddddddddd;ldakdasodasdaspodkasodkasopdkaspdkasdkjaspodkapodkaspodkaspodkaspodkaspodkaspodaskpodaskpodaskpodksapomdofkfdsgls[f,sdpmsdfk[pflsadfksdpofkasskds',
            rate: 5,
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '/img/img2.jpg',
            },
          },
    ]
    utilService.saveToStorage(STORAGE_KEY, rests);
  }
}


