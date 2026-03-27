/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Music, 
  BookOpen, 
  Printer, 
  CheckCircle2, 
  ChevronDown, 
  Star, 
  ShieldCheck, 
  Keyboard, 
  Layers, 
  Download,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

// --- Types & Constants ---

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const chordVariations = [
  "Maior", "Menor", "Acordes de Sétima Dominante", "Maj7", "m7", "m7(b5)", "dim7", 
  "sus4", "7sus4", "6", "m6", "9", "add9", "m9", "Maj9", "11", "m11", 
  "13", "7(b9)", "7(#9)", "7(b5)", "7(#5)", "Maj7(#11)", "m(Maj7)", "dim", "aug"
];

const features: Feature[] = [
  {
    icon: <Layers className="w-6 h-6 text-emerald-600" />,
    title: "312 Diagramas Detalhados",
    description: "Visualização clara de cada posição no teclado para aprendizado imediato."
  },
  {
    icon: <Music className="w-6 h-6 text-emerald-600" />,
    title: "26 Variações por Tom",
    description: "De tríades básicas às extensões mais complexas (9, 11, 13)."
  },
  {
    icon: <Printer className="w-6 h-6 text-emerald-600" />,
    title: "Formato A4 pronto para imprimir",
    description: "Desenvolvido especialmente para sua estante de partituras, sem complicações."
  },
  {
    icon: <Keyboard className="w-6 h-6 text-emerald-600" />,
    title: "Visualização em Teclado Virtual",
    description: "Gráficos intuitivos que imitam a visão real de um piano ou teclado."
  }
];

