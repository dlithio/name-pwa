import Dexie, { Table } from 'dexie';

// Define user interface
export interface User {
  id?: number;
  username: string;
  lastSync?: Date;
}

// Define our database
class AppDatabase extends Dexie {
  users!: Table<User>;

  constructor() {
    super('NamePWA');

    // Define tables and schema
    this.version(1).stores({
      users: '++id, username',
    });
  }
}

// Create and export a database instance
export const db = new AppDatabase();

// Simple authentication methods
export const auth = {
  async login(username: string): Promise<User> {
    // Check if user exists
    let user = await db.users.where({ username }).first();

    // If not, create new user
    if (!user) {
      const id = await db.users.add({
        username,
        lastSync: new Date(),
      });
      user = await db.users.get(id);
      if (!user) throw new Error('Failed to create user');
    }

    // Update last sync time
    await db.users.update(user.id!, { lastSync: new Date() });
    return user;
  },

  async getCurrentUser(): Promise<User | undefined> {
    // Get first user (simple implementation)
    return db.users.toArray().then((users) => users[0]);
  },

  async logout(): Promise<void> {
    // For this simple implementation, we don't do anything on logout
    // In a real app, you might clear session data
  },
};

// Sync functionality (placeholder)
export const sync = {
  async syncData(): Promise<void> {
    const user = await auth.getCurrentUser();
    if (user) {
      // Update last sync time
      await db.users.update(user.id!, { lastSync: new Date() });
      console.log('Data synchronized');
    }
  },
};
