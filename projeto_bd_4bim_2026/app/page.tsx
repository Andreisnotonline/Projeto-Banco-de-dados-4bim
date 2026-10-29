"use client";

import React, { useState, useEffect } from 'react';

// O restante do seu código continua aqui embaix
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'
  const [activeTab, setActiveTab] = useState('analytics');
  const [openFaq, setOpenFaq] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [emailInput, setEmailInput] = useState('');

  // Toast handler
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!emailInput) return;
    showToast('✨ Inscrito com sucesso! Verifique seu e-mail.');
    setEmailInput('');
  };

  return (
    <div className={darkMode ? 'dark bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-indigo-500 selection:text-white' : 'bg-slate-50 text-slate-950 min-h-screen font-sans selection:bg-indigo-500 selection:text-white'}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 animate-bounce border border-indigo-400/30">
          <svg className="w-5 h-5 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}

      {/* 1. Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 backdrop-blur-md border-b ${
        darkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-white/80 border-slate-200/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              NexusCloud
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#inicio" className="hover:text-indigo-500 transition-colors">Início</a>
            <a href="#recursos" className="hover:text-indigo-500 transition-colors">Recursos</a>
            <a href="#solucoes" className="hover:text-indigo-500 transition-colors">Soluções</a>
            <a href="#precos" className="hover:text-indigo-500 transition-colors">Preços</a>
            <a href="#contato" className="hover:text-indigo-500 transition-colors">Contato</a>
          </div>

          {/* Actions & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border transition-all ${darkMode ? 'border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800' : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              title="Alternar tema"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
              )}
            </button>
            <button onClick={() => showToast('Redirecionando para login...')} className="text-sm font-medium hover:text-indigo-500 transition-colors px-4 py-2">
              Entrar
            </button>
            <button onClick={() => showToast('Bem-vindo ao teste gratuito!')} className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-sm font-medium px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5">
              Começar Gratuitamente
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border ${darkMode ? 'border-slate-800 bg-slate-900 text-amber-400' : 'border-slate-200 bg-slate-100 text-slate-700'}`}
            >
              {darkMode ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg> : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-slate-100'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden px-4 pt-3 pb-6 border-b space-y-3 ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium">Início</a>
            <a href="#recursos" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium">Recursos</a>
            <a href="#solucoes" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium">Soluções</a>
            <a href="#precos" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium">Preços</a>
            <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium">Contato</a>
            <div className="pt-4 flex flex-col space-y-3">
              <button onClick={() => showToast('Redirecionando para login...')} className="w-full text-center py-2.5 font-medium border rounded-xl">Entrar</button>
              <button onClick={() => showToast('Bem-vindo ao teste gratuito!')} className="w-full py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl shadow-md">Começar Gratuitamente</button>
            </div>
          </div>
        )}
      </nav>

      {/* 2. Hero Section */}
      <section id="inicio" className="pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden relative">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs sm:text-sm font-semibold mb-8 animate-pulse">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
            <span>Novo: Lançamento do Motor de Inteligência Artificial V3.0</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight">
            Acelere seu negócio com a plataforma <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">SaaS Definitiva</span>
          </h1>

          {/* Subtitle */}
          <p className={`mt-6 text-lg sm:text-xl max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Automatize fluxos de trabalho, analise dados em tempo real com IA avançada e escale sua infraestrutura sem escrever uma única linha de código extra.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5">
            <button onClick={() => showToast('Iniciando período de teste gratuito de 14 dias!')} className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/55 hover:scale-105 transition-all duration-200">
              Iniciar Teste Gratuito 14 Dias
            </button>
            <button onClick={() => showToast('Demonstração agendada com sucesso!')} className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold border transition-all duration-200 ${darkMode ? 'border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700' : 'border-slate-300 bg-white hover:bg-slate-50'}`}>
              Agendar Demonstração
            </button>
          </div>

          <p className={`mt-4 text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            Sem cartão de crédito necessário • Configuração em menos de 2 minutos
          </p>

          {/* Simulated Dashboard Mockup */}
          <div className="mt-16 relative max-w-5xl mx-auto rounded-2xl p-2 sm:p-4 border bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent backdrop-blur-xl shadow-2xl">
            <div className={`rounded-xl border overflow-hidden shadow-2xl ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              
              {/* Mockup Header */}
              <div className={`px-4 py-3 border-b flex items-center justify-between ${darkMode ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-slate-50'}`}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className={`text-xs px-4 py-1 rounded-md border font-mono ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600'}`}>
                  app.nexuscloud.io/dashboard/analytics
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-xs text-emerald-500 font-medium">Ao Vivo</span>
                </div>
              </div>

              {/* Mockup Body */}
              <div className="p-6 sm:p-8 text-left">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                  <div>
                    <h2 className="text-xl font-bold">Visão Geral de Desempenho</h2>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Atualizado há 3 minutos atrás</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white shadow">Últimos 30 dias</button>
                    <button className={`px-3 py-1.5 text-xs font-semibold rounded-lg border ${darkMode ? 'border-slate-800 bg-slate-900 text-slate-400' : 'border-slate-200 bg-slate-100 text-slate-600'}`}>Exportar</button>
                  </div>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Receita Recorrente (ARR)</span>
                    <div className="text-2xl font-bold mt-1 text-indigo-500">R$ 1.248.900</div>
                    <span className="text-xs text-emerald-500 font-semibold mt-2 inline-flex items-center">
                      ↑ 24.8% este mês
                    </span>
                  </div>
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Novos Clientes Ativos</span>
                    <div className="text-2xl font-bold mt-1">14.892</div>
                    <span className="text-xs text-emerald-500 font-semibold mt-2 inline-flex items-center">
                      ↑ 12.3% este mês
                    </span>
                  </div>
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Taxa de Retenção (Churn)</span>
                    <div className="text-2xl font-bold mt-1 text-violet-500">99.4%</div>
                    <span className="text-xs text-emerald-500 font-semibold mt-2 inline-flex items-center">
                      ↑ 0.4% este mês
                    </span>
                  </div>
                </div>

                {/* Mock Chart Area */}
                <div className={`p-6 rounded-xl border flex items-end justify-between h-48 sm:h-64 gap-2 ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  {[40, 65, 45, 80, 55, 90, 75, 95, 85, 100, 88, 110].map((val, idx) => (
                    <div key={idx} className="w-full flex flex-col items-center gap-2 h-full justify-end group">
                      <div 
                        style={{ height: `${val}%` }} 
                        className="w-full bg-gradient-to-t from-indigo-600 to-violet-500 rounded-t-md group-hover:from-indigo-500 group-hover:to-pink-500 transition-all duration-300 relative"
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow">
                          R$ {val * 12}k
                        </div>
                      </div>
                      <span className={`text-[10px] ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>M{idx + 1}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. Partner Logos */}
      <section className={`py-12 border-y ${darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-slate-100/60 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={`text-xs uppercase tracking-widest font-semibold mb-8 ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
            Confiado por mais de 4.000 equipes inovadoras em todo o mundo
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-center opacity-70">
            {['Vercel', 'Stripe', 'Supabase', 'Linear', 'Retool', 'Framer'].map((brand, i) => (
              <div key={i} className={`text-xl font-bold tracking-wider uppercase transition-all hover:opacity-100 cursor-pointer ${darkMode ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-600 hover:text-indigo-600'}`}>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Features Section */}
      <section id="recursos" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-500 text-sm font-semibold uppercase tracking-wider">Recursos Poderosos</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 mb-4">Tudo o que você precisa para escalar com sucesso</h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Nossa plataforma foi construída do zero para oferecer velocidade máxima, segurança impecável e facilidade de uso inigualável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Desempenho Extremo',
                desc: 'Arquitetura edge-native distribuída globalmente para tempos de resposta inferiores a 10ms em qualquer continente.'
              },
              {
                icon: '🛡️',
                title: 'Segurança de Nível Bancário',
                desc: 'Criptografia ponta a ponta AES-256, conformidade com LGPD e SOC2 Type II garantidas por padrão.'
              },
              {
                icon: '🧠',
                title: 'IA Integrada Automatizada',
                desc: 'Modelos preditivos embutidos que antecipam gargalos operacionais e sugerem otimizações em tempo real.'
              },
              {
                icon: '📊',
                title: 'Analytics em Tempo Real',
                desc: 'Dashboards personalizáveis com métricas granulares para entender cada detalhe do comportamento do seu usuário.'
              },
              {
                icon: '🔌',
                title: 'Integrações Nativas',
                desc: 'Conecte-se facilmente a mais de 200 ferramentas como Slack, GitHub, Jira, Salesforce e bancos de dados populares.'
              },
              {
                icon: '🚀',
                title: 'Deploy em 1 Clique',
                desc: 'Esqueça configurações complexas. Suba ambientes de homologação e produção com apenas um clique.'
              }
            ].map((feat, idx) => (
              <div 
                key={idx}
                className={`p-8 rounded-2xl border transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-2xl ${
                  darkMode 
                    ? 'bg-slate-900/50 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900' 
                    : 'bg-white border-slate-200 hover:border-indigo-500/50 hover:shadow-indigo-500/5'
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{feat.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Interactive Demo Section */}
      <section id="solucoes" className={`py-24 border-y ${darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-100/50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-indigo-500 text-sm font-semibold uppercase tracking-wider">Simulador Interativo</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-6">Experimente o poder da nossa tecnologia</h2>
              <p className={`text-base mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Navegue pelas abas abaixo para ver como nossa solução resolve problemas complexos em segundos, desde análise de dados até automação de processos inteligentes.
              </p>

              <div className="space-y-3">
                {[
                  { id: 'analytics', title: '1. Analytics Preditivo com IA', desc: 'Preveja tendências de mercado com 98% de precisão.' },
                  { id: 'automation', title: '2. Automação de Workflows', desc: 'Crie rotinas complexas sem código usando blocos visuais.' },
                  { id: 'security', title: '3. Auditoria de Segurança', desc: 'Identifique vulnerabilidades antes que afetem seus usuários.' }
                ].map((tab) => (
                  <div 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      activeTab === tab.id 
                        ? (darkMode ? 'bg-indigo-950/40 border-indigo-500/60 shadow-lg shadow-indigo-500/10' : 'bg-indigo-50 border-indigo-300 shadow-md')
                        : (darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300')
                    }`}
                  >
                    <h4 className="font-bold text-base mb-1">{tab.title}</h4>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{tab.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className={`p-6 sm:p-8 rounded-2xl border shadow-2xl relative overflow-hidden ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                
                {/* Simulated Content based on activeTab */}
                {activeTab === 'analytics' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-bold text-lg">Módulo de Predição IA</h3>
                        <p className="text-xs text-indigo-500">Status: Analisando 45.920 fluxos simultâneos</p>
                      </div>
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-semibold rounded-full border border-emerald-500/20">Operando perfeitamente</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                        <span className="text-xs text-slate-400">Precisão do Modelo</span>
                        <div className="text-3xl font-extrabold mt-1 text-indigo-500">98.7%</div>
                      </div>
                      <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                        <span className="text-xs text-slate-400">Tempo de Resposta</span>
                        <div className="text-3xl font-extrabold mt-1 text-violet-500">4.2ms</div>
                      </div>
                    </div>
                    <div className={`p-4 rounded-xl border font-mono text-xs ${darkMode ? 'bg-slate-950 border-slate-800 text-indigo-300' : 'bg-slate-50 border-slate-200 text-indigo-600'}`}>
                      [AI Engine] Model training completed. Epoch 50/50.<br/>
                      [Inference] Confidence score: 0.989. Action approved.
                    </div>
                  </div>
                )}

                {activeTab === 'automation' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-bold text-lg">Construtor de Workflows No-Code</h3>
                        <p className="text-xs text-indigo-500">Fluxo ativo: Sincronização de Leads v2</p>
                      </div>
                      <span className="px-3 py-1 bg-indigo-500/10 text-indigo-500 text-xs font-semibold rounded-full border border-indigo-500/20">3 etapas ativas</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-indigo-600/10 border border-indigo-500/30">
                        <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">1</span>
                        <div>
                          <div className="font-semibold text-sm">Gatilho: Novo Webhook recebido</div>
                          <div className="text-xs text-slate-400">Endpoint: /api/v1/leads</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-violet-600/10 border border-violet-500/30">
                        <span className="w-8 h-8 rounded-lg bg-violet-600 text-white flex items-center justify-center font-bold text-xs">2</span>
                        <div>
                          <div className="font-semibold text-sm">Ação: Enriquecimento de Dados via IA</div>
                          <div className="text-xs text-slate-400">Busca automática em bases corporativas</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-pink-600/10 border border-pink-500/30">
                        <span className="w-8 h-8 rounded-lg bg-pink-600 text-white flex items-center justify-center font-bold text-xs">3</span>
                        <div>
                          <div className="font-semibold text-sm">Destino: Notificação no Slack & CRM</div>
                          <div className="text-xs text-slate-400">Canal #vendas-enterprise</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'security' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-bold text-lg">Painel de Conformidade e Segurança</h3>
                        <p className="text-xs text-emerald-500">Última varredura: Há 2 minutos</p>
                      </div>
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-semibold rounded-full border border-emerald-500/20">100% Seguro</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                        <span className="text-xs text-slate-400">Vulnerabilidades</span>
                        <div className="text-3xl font-extrabold mt-1 text-emerald-500">0 detectadas</div>
                      </div>
                      <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                        <span className="text-xs text-slate-400">Criptografia</span>
                        <div className="text-3xl font-extrabold mt-1 text-indigo-500">AES-256</div>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl border bg-emerald-500/10 border-emerald-500/20 text-emerald-500 text-sm font-medium">
                      ✓ Todos os certificados SSL e chaves de segurança estendidas estão atualizados.
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-500 text-sm font-semibold uppercase tracking-wider">Depoimentos</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 mb-4">Amado por líderes de tecnologia</h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Veja o que CTOs, fundadores e engenheiros dizem sobre a experiência com o NexusCloud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Carlos Eduardo',
                role: 'CTO na FinTech Brasil',
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
                quote: 'O NexusCloud reduziu nosso tempo de implantação de infraestrutura em 70%. É simplesmente indispensável para qualquer equipe de alta performance.'
              },
              {
                name: 'Mariana Souza',
                role: 'Head de Engenharia na ScaleUp',
                avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
                quote: 'A estabilidade e o suporte técnico são incomparáveis. Conseguimos escalar para mais de 10 milhões de requisições sem nenhum soluço.'
              },
              {
                name: 'Lucas Mendes',
                role: 'Fundador & CEO na DataPulse',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
                quote: 'O painel de analytics com inteligência artificial mudou totalmente a forma como tomamos decisões estratégicas. Recomendo de olhos fechados!'
              }
            ].map((t, idx) => (
              <div 
                key={idx}
                className={`p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                  darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center space-x-1 text-amber-400 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    ))}
                  </div>
                  <p className={`text-sm italic leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>"{t.quote}"</p>
                </div>
                
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-800/40">
                  <div className="w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center font-bold text-indigo-500 text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Pricing Section */}
      <section id="precos" className={`py-24 border-t ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-100/60 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-500 text-sm font-semibold uppercase tracking-wider">Planos Transparentes</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 mb-4">Investimento que cabe no seu crescimento</h2>
            <p className={`text-lg mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Escolha o plano ideal para sua equipe. Sem taxas ocultas, cancele quando quiser.
            </p>

            {/* Monthly / Annual Toggle */}
            <div className="inline-flex items-center p-1.5 rounded-xl border bg-slate-900/40 border-slate-800">
              <button 
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${billingCycle === 'monthly' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                Mensal
              </button>
              <button 
                onClick={() => setBillingCycle('annual')}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center space-x-2 ${billingCycle === 'annual' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                <span>Anual</span>
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/30">20% OFF</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {[
              {
                name: 'Starter',
                desc: 'Ideal para projetos iniciais e desenvolvedores independentes.',
                priceMonthly: 'R$ 49',
                priceAnnual: 'R$ 39',
                popular: false,
                features: ['Até 3 membros na equipe', '10.000 requisições/mês', 'Analytics básico', 'Suporte via comunidade', '1 ambiente de deploy']
              },
              {
                name: 'Pro',
                desc: 'Perfeito para empresas em rápido crescimento e scale-ups.',
                priceMonthly: 'R$ 189',
                priceAnnual: 'R$ 149',
                popular: true,
                features: ['Membros ilimitados na equipe', '500.000 requisições/mês', 'Analytics avançado com IA', 'Suporte prioritário 24/7', 'Ambientes ilimitados', 'Domínio customizado']
              },
              {
                name: 'Enterprise',
                desc: 'Para grandes corporações com necessidades avançadas de segurança.',
                priceMonthly: 'R$ 499',
                priceAnnual: 'R$ 399',
                popular: false,
                features: ['Tudo do plano Pro', 'Requisições ilimitadas', 'SLA de 99.99% garantido', 'Gerente de conta dedicado', 'Segurança SOC2 & LGPD avançada', 'Treinamento personalizado']
              }
            ].map((plan, idx) => (
              <div 
                key={idx}
                className={`p-8 rounded-3xl border flex flex-col justify-between relative transition-all duration-300 ${
                  plan.popular 
                    ? (darkMode ? 'bg-indigo-950/20 border-indigo-500 shadow-2xl shadow-indigo-500/10 scale-105' : 'bg-white border-indigo-500 shadow-2xl scale-105')
                    : (darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200')
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    Mais Popular
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold">{billingCycle === 'monthly' ? plan.priceMonthly : plan.priceAnnual}</span>
                    <span className={`text-sm ml-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>/ mês</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-center space-x-3 text-sm">
                        <svg className="w-5 h-5 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => showToast(`Plano ${plan.name} selecionado com sucesso!`)}
                  className={`w-full py-3.5 rounded-xl font-semibold transition-all shadow-lg ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-indigo-500/40'
                      : (darkMode ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-900 text-white hover:bg-slate-800')
                  }`}
                >
                  Começar com {plan.name}
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-500 text-sm font-semibold uppercase tracking-wider">Dúvidas Frequentes</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4">Tudo o que você precisa saber</h2>
            <p className={`text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Tem alguma pergunta? Aqui estão as respostas para as dúvidas mais comuns.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: 'Como funciona o período de teste gratuito?', a: 'Você tem acesso completo a todos os recursos do plano Pro por 14 dias sem precisar cadastrar nenhum cartão de crédito.' },
              { q: 'Posso mudar de plano a qualquer momento?', a: 'Sim! Você pode fazer upgrade ou downgrade do seu plano instantaneamente direto pelo seu painel de controle.' },
              { q: 'Meus dados estão seguros?', a: 'Com certeza. Utilizamos criptografia de ponta a ponta AES-256 e seguimos rigorosamente as normas da LGPD e SOC2 Type II.' },
              { q: 'Como funciona o suporte técnico?', a: 'Oferecemos suporte por e-mail e chat ao vivo para todos os planos, com atendimento prioritário 24/7 para clientes Pro e Enterprise.' }
            ].map((faq, idx) => (
              <div 
                key={idx}
                className={`rounded-2xl border overflow-hidden transition-all ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-bold flex items-center justify-between focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <svg className={`w-5 h-5 text-indigo-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </button>
                {openFaq === idx && (
                  <div className={`px-6 pb-4 text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`rounded-3xl p-8 sm:p-16 border relative overflow-hidden text-center bg-gradient-to-r from-indigo-900/40 via-violet-900/40 to-pink-900/40 ${darkMode ? 'border-indigo-500/30' : 'border-indigo-300'}`}>
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 max-w-3xl mx-auto">Pronto para transformar o futuro da sua empresa?</h2>
            <p className={`text-base sm:text-lg mb-8 max-w-xl mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Junte-se a milhares de equipes que já escalaram seus negócios com o NexusCloud. Comece agora mesmo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={() => showToast('Iniciando teste gratuito!')} className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-xl shadow-indigo-600/30 hover:scale-105 transition-all">
                Criar Conta Gratuita
              </button>
              <button onClick={() => showToast('Redirecionando para equipe de vendas...')} className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold border ${darkMode ? 'border-slate-700 bg-slate-900/80 hover:bg-slate-900' : 'border-slate-300 bg-white hover:bg-slate-50'}`}>
                Falar com Vendas
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className={`pt-16 pb-12 border-t ${darkMode ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
            
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">NexusCloud</span>
              </div>
              <p className={`text-sm max-w-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                A plataforma SaaS inovadora para equipes que buscam velocidade, inteligência e escalabilidade sem limites.
              </p>
              
              {/* Newsletter */}
              <form onSubmit={handleNewsletter} className="pt-2 flex max-w-sm gap-2">
                <input 
                  type="email" 
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Seu e-mail corporativo" 
                  className={`px-4 py-2.5 rounded-xl border text-sm w-full focus:outline-none focus:border-indigo-500 ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-300'}`}
                />
                <button type="submit" className="px-4 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl text-sm shadow hover:bg-indigo-500 transition-all">
                  Assinar
                </button>
              </form>
            </div>

            <div>
              <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Produto</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#recursos" className="hover:text-indigo-500 transition-colors">Recursos</a></li>
                <li><a href="#solucoes" className="hover:text-indigo-500 transition-colors">Soluções IA</a></li>
                <li><a href="#precos" className="hover:text-indigo-500 transition-colors">Preços</a></li>
                <li><a href="#inicio" className="hover:text-indigo-500 transition-colors">Atualizações</a></li>
              </ul>
            </div>

            <div>
              <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Empresa</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#contato" className="hover:text-indigo-500 transition-colors">Sobre Nós</a></li>
                <li><a href="#contato" className="hover:text-indigo-500 transition-colors">Carreiras <span className="text-[10px] bg-indigo-600 text-white px-1.5 py-0.5 rounded ml-1">Vagas</span></a></li>
                <li><a href="#contato" className="hover:text-indigo-500 transition-colors">Imprensa</a></li>
                <li><a href="#contato" className="hover:text-indigo-500 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Legal</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#contato" className="hover:text-indigo-500 transition-colors">Termos de Uso</a></li>
                <li><a href="#contato" className="hover:text-indigo-500 transition-colors">Política de Privacidade</a></li>
                <li><a href="#contato" className="hover:text-indigo-500 transition-colors">Segurança</a></li>
                <li><a href="#contato" className="hover:text-indigo-500 transition-colors">Cookies</a></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs">
            <p>© 2026 NexusCloud Inc. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#contato" className="hover:text-indigo-500 transition-colors">Twitter / X</a>
              <a href="#contato" className="hover:text-indigo-500 transition-colors">GitHub</a>
              <a href="#contato" className="hover:text-indigo-500 transition-colors">LinkedIn</a>
              <a href="#contato" className="hover:text-indigo-500 transition-colors">Discord</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}