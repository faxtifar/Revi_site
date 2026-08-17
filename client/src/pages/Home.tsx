/*
 * Pixel Diary style note:
 * This page treats Revi as a person and creator, not as a social-feed clone.
 * Keep the editorial asymmetry, paper-like spacing, strawberry-red annotations,
 * and warm human voice intact when extending the page.
 */
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Instagram, Menu, Play, Send, X } from "lucide-react";

const archive = [
  {
    number: "01",
    title: "Сердца на связи",
    note: "чуть драматично, зато честно",
    image: "/manus-storage/revi-world_141931d4.png",
    tone: "cream",
  },
  {
    number: "02",
    title: "Скрам в лобби",
    note: "дорого — не значит безопасно",
    image: "/manus-storage/revi-live_7ea8dbc4.png",
    tone: "red",
  },
  {
    number: "03",
    title: "Играем до эфира",
    note: "заходи, пока сервер не упал",
    image: "/manus-storage/revi-hero_fbdeb0d4.png",
    tone: "ink",
  },
];

const socials = [
  { label: "Telegram", handle: "revi_roblox", href: "https://t.me/revi_roblox", icon: Send },
  { label: "TikTok", handle: "@revi_roblox", href: "https://www.tiktok.com/@revi_roblox", icon: Play },
  { label: "Instagram", handle: "revi_roblox", href: "https://www.instagram.com/revi_roblox/", icon: Instagram },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("archive");

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Revi — на главную">
          <span className="brand-mark" aria-hidden="true"><img src="/manus-storage/revi-mark_cbe4dfbe.png" alt="" /></span>
          <span className="brand-name">revi</span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Основная навигация">
          <a href="#about" onClick={closeMenu}>about</a>
          <a href="#archive" onClick={closeMenu}>архив</a>
          <a href="#live" onClick={closeMenu}>эфир</a>
          <a href="#links" onClick={closeMenu}>связь</a>
        </nav>
        <div className="header-actions">
          <span className="status-pill"><i /> сейчас онлайн</span>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> creator / roblox / ru</p>
          <h1>Игры,<br /><em>характер</em><br />и немного скрама.</h1>
          <p className="hero-lede">Я — Revi. Строю странные миры, нахожу своих людей и превращаю каждый заход в историю, которую хочется досмотреть.</p>
          <div className="hero-actions">
            <a className="button button-red" href="#live">Зайти на эфир <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#about">Узнать меня <span>↓</span></a>
          </div>
          <div className="hero-footnote"><span className="scribble">↳</span> 56,7 тыс. лайков и цель — 10к своих</div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><img src="/manus-storage/revi-hero_fbdeb0d4.png" alt="Белокосый аватар Revi в игровом мире" /></div>
          <div className="hero-sticker sticker-live"><i /> LIVE<br /><small>иногда внезапно</small></div>
          <div className="hero-sticker sticker-note">не Revi,<br />а Реви <span>♡</span></div>
          <div className="side-caption">scroll to explore<br /><span>↓</span></div>
        </div>
      </section>

      <section className="about-section section-rule" id="about">
        <div className="section-label"><span>02</span><b>about me</b></div>
        <div className="about-grid">
          <div className="about-intro"><p className="kicker">маленькая заметка</p><h2>В интернете я<br /><em>немного громче.</em></h2></div>
          <div className="about-text"><p>Реви — это не идеальный аватар и не вылизанный профиль. Это смешные решения, странные находки, Roblox, где всегда что-то идёт не по плану, и люди, с которыми хочется остаться ещё на одну игру.</p><p className="muted">Если ты пришёл впервые — считай, мы уже познакомились.</p><a className="arrow-link" href="#links">найти меня в сети <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="stats-strip"><div><strong>104</strong><span>подписки</span></div><div><strong>4 216</strong><span>подписчиков</span></div><div><strong>56,7k</strong><span>лайков</span></div><div className="stat-note">цель<br /><b>10k</b> <span>✶</span></div></div>
      </section>

      <section className="archive-section" id="archive">
        <div className="section-label light"><span>03</span><b>selected archive</b></div>
        <div className="archive-heading"><div><p className="kicker">из последних приключений</p><h2>Не просто<br /><em>контент.</em></h2></div><div className="archive-intro"><p>Три маленьких доказательства того, что в лобби всегда происходит больше, чем обещает описание игры.</p><div className="tab-row"><button className={activeTab === "archive" ? "active" : ""} onClick={() => setActiveTab("archive")}>архив</button><button className={activeTab === "notes" ? "active" : ""} onClick={() => setActiveTab("notes")}>заметки</button></div></div></div>
        {activeTab === "archive" ? <div className="archive-list">{archive.map((item, index) => <article className={`archive-card tone-${item.tone}`} key={item.number}><div className="card-meta"><span>{item.number}</span><span>{index === 1 ? "LIVE CUT" : "ROBLOX LOG"}</span></div><div className="archive-image"><img src={item.image} alt={item.title} /><span className="play-icon"><Play size={17} fill="currentColor" /></span></div><h3>{item.title}</h3><p>{item.note}</p><a href="https://www.tiktok.com/@revi_roblox" target="_blank" rel="noreferrer">смотреть фрагмент <ArrowUpRight size={14} /></a></article>)}</div> : <div className="notes-card"><span className="note-quote">“</span><p>Иногда я захожу просто на пять минут. Потом уже ночь, новый сервер и кто-то кричит: «Реви, ты опять это сделала».</p><span className="note-sign">— заметка из лобби, 2026</span></div>}
      </section>

      <section className="live-section section-rule" id="live">
        <div className="section-label"><span>04</span><b>next live</b></div>
        <div className="live-card"><div className="live-copy"><div className="live-badge"><i /> эфир открыт</div><h2>Залетай,<br /><em>место есть.</em></h2><p>Подпишись, чтобы не пропустить следующий заход. Будем играть, спорить с картой и делать вид, что всё было по плану.</p><a className="button button-red" href="https://t.me/revi_roblox" target="_blank" rel="noreferrer">Напомнить мне <Send size={16} /></a></div><div className="live-details"><span>канал</span><strong>@revi_roblox</strong><span>формат</span><strong>roblox / разговоры / хаос</strong><span>статус</span><strong className="red-text">когда-нибудь сегодня <i className="tiny-dot" /></strong></div></div>
      </section>

      <section className="links-section" id="links">
        <div className="section-label"><span>05</span><b>stay close</b></div>
        <div className="links-heading"><h2>Оставайся<br /><em>на связи.</em></h2><p>Там появляются эфиры, новые странные находки и всё, что не помещается в один ролик.</p></div>
        <div className="social-list">{socials.map(({ label, handle, href, icon: Icon }) => <a className="social-row" href={href} target="_blank" rel="noreferrer" key={label}><span className="social-icon"><Icon size={18} /></span><span><small>{label}</small><strong>{handle}</strong></span><ArrowUpRight className="social-arrow" size={20} /></a>)}</div>
      </section>

      <footer className="site-footer"><span>revi / 2026</span><span>сделано с сердцем и одной открытой вкладкой</span><a href="#top">наверх ↑</a></footer>
    </main>
  );
}
