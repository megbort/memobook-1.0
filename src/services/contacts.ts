import type { Contact } from '../models/contact';

const API_BASE_URL = 'https://memobook-backend-production.up.railway.app';

export const contactApi = {
  async getAllContacts(): Promise<Contact[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`);
      if (!response.ok) {
        throw new Error(`HTTP error - status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  },

  async getContactById(id: string): Promise<Contact> {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error - status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching contact ${id}:`, error);
      throw error;
    }
  },

  async createContact(contact: Omit<Contact, 'id'>): Promise<Contact> {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      if (!response.ok) {
        throw new Error(`HTTP error - status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating contact:', error);
      throw error;
    }
  },

  async updateContact(id: string, contact: Partial<Contact>): Promise<Contact> {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      if (!response.ok) {
        throw new Error(`HTTP error - status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error updating contact ${id}:`, error);
      throw error;
    }
  },

  async deleteContact(id: string): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error - status: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error deleting contact ${id}:`, error);
      throw error;
    }
  },
};
