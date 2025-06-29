"use client";
import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";

const SERVICE_ID = "service_fnidsvo";
const TEMPLATE_ID = "template_rmvmgib";
const PUBLIC_KEY = "Dzwxo7QCyiJhRZ7xS";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "", projectType: "Website institucional" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const selectRef = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const projectTypes = [
    "Website institucional",
    "E-commerce",
    "Aplicativo mobile",
    "Dashboard/Admin",
    "Landing page",
    "Blog",
    "Outro"
  ];

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: `Tipo de projeto: ${form.projectType}\nMensagem: ${form.message}`,
        },
        PUBLIC_KEY
      );
      setSuccess("Mensagem enviada com sucesso!");
      setForm({ name: "", email: "", message: "", projectType: "Website institucional" });
    } catch (err) {
      setError("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md flex flex-col gap-7 animate-slide-up-fade"
      aria-label="Formulário de contato"
    >
      <h2 className="text-3xl font-extrabold mb-4 text-left bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight">Enviar mensagem</h2>
      <input
        type="text"
        name="name"
        placeholder="Seu nome"
        value={form.name}
        onChange={handleChange}
        required
        autoComplete="name"
        className="rounded-xl px-5 py-3 bg-white/10 backdrop-blur-md text-white border border-cyan-400/40 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 shadow-lg text-lg placeholder-gray-300"
        aria-label="Seu nome"
      />
      <input
        type="email"
        name="email"
        placeholder="Seu e-mail"
        value={form.email}
        onChange={handleChange}
        required
        autoComplete="email"
        className="rounded-xl px-5 py-3 bg-white/10 backdrop-blur-md text-white border border-cyan-400/40 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 shadow-lg text-lg placeholder-gray-300"
        aria-label="Seu e-mail"
      />
      <div ref={selectRef} className="relative mb-2">
        <button
          type="button"
          className={`w-full rounded-xl px-5 py-3 bg-white/10 backdrop-blur-md text-white border border-cyan-400/40 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 shadow-lg text-lg flex items-center justify-between ${dropdownOpen ? 'ring-2 ring-cyan-400' : ''}`}
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
          onClick={() => setDropdownOpen((open) => !open)}
        >
          <span>{form.projectType}</span>
          <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </button>
        {dropdownOpen && (
          <ul
            tabIndex={-1}
            className="absolute z-20 mt-2 w-full rounded-xl bg-black/80 border border-cyan-400/40 shadow-xl backdrop-blur-md text-white text-lg max-h-60 overflow-auto animate-fade-in"
            role="listbox"
          >
            {projectTypes.map((type) => (
              <li
                key={type}
                role="option"
                aria-selected={form.projectType === type}
                className={`px-5 py-3 cursor-pointer hover:bg-cyan-600/30 transition-colors duration-200 ${form.projectType === type ? 'bg-cyan-700/30' : ''}`}
                onClick={() => {
                  setForm((f) => ({ ...f, projectType: type }));
                  setDropdownOpen(false);
                }}
              >
                {type}
              </li>
            ))}
          </ul>
        )}
      </div>
      <textarea
        name="message"
        placeholder="Sua mensagem"
        value={form.message}
        onChange={handleChange}
        required
        rows={5}
        className="rounded-xl px-5 py-3 bg-white/10 backdrop-blur-md text-white border border-cyan-400/40 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 shadow-lg text-lg placeholder-gray-300 resize-none min-h-[120px]"
        aria-label="Sua mensagem"
      />
      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 text-white font-bold py-3 rounded-xl mt-2 shadow-lg transition-all duration-300 hover:from-purple-400 hover:via-cyan-400 hover:to-blue-400 hover:shadow-[0_0_24px_6px_rgba(80,200,255,0.18)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-transparent active:scale-95 text-lg tracking-wide disabled:opacity-60"
        aria-busy={loading}
      >
        {loading ? "Enviando..." : <><FaPaperPlane className="text-xl" /> Enviar</>}
      </button>
      {success && <div className="text-green-400 text-center mt-2 animate-bounce-in text-base font-bold drop-shadow-lg">{success}</div>}
      {error && <div className="text-red-400 text-center mt-2 animate-bounce-in text-base font-bold drop-shadow-lg">{error}</div>}
      <style jsx>{`
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up-fade {
          animation: slideUpFade 1s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.8); }
          60% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-bounce-in {
          animation: bounceIn 0.7s cubic-bezier(0.68,-0.55,0.27,1.55) both;
        }
      `}</style>
    </form>
  );
} 