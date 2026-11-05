// Inventory data access is isolated here to make replacing the demo store simple.
import { apiRequest } from './api';

const STORAGE_KEY = 'paperlane_products';
export const inventoryService = {
  list: () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
  save: products => localStorage.setItem(STORAGE_KEY, JSON.stringify(products)),
  async fetchFromApi() { return apiRequest('/api/products'); },
};
