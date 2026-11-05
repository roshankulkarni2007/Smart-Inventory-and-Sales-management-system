// Sales data access exposes the same local/API boundary as inventory records.
import { apiRequest } from './api';

const STORAGE_KEY = 'paperlane_sales';
export const salesService = {
  list: () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
  save: sales => localStorage.setItem(STORAGE_KEY, JSON.stringify(sales)),
  async createWithApi(invoice) { return apiRequest('/api/sales', { method: 'POST', body: JSON.stringify(invoice) }); },
};
