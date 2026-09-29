import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Logo from '../components/Logo';
import { 
  ShieldCheck, 
  Briefcase, 
  UserCheck, 
  Lock, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function LoginPage() {
  const { loginUser, navigateTo, auth } = useApp();

  // Role Switch State: 'ADMIN' | 'WORKER'
  const [selectedRole, setSelectedRole] = useState('ADMIN');
  
  const [username, setUsername] = useState('admin@skff');
  const [password, setPassword] = useState('Admin@123');
  const [errorMsg, setErrorMsg] = useState('');

  const handleRoleSwitch = (role) => {
    setSelectedRole(role);
    setErrorMsg('');
    if (role === 'ADMIN') {
      setUsername('admin@skff');
      setPassword('Admin@123');
    } else {
      setUsername('worker01@skff');
      setPassword('Worker@123');
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    const result = loginUser(username, password, selectedRole);
    if (!result.success) {
      setErrorMsg(result.message);
    }
  };

  return (
    <div className="min-h-[85vh] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-b from-[#FAF7F5] via-[#FDF2F4] to-[#FAF7F5]">
      
      <div className="w-full max-w-md space-y-8">
        
        {/* Header Branding */}
        <div className="text-center space-y-3">
          <div className="inline-block cursor-pointer" onClick={() => navigateTo('home')}>
            <Logo />
          </div>
          <h2 className="font-serif-skff text-3xl font-bold text-[#1F2421]">
            Portal Authentication
          </h2>
          <p className="text-xs text-[#555A6E]">
            Secure access portal for SKFF Administrators, Workers, and Sales Managers.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white border border-[#F0E1E4] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
          
          {/* Top Decorative Glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#F9D5E1]/40 rounded-full blur-2xl pointer-events-none" />

          {/* REQUIREMENT 1: Clean Role Selection / Switch Option */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A90A3] block text-center">
              Select Login Access Role
            </span>

            <div className="grid grid-cols-2 gap-2 p-1.5 bg-[#FAF7F5] border border-[#F0E1E4] rounded-2xl">
              <button
                type="button"
                onClick={() => handleRoleSwitch('ADMIN')}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  selectedRole === 'ADMIN'
                    ? 'bg-[#D92550] text-white shadow-md'
                    : 'text-[#555A6E] hover:text-[#2D3142] hover:bg-white/60'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                Login as Admin
              </button>

              <button
                type="button"
                onClick={() => handleRoleSwitch('WORKER')}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  selectedRole === 'WORKER'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-[#555A6E] hover:text-[#2D3142] hover:bg-white/60'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Login as Worker
              </button>
            </div>
          </div>

          {/* Subheader Role Badge */}
          <div className={`p-3 rounded-2xl border text-xs font-semibold flex items-center gap-2.5 ${
            selectedRole === 'ADMIN'
              ? 'bg-[#FDF2F4] border-[#F9D5E1] text-[#D92550]'
              : 'bg-amber-50 border-amber-200 text-amber-900'
          }`}>
            {selectedRole === 'ADMIN' ? (
              <>
                <ShieldCheck className="w-5 h-5 text-[#D92550] shrink-0" />
                <div>
                  <span className="font-bold block">Administrator Mode</span>
                  <span className="text-[10px] text-[#555A6E] font-normal">Full order management, product CRUD, worker monitoring & settings.</span>
                </div>
              </>
            ) : (
              <>
                <Briefcase className="w-5 h-5 text-amber-700 shrink-0" />
                <div>
                  <span className="font-bold block">Worker / Sales Manager Mode</span>
                  <span className="text-[10px] text-amber-800 font-normal">Create client orders, log specifications, track assigned order workflow.</span>
                </div>
              </>
            )}
          </div>

          {/* Error Banner */}
          {errorMsg && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3.5 rounded-2xl text-xs flex items-center gap-2 animate-shake">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            
            <div>
              <label className="block text-xs font-bold text-[#2D3142] mb-1.5">
                {selectedRole === 'ADMIN' ? 'Admin Username / Email' : 'Worker Username / Email'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={selectedRole === 'ADMIN' ? 'admin@skff' : 'worker01@skff'}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F5] border border-[#F0E1E4] rounded-xl text-xs font-semibold text-[#2D3142] focus:outline-none focus:ring-2 focus:ring-[#D92550]/30 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2D3142] mb-1.5">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F5] border border-[#F0E1E4] rounded-xl text-xs font-semibold text-[#2D3142] focus:outline-none focus:ring-2 focus:ring-[#D92550]/30 focus:bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-xl text-xs font-bold tracking-wider uppercase text-white transition-all shadow-md flex items-center justify-center gap-2 ${
                selectedRole === 'ADMIN'
                  ? 'bg-[#D92550] hover:bg-[#C11B43]'
                  : 'bg-amber-600 hover:bg-amber-700'
              }`}
            >
              Sign In to {selectedRole === 'ADMIN' ? 'Admin Dashboard' : 'Worker Portal'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Demo Quick-Fill Credentials Card */}
          <div className="pt-4 border-t border-gray-100 space-y-2 text-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A90A3] block text-center">
              ⚡ Quick Demo Login Presets
            </span>

            <div className="grid grid-cols-1 gap-2">
              <button
                type="button"
                onClick={() => {
                  setSelectedRole('ADMIN');
                  setUsername('admin@skff');
                  setPassword('Admin@123');
                }}
                className="w-full text-left p-2.5 rounded-xl bg-[#FAF7F5] hover:bg-[#FDF2F4] border border-[#F0E1E4] hover:border-[#F9D5E1] transition-all flex items-center justify-between"
              >
                <div>
                  <span className="font-bold text-[#D92550] text-[11px] block">Admin Account</span>
                  <span className="text-[10px] text-gray-500 font-mono">admin@skff / Admin@123</span>
                </div>
                <span className="text-[10px] bg-[#FCE7EC] text-[#D92550] font-bold px-2 py-0.5 rounded">Fill</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedRole('WORKER');
                  setUsername('worker01@skff');
                  setPassword('Worker@123');
                }}
                className="w-full text-left p-2.5 rounded-xl bg-[#FAF7F5] hover:bg-amber-50 border border-[#F0E1E4] hover:border-amber-200 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="font-bold text-amber-900 text-[11px] block">Worker 1: Rajesh Kumar</span>
                  <span className="text-[10px] text-gray-500 font-mono">worker01@skff / Worker@123</span>
                </div>
                <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">Fill</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedRole('WORKER');
                  setUsername('worker02@skff');
                  setPassword('Worker@123');
                }}
                className="w-full text-left p-2.5 rounded-xl bg-[#FAF7F5] hover:bg-amber-50 border border-[#F0E1E4] hover:border-amber-200 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="font-bold text-amber-900 text-[11px] block">Worker 2: Priya Sharma</span>
                  <span className="text-[10px] text-gray-500 font-mono">worker02@skff / Worker@123</span>
                </div>
                <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">Fill</span>
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
