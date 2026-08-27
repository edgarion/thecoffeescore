import React, { useState } from 'react';
import { X, Mail, Lock, User as UserIcon, Eye, EyeOff, Coffee, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, authModalTab, openAuthModal, login, register, isLoading } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (authModalTab === 'login') {
      const result = await login(email, password);
      if (!result.success) {
        setErrorMsg(result.error || 'Credenciales no válidas.');
      }
    } else {
      if (!name.trim()) {
        setErrorMsg('Por favor introduce tu nombre.');
        return;
      }
      const result = await register(name, email, password);
      if (!result.success) {
        setErrorMsg(result.error || 'Error al crear la cuenta.');
      } else {
        setSuccessMsg('¡Cuenta creada correctamente!');
      }
    }
  };

  const handleDemoLogin = async () => {
    setErrorMsg(null);
    setEmail('barista@thecoffeescore.com');
    setPassword('CoffeeScore2026!');
    setName('Barista Demo');
    const result = await login('barista@thecoffeescore.com', 'CoffeeScore2026!');
    if (!result.success) {
      // Auto-register demo account if not exists
      await register('Barista Demo', 'barista@thecoffeescore.com', 'CoffeeScore2026!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeAuthModal}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-[#fbfaf7] border border-[#e6e3da] rounded-2xl shadow-2xl overflow-hidden z-10 animate-scaleUp">
        {/* Header Decoration */}
        <div className="bg-gradient-to-r from-[#2c2825] to-[#1a1816] text-white p-6 relative">
          <button
            onClick={closeAuthModal}
            className="absolute top-4 right-4 text-stone-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Cerrar modal"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#e94e2b] flex items-center justify-center text-white shadow-md">
              <Coffee size={18} />
            </div>
            <span className="font-bold text-sm tracking-wider uppercase text-stone-300">thecoffeescore</span>
          </div>

          <h2 className="text-xl font-bold text-white">
            {authModalTab === 'login' ? 'Bienvenido de nuevo' : 'Únete a la comunidad del café'}
          </h2>
          <p className="text-xs text-stone-300 mt-1">
            {authModalTab === 'login'
              ? 'Inicia sesión para guardar tus cafeteras favoritas y sincronizar tu cesta.'
              : 'Crea tu cuenta para acceder a comparativas exclusivas y alertas de precios.'}
          </p>

          {/* Tab Switcher */}
          <div className="flex gap-2 mt-5 p-1 bg-black/40 rounded-xl border border-white/10">
            <button
              type="button"
              onClick={() => {
                setErrorMsg(null);
                openAuthModal('login');
              }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                authModalTab === 'login'
                  ? 'bg-white text-ink shadow-sm'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              Iniciar Sesión
            </button>
            <button
              type="button"
              onClick={() => {
                setErrorMsg(null);
                openAuthModal('register');
              }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                authModalTab === 'register'
                  ? 'bg-[#e94e2b] text-white shadow-sm'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              Crear Cuenta
            </button>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs rounded-xl flex items-center gap-2">
              <CheckCircle size={15} className="text-emerald-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {authModalTab === 'register' && (
            <div>
              <label className="block text-xs font-bold text-ink mb-1.5">Nombre Completo</label>
              <div className="relative">
                <UserIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="ej. Carlos Gómez"
                  className="w-full bg-white border border-[#e6e3da] focus:border-ink rounded-xl pl-10 pr-4 py-2.5 text-sm text-ink outline-none transition-colors"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-ink mb-1.5">Correo Electrónico</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full bg-white border border-[#e6e3da] focus:border-ink rounded-xl pl-10 pr-4 py-2.5 text-sm text-ink outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-bold text-ink">Contraseña</label>
              {authModalTab === 'login' && (
                <span className="text-[11px] text-stone-500 hover:text-ink cursor-pointer">
                  ¿Olvidaste tu contraseña?
                </span>
              )}
            </div>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={authModalTab === 'register' ? 'Mínimo 6 caracteres' : '••••••••'}
                className="w-full bg-white border border-[#e6e3da] focus:border-ink rounded-xl pl-10 pr-10 py-2.5 text-sm text-ink outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-ink"
                aria-label={showPassword ? 'Ocultar contraseña' : 'Ver contraseña'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-ink hover:bg-black text-white font-bold text-sm py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
          >
            <span>{isLoading ? 'Procesando...' : authModalTab === 'login' ? 'Acceder a mi cuenta' : 'Completar Registro'}</span>
            <ArrowRight size={15} />
          </button>

          {/* Quick Demo Access */}
          <div className="pt-2 border-t border-[#e6e3da]">
            <button
              type="button"
              onClick={handleDemoLogin}
              className="w-full bg-[#f4f2ec] hover:bg-stone-200 text-stone-800 font-semibold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-[#e6e3da]"
            >
              <Sparkles size={14} className="text-[#e94e2b]" />
              <span>Acceso Rápido con Usuario Demo</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
