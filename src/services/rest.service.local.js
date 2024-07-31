import { storageService } from './async-storage.service.js';
import { utilService } from './util.service.js';

import restaurantData from '../data/restaurant_data.json'
const STORAGE_KEY = 'rest';
createrests();

export const restService = {
  query,
  getById,
  getLabels,
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

async function query() {
  var rests = await storageService.query(STORAGE_KEY);
  return rests;
}

function getById(restId) {
  return storageService.get(STORAGE_KEY, restId);
}

async function createrests() {
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