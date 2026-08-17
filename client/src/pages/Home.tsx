// STYLE NOTE: Revi's page in handmade scrapbook / zine style.
// Features asymmetric layout, handwritten accents, lavender marker details, and real TikTok assets.

import { useState } from "react";
import { 
  Heart, 
  ArrowUpRight, 
  Sparkles, 
  Radio, 
  Send, 
  ChevronRight,
  Eye,
  Calendar
} from "lucide-react";

const assets = {
  avatar: `${import.meta.env.BASE_URL}assets/revi-avatar.jpg`,
  post1: `${import.meta.env.BASE_URL}assets/revi-post-1.jpg`,
  post2: `${import.meta.env.BASE_URL}assets/revi-post-2.jpg`,
  post3: `${import.meta.env.BASE_URL}assets/revi-post-3.jpg`,
};

export default function Home() {
  const [likes, setLikes] = useState({ 1: 342, 2: 419, 3: 528 });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const toggleLike = (id: number) => {
    setLikes(prev => ({ ...prev, [id]: prev[id as keyof typeof prev] + 1 }));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="site-shell" id="top">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-[#ddd6fe]">
        <a href="#top" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#8b5cf6] text-white font-black grid place-content-center shadow-[3px_3px_0_#1f1726]">
            R
          </div>
          <span className="font-black text-xl tracking-tight text-[#1f1726]">
            реви <span className="text-[#8b5cf6]">🤍</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase text-[#6b21a8]">
          <a href="#about" className="hover:text-[#8b5cf6] transition-colors">обо мне</a>
          <a href="#posts" className="hover:text-[#8b5cf6] transition-colors">моменты</a>
          <a href="#live" className="hover:text-[#8b5cf6] transition-colors">эфир</a>
        </nav>

        <a 
          href="https://www.tiktok.com/@revi_robloxer" 
          target="_blank" 
          rel="noreferrer"
          className="bg-[#1f1726] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-[4px_4px_0_#8b5cf6] hover:bg-[#8b5cf6] hover:shadow-[4px_4px_0_#1f1726] transition-all"
        >
          TikTok ↗
        </a>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#f3e8ff] border border-[#8b5cf6] px-4 py-1.5 rounded-full text-xs font-extrabold text-[#6d28d9] transform -rotate-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>не рЕви, а рЭви 🤍</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] text-[#1f1726]">
            мир <span className="bg-[#8b5cf6] text-white px-3 py-1 rounded-2xl inline-block transform rotate-1">роблокса</span>
            <br />
            и мои эфиры
          </h1>

          <p className="text-base sm:text-lg text-[#581c87] max-w-lg leading-relaxed">
            Привет! Я Реви. Собираю здесь лучшие моменты, полезные фишки, правила игры на «follow» и всё, чем делюсь в TikTok и Telegram.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#posts"
              className="bg-[#8b5cf6] text-white px-7 py-3.5 rounded-2xl font-black text-sm shadow-[5px_5px_0_#1f1726] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center gap-2"
            >
              <span>смотреть моменты</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a 
              href="https://t.me/revi_roblox"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-[#1f1726] border-2 border-[#1f1726] px-6 py-3.5 rounded-2xl font-black text-sm shadow-[4px_4px_0_#1f1726] hover:bg-[#f3e8ff] transition-all"
            >
              Telegram: Ревишка 🌸
            </a>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="absolute -inset-4 bg-[#8b5cf6]/10 rounded-3xl transform rotate-3 -z-10" />
          <div className="paper-card p-4 rounded-3xl max-w-sm w-full transform -rotate-2 hover:rotate-0 transition-transform">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/4.5] bg-[#f3e8ff]">
              <img 
                src={assets.avatar} 
                alt="Реви" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#8b5cf6] text-white px-3 py-1 rounded-full text-xs font-bold shadow">
                ЭФИР ⚡
              </div>
            </div>
            <div className="mt-4 px-2 flex items-center justify-between text-xs font-black text-[#1f1726]">
              <span>@revi_robloxer</span>
              <span className="text-[#8b5cf6]">4,216 подписчиков</span>
            </div>
          </div>
        </div>
      </section>

      {/* About / Profile Info Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-16 border-t border-[#ddd6fe]">
        <div className="flex items-center justify-between mb-8">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#6d28d9]">02 / обо мне и правила</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 paper-card p-8 rounded-3xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-[#1f1726]">Как поиграть со мной? ✨</h2>
              <p className="text-sm text-[#581c87] leading-relaxed">
                Реви 🤍 (не рЕви, а рЭви). Мой ник в Роблоксе: <strong className="text-[#1f1726] bg-[#f3e8ff] px-2 py-0.5 rounded">rev1o00r</strong> — заходим на стримы и играем через follow!
              </p>
              <p className="text-sm text-[#581c87] leading-relaxed">
                Цель канала: <strong className="text-[#1f1726]">10k звезд</strong> ⭐. Основной тгк: <a href="https://t.me/revi_roblox" target="_blank" rel="noreferrer" className="text-[#8b5cf6] underline font-bold">revi_roblox / Ревишка</a>.
              </p>
            </div>
            <div className="pt-4 border-t border-[#ddd6fe] flex items-center justify-between text-xs font-bold text-[#6d28d9]">
              <span>TikTok: @revi_robloxer</span>
              <span>Лапки вверх! 🐾</span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="paper-card p-6 rounded-3xl flex flex-col justify-between bg-[#fff]">
              <span className="text-xs font-bold text-[#6d28d9] uppercase">Роблокс ник</span>
              <span className="text-xl font-black text-[#1f1726] mt-2">rev1o00r</span>
              <span className="text-[10px] text-purple-400 mt-1">играем на follow</span>
            </div>
            <div className="paper-card p-6 rounded-3xl flex flex-col justify-between bg-[#fff]">
              <span className="text-xs font-bold text-[#6d28d9] uppercase">Цель канала</span>
              <span className="text-xl font-black text-[#1f1726] mt-2">10k ⭐</span>
              <span className="text-[10px] text-purple-400 mt-1">стремимся вместе</span>
            </div>
            <div className="paper-card p-6 rounded-3xl flex flex-col justify-between bg-[#fff]">
              <span className="text-xs font-bold text-[#6d28d9] uppercase">Telegram</span>
              <span className="text-base font-black text-[#1f1726] mt-2">revi_roblox</span>
              <span className="text-[10px] text-purple-400 mt-1">официальный канал</span>
            </div>
            <div className="paper-card p-6 rounded-3xl flex flex-col justify-between bg-[#fff]">
              <span className="text-xs font-bold text-[#6d28d9] uppercase">Статус</span>
              <span className="text-base font-black text-[#1f1726] mt-2">Актив 🌸</span>
              <span className="text-[10px] text-purple-400 mt-1">видео и эфиры</span>
            </div>
          </div>
        </div>
      </section>

      {/* Posts / Moments Section */}
      <section id="posts" className="max-w-7xl mx-auto px-6 py-16 border-t border-[#ddd6fe]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#6d28d9]">03 / моменты из TikTok</div>
            <h2 className="text-3xl font-black text-[#1f1726] mt-1">Последние ролики 🌸</h2>
          </div>
          <a 
            href="https://www.tiktok.com/@revi_robloxer" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-black text-[#8b5cf6] hover:text-[#6d28d9] transition-colors"
          >
            <span>Смотреть все в TikTok</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Post 1 */}
          <div className="paper-card rounded-3xl overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative aspect-video bg-[#f3e8ff] overflow-hidden border-b border-[#ddd6fe]">
                <img src={assets.post1} alt="Пост 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-[#1f1726] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Жизнь
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-black text-[#1f1726] leading-snug">сердца на связи (часть 1)</h3>
                <p className="text-xs text-[#581c87] leading-relaxed">Теплые моменты, общение с подписчиками и классные эмоции на стримах.</p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#ddd6fe] text-xs font-bold text-[#6d28d9]">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 17.08.2026</span>
              <span className="flex items-center gap-1.5"><Eye className="w-3.5 h-3.5" /> 444</span>
              <button 
                onClick={() => toggleLike(1)}
                className="flex items-center gap-1 text-[#8b5cf6] hover:scale-110 transition-transform cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-[#8b5cf6]" />
                <span>{likes[1]}</span>
              </button>
            </div>
          </div>

          {/* Post 2 */}
          <div className="paper-card rounded-3xl overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative aspect-video bg-[#f3e8ff] overflow-hidden border-b border-[#ddd6fe]">
                <img src={assets.post2} alt="Пост 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-[#1f1726] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Роблокс
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-black text-[#1f1726] leading-snug">везде очень дорого..</h3>
                <p className="text-xs text-[#581c87] leading-relaxed">Обзор цен, трендов и интересные ситуации в любимых режимах.</p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#ddd6fe] text-xs font-bold text-[#6d28d9]">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 16.08.2026</span>
              <span className="flex items-center gap-1.5"><Eye className="w-3.5 h-3.5" /> 322</span>
              <button 
                onClick={() => toggleLike(2)}
                className="flex items-center gap-1 text-[#8b5cf6] hover:scale-110 transition-transform cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-[#8b5cf6]" />
                <span>{likes[2]}</span>
              </button>
            </div>
          </div>

          {/* Post 3 */}
          <div className="paper-card rounded-3xl overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative aspect-video bg-[#f3e8ff] overflow-hidden border-b border-[#ddd6fe]">
                <img src={assets.post3} alt="Пост 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-[#1f1726] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Важно
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-black text-[#1f1726] leading-snug">виды скам на которые все ведутся</h3>
                <p className="text-xs text-[#581c87] leading-relaxed">Разбор безопасности, честные сделки и советы для игроков.</p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#ddd6fe] text-xs font-bold text-[#6d28d9]">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 15.08.2026</span>
              <span className="flex items-center gap-1.5"><Eye className="w-3.5 h-3.5" /> 506</span>
              <button 
                onClick={() => toggleLike(3)}
                className="flex items-center gap-1 text-[#8b5cf6] hover:scale-110 transition-transform cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-[#8b5cf6]" />
                <span>{likes[3]}</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Live / Telegram Banner */}
      <section id="live" className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-[#1f1726] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[8px_8px_0_#8b5cf6]">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#8b5cf6] px-3 py-1 rounded-full text-xs font-black">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>ТЕЛЕГРАМ КАНАЛ</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black">Ревишка на связи 🌸</h3>
            <p className="text-sm text-purple-200 max-w-md">Подпишись на Telegram-канал <code className="bg-white/10 px-2 py-0.5 rounded text-purple-200">revi_roblox</code>, чтобы первыми узнавать о стримах и новых видео!</p>
          </div>

          <a 
            href="https://t.me/revi_roblox"
            target="_blank"
            rel="noreferrer"
            className="bg-[#8b5cf6] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider shadow-[4px_4px_0_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center gap-2"
          >
            <span>перейти в тгк</span>
            <Send className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-16 mt-16 border-t border-[#ddd6fe]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <span className="font-black text-xl text-[#1f1726] block">реви 🤍</span>
            <p className="text-xs text-[#6d28d9] mt-2">Спасибо, что заглянул(а)! Люблю каждого из вас ✨</p>
          </div>
          <div className="flex items-center justify-center gap-6 text-xs font-black uppercase tracking-wider text-[#6d28d9]">
            <a href="https://www.tiktok.com/@revi_robloxer" target="_blank" rel="noreferrer" className="hover:text-[#1f1726]">TikTok</a>
            <a href="https://t.me/revi_roblox" target="_blank" rel="noreferrer" className="hover:text-[#1f1726]">Telegram</a>
            <a href="#top" className="hover:text-[#1f1726]">Наверх ↑</a>
          </div>
          <div className="text-right text-xs text-purple-400">
            © 2026 Реви · Handmade zine style
          </div>
        </div>
      </footer>

    </div>
  );
}
