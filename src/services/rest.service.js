import { httpService } from './http.service.js';
import { utilService } from './util.service.js';

const BASE_URL = 'rest/';

export const restService = {
  query,
  getById,
  save,
  remove,
  getEmptyRest,
  addrestMsg,
  //   getLabels,
  //   getFilterFromParams,
};

window.cs = restService;

async function query(filterBy) {
  return httpService.get(BASE_URL, { params: { filterBy } });
}

function getById(restId) {
  return httpService.get(`rest/${restId}`);
}
