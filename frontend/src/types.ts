export enum Role {
  client = 'client',
  coach = 'coach',
  admin = 'admin',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
} 