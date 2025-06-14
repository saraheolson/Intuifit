import { Client } from '@/types/client';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const clientService = {
  async getClients(): Promise<Client[]> {
    const response = await fetch(`${API_URL}/clients`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch clients');
    }

    return response.json();
  },

  async getClient(id: string): Promise<Client> {
    const response = await fetch(`${API_URL}/clients/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch client');
    }

    return response.json();
  },

  async createClient(data: {
    firstName: string;
    lastName: string;
    email: string;
    goals: string;
  }): Promise<Client> {
    const response = await fetch(`${API_URL}/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to create client');
    }

    return response.json();
  },

  async updateClient(id: string, data: Partial<Client>): Promise<Client> {
    const response = await fetch(`${API_URL}/clients/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to update client');
    }

    return response.json();
  },

  async deleteClient(id: string): Promise<void> {
    const response = await fetch(`${API_URL}/clients/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to delete client');
    }
  },
}; 