const faqs: FAQItem[] = [
  {
    question: "Como recebo o material?",
    answer: "Imediatamente após a compra, você receberá um e-mail com o link de download direto do PDF. Você pode salvá-lo em qualquer dispositivo."
  },
  {
    question: "É indicado para iniciantes?",
    answer: "Com certeza! O dicionário inclui desde os acordes mais básicos até os mais avançados, permitindo que você evolua no seu próprio ritmo."
  },
  {
    question: "Posso imprimir?",
    answer: "Sim, o arquivo está otimizado em formato A4 de alta resolução para que a impressão seja nítida e profissional."
  },
  {
    question: "E se eu tiver dúvidas sobre os acordes?",
    answer: "O guia é puramente visual e autoexplicativo, projetado para ser uma referência rápida enquanto você pratica ou compõe."
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-1.5 rounded-lg">
              <Music className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-stone-900">Eliab Campos <span className="text-emerald-600">Keys</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">Funcionalidades</a>
            <a href="#chords" className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">Acordes</a>
            <a href="#author" className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">Autor</a>
            <a href="#pricing" className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-200">
              Garantir Agora
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-stone-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <a href="#features" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-stone-600">Funcionalidades</a>
              <a href="#chords" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-stone-600">Acordes</a>
              <a href="#author" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-stone-600">Autor</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="block w-full text-center bg-emerald-600 text-white py-3 rounded-xl font-bold">Garantir Agora</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Star className="w-3 h-3 fill-current" />
              Guia Visual Definitivo
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 leading-[1.1] mb-6">
              Domine o Teclado com o Guia de Acordes Mais <span className="text-emerald-600">Completo e Visual</span>
            </h1>
            <p className="text-lg text-stone-600 mb-8 max-w-xl leading-relaxed">
              Esqueça buscas intermináveis na internet. Tenha 312 diagramas profissionais prontos para imprimir e eleve seu nível musical hoje mesmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#pricing" 
                className="animate-pulse-custom bg-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-200"
              >
                Baixar Dicionário <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-3 px-4 py-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/${i+10}/100/100`} 
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-stone-500">+500 músicos já utilizam</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white p-4 rounded-[2rem] shadow-2xl border border-stone-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-square bg-stone-100 rounded-[1.5rem] overflow-hidden relative group">
                <img 
                  src="https://i.ibb.co/nqhSnLH6/Chat-GPT-Image-23-de-mar-de-2026-09-10-36.png" 
                  alt="Dicionário de Acordes - Eliab Campos" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-200 rounded-full blur-3xl opacity-30 -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-400 rounded-full blur-3xl opacity-20 -z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
            Cansado de perder o ritmo procurando acordes?
          </h2>
          <p className="text-lg text-stone-600">
            Muitos músicos ficam frustrados quando esquecem uma posição complexa ou não encontram diagramas claros online. Perdem um tempo precioso que deveria ser gasto tocando.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-stone-50 border border-stone-100"
          >
            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <X className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">O Problema Comum</h3>
            <ul className="space-y-3 text-stone-600">
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                Buscas lentas no Google que interrompem sua inspiração.
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                Diagramas confusos ou incorretos.
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                Falta de organização por tons e variações.
              </li>
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100"
          >
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Nossa Solução</h3>
            <ul className="space-y-3 text-stone-600">
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                Acesso imediato a 312 acordes organizados.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                Design visual otimizado para aprendizado rápido.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                Material físico: Imprima e coloque na sua estante.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeaturesGrid = () => {
  return (
    <section id="features" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900">O que está incluso no dicionário?</h2>
          <p className="text-stone-600 mt-4">Tudo o que você precisa para dominar a harmonia em um só lugar.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-lg font-bold text-stone-900 mb-3">{feature.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChordList = () => {
  return (
    <section id="chords" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Variações inclusas em todos os 12 tons</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {chordVariations.map((chord, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-sm font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  {chord}
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-stone-400 text-sm">E muitas outras combinações essenciais para o músico moderno.</p>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const PDFPreview = () => {
  const previewImages = [
    "https://eliabcamposteclas.com/wp-content/uploads/2026/03/pagina_01.png",
    "https://eliabcamposteclas.com/wp-content/uploads/2026/03/pagina_02.png",
    "https://eliabcamposteclas.com/wp-content/uploads/2026/03/pagina_03.png",
    "https://eliabcamposteclas.com/wp-content/uploads/2026/03/pagina_04.png",
    "https://eliabcamposteclas.com/wp-content/uploads/2026/03/pagina_05.png",
    "https://eliabcamposteclas.com/wp-content/uploads/2026/03/pagina_06.png",
    "https://eliabcamposteclas.com/wp-content/uploads/2026/03/pagina_07.png",
    "https://eliabcamposteclas.com/wp-content/uploads/2026/03/pagina_08.png",
    "https://eliabcamposteclas.com/wp-content/uploads/2026/03/pagina_09.png",
    "https://eliabcamposteclas.com/wp-content/uploads/2026/03/pagina_10.png",
    "https://eliabcamposteclas.com/wp-content/uploads/2026/03/pagina_11.png",
    "https://eliabcamposteclas.com/wp-content/uploads/2026/03/pagina_12.png",
    "https://eliabcamposteclas.com/wp-content/uploads/2026/03/pagina_13.png",
    "https://eliabcamposteclas.com/wp-content/uploads/2026/03/pagina_14.png",
    "https://eliabcamposteclas.com/wp-content/uploads/2026/03/pagina_15.png",
  ];

  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Veja o Material por Dentro</h2>
        <p className="text-stone-600">Um guia visual completo, organizado e profissional para seu aprendizado.</p>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-6 py-4"
          animate={{
            x: [0, -2880], // Total width of one set of images (15 * (320px + 24px gap) = 5160px, wait)
            // Let's use a more dynamic approach or a fixed width that works.
            // 15 images * 320px = 4800px. Plus gaps.
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
        >
          {[...previewImages, ...previewImages, ...previewImages].map((img, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-64 md:w-80 aspect-[3/4] bg-white rounded-2xl shadow-lg border border-stone-100 overflow-hidden group"
            >
              <img 
                src={img} 
                alt={`Página ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Author = () => {
  return (
    <section id="author" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Sobre o Autor</h2>
            <h3 className="text-2xl font-bold text-emerald-600 mb-4">Eliab Campos Keys</h3>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              Músico e educador com anos de experiência transformando a forma como tecladistas entendem a harmonia. Sua abordagem visual ajudou centenas de alunos a superar a barreira da teoria complexa.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-yellow-500">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-stone-500 font-medium">Autoridade em Educação Musical</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://eliabcamposteclas.com/wp-content/uploads/2025/01/PERFIL-2-ELIAB.jpg?v=2" 
                alt="Eliab Campos Keys" 
                className="rounded-[2rem] md:rounded-[3rem] shadow-2xl w-full aspect-square object-cover"
                crossOrigin="anonymous"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-8 rounded-3xl shadow-xl hidden lg:block">
                <p className="text-4xl font-black mb-1">10+</p>
                <p className="text-xs font-bold uppercase tracking-widest">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Invista no seu Talento Musical</h2>
          <p className="text-stone-600">Acesso imediato e vitalício ao material completo.</p>
        </div>

        <div className="max-w-lg mx-auto">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-[3rem] shadow-2xl border-2 border-emerald-600 overflow-hidden relative"
          >
            <div className="bg-emerald-600 py-4 text-center text-white text-sm font-bold uppercase tracking-widest">
              Oferta de Lançamento
            </div>
            <div className="p-6 sm:p-10 md:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Dicionário de Acordes</h3>
                <p className="text-stone-500 text-sm">Guia Visual Completo em PDF</p>
              </div>

              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-8">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Por apenas</span>
                  <span className="text-4xl sm:text-5xl font-black text-stone-900">R$ 19,90</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-stone-400 line-through">De R$ 47,00</span>
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-lg text-[10px] font-bold mt-1">57% DESCONTO</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "312 Diagramas em alta resolução",
                  "26 Variações em todos os tons",
                  "Formato A4 pronto para imprimir",
                  "Acesso vitalício",
                  "Atualizações gratuitas"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://pay.kiwify.com.br/pctaMj8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 text-white py-5 rounded-2xl text-xl font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center justify-center gap-3 mb-6"
              >
                Comprar Agora <Download className="w-6 h-6" />
              </a>

              <div className="flex items-center justify-center gap-6 text-stone-400">
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-6 h-6" />
                  <span className="text-[10px] font-bold uppercase">Pagamento Seguro</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Star className="w-6 h-6" />
                  <span className="text-[10px] font-bold uppercase">7 Dias de Garantia</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-stone-100 rounded-2xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
              >
                <span className="font-bold text-stone-900">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-stone-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-1.5 rounded-lg">
              <Music className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">Eliab Campos <span className="text-emerald-600">Keys</span></span>
          </div>
          <div className="text-stone-400 text-sm">
            © {new Date().getFullYear()} Eliab Campos Keys. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-stone-400 hover:text-white transition-colors">Termos</a>
            <a href="#" className="text-stone-400 hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <FeaturesGrid />
        <ChordList />
        <PDFPreview />
        <Author />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
