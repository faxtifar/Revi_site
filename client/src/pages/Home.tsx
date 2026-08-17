// STYLE NOTE: Revi's page is built with a clean lavender-purple aesthetic matching the user reference.
// Features top navigation, hero introduction with real avatar, about cards, posts grid, newsletter and footer.

import { useState } from "react";
import { 
  Heart, 
  ArrowUpRight, 
  Sparkles, 
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
    <div className="min-h-screen bg-[#faf5ff] text-[#2e1065] selection:bg-[#ddd6fe] selection:text-[#1e1b4b]">
      
      {/* Top Header Navigation matching reference */}
      <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-b border-[#e9d5ff]">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-[#7c3aed] to-[#c084fc] bg-clip-text text-transparent">
            реви 🤍
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-[#5b21b6]">
          <a href="#top" className="hover:text-[#7c3aed] transition-colors">Главная</a>
          <a href="#about" className="hover:text-[#7c3aed] transition-colors">Обо мне</a>
          <a href="#posts" className="hover:text-[#7c3aed] transition-colors">Блог</a>
          <a href="#gallery" className="hover:text-[#7c3aed] transition-colors">Галерея</a>
          <a href="#contact" className="hover:text-[#7c3aed] transition-colors">Контакты</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3 text-[#7c3aed]">
            <a href="https://www.tiktok.com/@revi_robloxer" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
            </a>
            <a href="https://t.me/revi_roblox" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
              <Send className="w-4 h-4" />
            </a>
          </div>

          <a 
            href="https://www.tiktok.com/@revi_robloxer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#8b5cf6] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#7c3aed] hover:shadow-lg transition-all"
          >
            Подписаться
          </a>
        </div>
      </header>

      {/* Hero Section matching reference */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#f3e8ff] border border-[#d8b4fe] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#7c3aed]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Привет! Я Реви 🌸</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-[#3b0764]">
            Давайте<br />
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#db2777] bg-clip-text text-transparent">познакомимся!</span>
          </h1>

          <p className="text-lg md:text-xl text-[#5b21b6]/80 max-w-xl font-normal leading-relaxed">
            Это мой сигнально-ознакомительный сайт. Здесь ты узнаешь обо мне, моём блоге, интересах и последних событиях.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#about"
              className="bg-[#8b5cf6] text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-[#8b5cf6]/25 hover:bg-[#7c3aed] hover:translate-y-[-2px] transition-all flex items-center gap-2"
            >
              <span>Узнать больше</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a 
              href="#posts"
              className="bg-white text-[#5b21b6] border border-[#d8b4fe] px-6 py-3.5 rounded-2xl font-bold text-sm shadow-sm hover:bg-[#f3e8ff] transition-all"
            >
              Перейти в блог
            </a>
          </div>
        </div>

        {/* Hero Photo Card matching reference */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="lavender-card p-4 rounded-3xl max-w-sm w-full transform rotate-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/4.5] bg-[#f3e8ff]">
              <img 
                src={assets.avatar} 
                alt="Реви" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#7c3aed] shadow-sm">
                Live Laugh Blog 🤍
              </div>
            </div>
            <div className="mt-4 px-2 flex items-center justify-between text-xs font-bold text-[#6d28d9]">
              <span>@revi_robloxer</span>
              <span>4,216 подписчиков</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section matching reference */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-16 border-t border-[#e9d5ff]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#3b0764] flex items-center gap-3">
            <span>Обо мне</span>
            <span className="text-lg">🤍</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 lavender-card p-8 rounded-3xl flex flex-col justify-between space-y-6">
            <p className="text-[#5b21b6] leading-relaxed font-medium">
              Реви 🤍 (не рЕви, а рЭви) рб: rev1o00r чтобы со мной поиграть на «follow». Люблю создавать контент, общаться с вами и дарить хорошее настроение!
            </p>
            <a 
              href="https://t.me/revi_roblox" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#f3e8ff] text-[#7c3aed] font-bold py-3 px-6 rounded-2xl hover:bg-[#e9d5ff] transition-colors text-sm"
            >
              <span>Тгк: revi_roblox / Ревишка</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="lavender-card p-6 rounded-3xl text-center flex flex-col items-center justify-center space-y-3">
              <span className="text-2xl">🤍</span>
              <span className="text-xs font-bold text-[#7c3aed] uppercase tracking-wider">Ник</span>
              <span className="text-sm font-extrabold text-[#3b0764]">Реви</span>
            </div>
            <div className="lavender-card p-6 rounded-3xl text-center flex flex-col items-center justify-center space-y-3">
              <span className="text-2xl">🌸</span>
              <span className="text-xs font-bold text-[#7c3aed] uppercase tracking-wider">Роблокс</span>
              <span className="text-sm font-extrabold text-[#3b0764]">rev1o00r</span>
            </div>
            <div className="lavender-card p-6 rounded-3xl text-center flex flex-col items-center justify-center space-y-3">
              <span className="text-2xl">🎯</span>
              <span className="text-xs font-bold text-[#7c3aed] uppercase tracking-wider">Цель</span>
              <span className="text-sm font-extrabold text-[#3b0764]">10k звезд</span>
            </div>
            <div className="lavender-card p-6 rounded-3xl text-center flex flex-col items-center justify-center space-y-3">
              <span className="text-2xl">⭐</span>
              <span className="text-xs font-bold text-[#7c3aed] uppercase tracking-wider">Деятельность</span>
              <span className="text-sm font-extrabold text-[#3b0764]">Блогер</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section matching reference */}
      <section id="posts" className="max-w-7xl mx-auto px-6 py-16 border-t border-[#e9d5ff]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#3b0764]">Последние посты 🌸</h2>
          <a 
            href="https://www.tiktok.com/@revi_robloxer" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#7c3aed] hover:text-[#6d28d9] transition-colors"
          >
            <span>Перейти в блог</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Post 1 */}
          <div className="lavender-card rounded-3xl overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative aspect-video bg-[#f3e8ff] overflow-hidden">
                <img src={assets.post1} alt="Пост 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-[#7c3aed] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Жизнь
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-[#3b0764] leading-snug">сердца на связи (часть 1)</h3>
                <p className="text-xs text-[#5b21b6]/80 leading-relaxed">Рассказываю о новых знакомствах, приятных моментах и том, что вдохновляет каждый день.</p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#f3e8ff] text-xs font-medium text-[#6d28d9]">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 17.08.2026</span>
              <span className="flex items-center gap-1.5"><Eye className="w-3.5 h-3.5" /> 444</span>
              <button 
                onClick={() => toggleLike(1)}
                className="flex items-center gap-1 text-[#7c3aed] hover:scale-110 transition-transform cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-[#7c3aed]" />
                <span>{likes[1]}</span>
              </button>
            </div>
          </div>

          {/* Post 2 */}
          <div className="lavender-card rounded-3xl overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative aspect-video bg-[#f3e8ff] overflow-hidden">
                <img src={assets.post2} alt="Пост 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-[#7c3aed] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Блог
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-[#3b0764] leading-snug">везде очень дорого..</h3>
                <p className="text-xs text-[#5b21b6]/80 leading-relaxed">Моя история создания роликов в Roblox и самые интересные моменты из мира трендов.</p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#f3e8ff] text-xs font-medium text-[#6d28d9]">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 16.08.2026</span>
              <span className="flex items-center gap-1.5"><Eye className="w-3.5 h-3.5" /> 322</span>
              <button 
                onClick={() => toggleLike(2)}
                className="flex items-center gap-1 text-[#7c3aed] hover:scale-110 transition-transform cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-[#7c3aed]" />
                <span>{likes[2]}</span>
              </button>
            </div>
          </div>

          {/* Post 3 */}
          <div className="lavender-card rounded-3xl overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative aspect-video bg-[#f3e8ff] overflow-hidden">
                <img src={assets.post3} alt="Пост 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-[#7c3aed] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Мысли
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-[#3b0764] leading-snug">виды скам на которые все ведутся</h3>
                <p className="text-xs text-[#5b21b6]/80 leading-relaxed">Разбираем важные темы безопасности и делимся честным мнением об игровых сделках.</p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#f3e8ff] text-xs font-medium text-[#6d28d9]">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 15.08.2026</span>
              <span className="flex items-center gap-1.5"><Eye className="w-3.5 h-3.5" /> 506</span>
              <button 
                onClick={() => toggleLike(3)}
                className="flex items-center gap-1 text-[#7c3aed] hover:scale-110 transition-transform cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-[#7c3aed]" />
                <span>{likes[3]}</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Newsletter Banner matching reference */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-[#8b5cf6]/20">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black">Будь в курсе!</h3>
            <p className="text-sm text-purple-100 max-w-md">Подпишись на рассылку, чтобы не пропустить новые посты и интересные новости!</p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            {subscribed ? (
              <div className="bg-white/20 backdrop-blur-md px-6 py-3.5 rounded-2xl text-sm font-bold text-center">
                ✨ Спасибо за подписку!
              </div>
            ) : (
              <>
                <input 
                  type="email" 
                  placeholder="Твой e-mail" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white text-[#2e1065] px-5 py-3.5 rounded-2xl text-sm focus:outline-none w-full sm:w-72 placeholder:text-purple-300 font-medium"
                />
                <button 
                  type="submit" 
                  className="bg-[#2e1065] text-white px-7 py-3.5 rounded-2xl text-sm font-bold uppercase tracking-wider hover:bg-[#1e1b4b] transition-colors shadow-md"
                >
                  Подписаться
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* Footer matching reference */}
      <footer id="contact" className="bg-[#1e1b4b] text-purple-200 py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-purple-900/50 pb-12">
          
          <div className="space-y-4 md:col-span-1">
            <span className="font-extrabold text-xl text-white block">реви 🤍</span>
            <p className="text-xs text-purple-300 leading-relaxed">Спасибо, что ты тут!<br />Люблю каждого из вас 🤍</p>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">Навигация</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#top" className="hover:text-white transition-colors">Главная</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Обо мне</a></li>
              <li><a href="#posts" className="hover:text-white transition-colors">Блог</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Галерея</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">Информация</h4>
            <ul className="space-y-2.5 text-xs">
              <li><span className="hover:text-white transition-colors cursor-pointer">Правила сайта</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Политика конфиденциальности</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Сотрудничество</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">Социальные сети</h4>
            <div className="flex items-center gap-4">
              <a href="https://www.tiktok.com/@revi_robloxer" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-purple-900/60 flex items-center justify-center hover:bg-[#8b5cf6] text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
              </a>
              <a href="https://t.me/revi_roblox" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-purple-900/60 flex items-center justify-center hover:bg-[#8b5cf6] text-white transition-colors">
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-400 gap-4">
          <span>© 2026 Реви. Все права защищены.</span>
          <a href="#top" className="hover:text-white transition-colors">Наверх ↑</a>
        </div>
      </footer>

    </div>
  );
}
