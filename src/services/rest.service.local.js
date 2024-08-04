import { storageService } from './async-storage.service.js';
import { utilService } from './util.service.js';

import restaurantData from '../data/restaurant_data.json';
const STORAGE_KEY = 'rest';
createRests();

export const restService = {
  query,
  getById,
  getLabels,
  getDefaultFilter,
  getSortBy
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

async function query(filterBy, sortBy) {
  var rests = await storageService.query(STORAGE_KEY);


  if (filterBy.category) {
    const regex = new RegExp(filterBy.category, 'i');
    rests = rests.filter(rest => regex.test(rest.category));
  }

  if (filterBy.loc) {
    const regex = new RegExp(filterBy.loc, 'i');
    rests = rests.filter(rest => regex.test(rest.address.city));
  }

  if (filterBy.txt) {
    const regex = new RegExp(filterBy.txt, 'i');
    rests = rests.filter((rest) => {
      // Check restaurant name
      if (regex.test(rest.name)) return true;

      // Check categories
      if (rest.category.some((category) => regex.test(category))) return true;

      // Check menu items
      for (let menu in rest.menu) {
        if (rest.menu[menu].some((dish) => regex.test(dish.name))) {
          return true;
        }
      }
      return false;
    })
  }

  if (sortBy.sortBy) {
    rests = _getSortBySwitch(rests, sortBy)
  }
  return rests;
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

function getDefaultFilter() {
  return {
    txt: '',
    loc: '' || 'Tel aviv',
    category: '',
    Preferences: "",

  }
}

function getSortBy() {
  return { sortBy: "" }
}

function _getSortBySwitch(rests, sortBy) {
  console.log(rests, sortBy)
  switch (sortBy.sortBy) {
    case 'discounts':
      return rests.sort((a, b) => (a.discount || 0) - (b.discount || 0));
    case 'distance':
      return rests.sort((a, b) => (a.distance || 0) - (b.distance || 0));
    case 'rating':
      return rests.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case 'min':
      return rests.sort((a, b) => (a.shipping.minOrder || 0) - (b.shipping.minOrder || 0));
    case 'deliveryFee':
      return rests.sort((a, b) => (parseFloat(a.shipping.shippingCost) || 0) - (parseFloat(b.shipping.shippingCost) || 0));
    case 'deliveryTime':
      return rests.sort((a, b) => (a.deliveryTime || 0) - (b.deliveryTime || 0));
    default:
      return rests;
  }
}