import { storageService } from './async-storage.service.js';
import { utilService } from './util.service.js';

import restaurantData from '../data/restaurant_data.json'
const STORAGE_KEY = 'rest';
createRests();

export const restService = {
  query,
  getById,
  getLabels,
  textFilter,
}
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

async function query(filterBy) {
  var rests = await storageService.query(STORAGE_KEY)

  if (filterBy.txt) {
    const regex = new RegExp(filterBy.txt, 'i')
    rests = rests.filter(rest => {
      // Check restaurant name
      if (regex.test(rest.name)) return true

      // Check categories
      if (rest.category.some(category => regex.test(category))) return true

      // Check menu items
      for (let menu in rest.menu) {
        if (rest.menu[menu].some(dish => regex.test(dish.name))) {
          return true
        }
      }
      return false
    })
  }
  return rests
}

function getById(restId) {
  return storageService.get(STORAGE_KEY, restId);
}

async function createRests() {
  try {
    let rests = await utilService.loadFromStorage(STORAGE_KEY);
    if (!rests || rests.length === 0) {

      rests = restaurantData.restaurants;
      utilService.saveToStorage(STORAGE_KEY, rests);
    }
  } catch (error) {
    console.error('Error creating restaurants:', error);
  }
}

function textFilter() {
  return { txt: '' }
}