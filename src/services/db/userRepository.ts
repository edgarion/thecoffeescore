import { getTursoClient } from './tursoClient';
import { hashPassword, verifyPassword } from '../auth/crypto';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string | null;
  preferences?: Record<string, any> | null;
  createdAt: string;
  updatedAt?: string;
}

export class UserRepository {
  private static mapRowToUser(row: any): User {
    let preferences = null;
    if (row.preferences) {
      try {
        preferences = JSON.parse(row.preferences as string);
      } catch {
        preferences = null;
      }
    }

    return {
      id: row.id as string,
      email: row.email as string,
      name: row.name as string,
      avatar: (row.avatar as string) || null,
      preferences,
      createdAt: row.created_at as string,
      updatedAt: row.updated_at as string,
    };
  }

  /**
   * Creates a new user with hashed password in Turso
   */
  public static async createUser(email: string, password: string, name: string, avatar?: string): Promise<User> {
    const db = getTursoClient();
    const cleanEmail = email.trim().toLowerCase();
    
    // Check if email already registered
    const existing = await this.getUserByEmail(cleanEmail);
    if (existing) {
      throw new Error('El correo electrónico ya está registrado.');
    }

    const userId = `usr_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    const passwordHash = await hashPassword(password);
    const now = new Date().toISOString();
    const defaultAvatar = avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(cleanEmail)}`;

    await db.execute({
      sql: `
        INSERT INTO users (id, email, password_hash, name, avatar, preferences, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);
      `,
      args: [
        userId,
        cleanEmail,
        passwordHash,
        name.trim(),
        defaultAvatar,
        JSON.stringify({ newsletter: true, favoriteCategories: [] }),
        now,
        now,
      ],
    });

    return {
      id: userId,
      email: cleanEmail,
      name: name.trim(),
      avatar: defaultAvatar,
      preferences: { newsletter: true, favoriteCategories: [] },
      createdAt: now,
      updatedAt: now,
    };
  }

  /**
   * Authenticates user credentials and returns user profile if valid
   */
  public static async authenticateUser(email: string, password: string): Promise<User> {
    const db = getTursoClient();
    const cleanEmail = email.trim().toLowerCase();

    const result = await db.execute({
      sql: `SELECT * FROM users WHERE email = ? LIMIT 1;`,
      args: [cleanEmail],
    });

    if (result.rows.length === 0) {
      throw new Error('Correo electrónico o contraseña incorrectos.');
    }

    const row = result.rows[0];
    const passwordHash = row.password_hash as string;
    const isValid = await verifyPassword(password, passwordHash);

    if (!isValid) {
      throw new Error('Correo electrónico o contraseña incorrectos.');
    }

    return this.mapRowToUser(row);
  }

  /**
   * Retrieves user by unique ID
   */
  public static async getUserById(id: string): Promise<User | null> {
    const db = getTursoClient();
    const result = await db.execute({
      sql: `SELECT * FROM users WHERE id = ? LIMIT 1;`,
      args: [id],
    });

    if (result.rows.length === 0) return null;
    return this.mapRowToUser(result.rows[0]);
  }

  /**
   * Retrieves user by email
   */
  public static async getUserByEmail(email: string): Promise<User | null> {
    const db = getTursoClient();
    const cleanEmail = email.trim().toLowerCase();
    const result = await db.execute({
      sql: `SELECT * FROM users WHERE email = ? LIMIT 1;`,
      args: [cleanEmail],
    });

    if (result.rows.length === 0) return null;
    return this.mapRowToUser(result.rows[0]);
  }
}
