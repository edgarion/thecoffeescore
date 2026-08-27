import type { VercelRequest, VercelResponse } from '@vercel/node';
import { UserRepository } from '../src/services/db/userRepository';
import { initTursoSchema } from '../src/services/db/tursoClient';
import { generateSessionToken } from '../src/services/auth/crypto';

/**
 * Authentication API Endpoint for TheCoffeeScore
 * Actions:
 * - POST /api/auth?action=register: Register new user
 * - POST /api/auth?action=login: Login existing user
 * - GET /api/auth?action=me&userId=...: Get current profile
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Ensure table schema exists
  try {
    await initTursoSchema();
  } catch (err: any) {
    console.warn('Schema check warning:', err.message);
  }

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const action = (req.query.action as string) || (req.body && req.body.action) || 'login';

  // GET Me
  if (req.method === 'GET' && action === 'me') {
    try {
      const { userId, email } = req.query;
      let user = null;

      if (userId && typeof userId === 'string') {
        user = await UserRepository.getUserById(userId);
      } else if (email && typeof email === 'string') {
        user = await UserRepository.getUserByEmail(email);
      }

      if (!user) {
        return res.status(404).json({ success: false, error: 'Usuario no encontrado' });
      }

      return res.status(200).json({ success: true, user });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err.message || 'Error al obtener usuario' });
    }
  }

  // POST Register & Login
  if (req.method === 'POST') {
    const { email, password, name, avatar } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'El correo electrónico y la contraseña son obligatorios.',
      });
    }

    if (action === 'register') {
      if (!name || name.trim().length < 2) {
        return res.status(400).json({
          success: false,
          error: 'Por favor introduce un nombre válido (mínimo 2 caracteres).',
        });
      }

      if (password.length < 6) {
        return res.status(400).json({
          success: false,
          error: 'La contraseña debe tener al menos 6 caracteres.',
        });
      }

      try {
        const user = await UserRepository.createUser(email, password, name, avatar);
        const token = generateSessionToken();

        return res.status(201).json({
          success: true,
          message: '¡Usuario registrado con éxito!',
          user,
          token,
        });
      } catch (err: any) {
        return res.status(400).json({
          success: false,
          error: err.message || 'Error al registrar el usuario.',
        });
      }
    }

    if (action === 'login') {
      try {
        const user = await UserRepository.authenticateUser(email, password);
        const token = generateSessionToken();

        return res.status(200).json({
          success: true,
          message: 'Inicio de sesión exitoso.',
          user,
          token,
        });
      } catch (err: any) {
        return res.status(401).json({
          success: false,
          error: err.message || 'Credenciales incorrectas.',
        });
      }
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
