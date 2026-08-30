'use client'

import { useState } from 'react'
import { ArrowDown, ArrowRight, CalendarDays, ChevronDown, Heart, MapPin, Sparkles, Star } from 'lucide-react'

const photos = [
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Couple%20photos-ZAb5EE3g88eJt8PIzSUOvkhFqsPtfW.jpg', alt: 'Cuplu privind unul spre celălalt în lumina aurie', note: 'lumina aceea de vară', className: 'md:col-span-2 md:row-span-2' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desc%C4%83rcare%20%289%29-2NIA4Z3sNVUwefwbxLkcj7teOVyonH.jpg', alt: 'Cuplu așezat pe malul unui lac', note: 'o după-amiază liniștită', className: '' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desc%C4%83rcare%20%287%29-f7DndefS59CkHmtXBXdAHhfWeoYoQ5.jpg', alt: 'Cuplu apropiat într-un moment tandru', note: 'doar noi doi', className: '' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desc%C4%83rcare%20%288%29-SB7NPB8HXlhunIPNh0DFnBKoqqvpzo.jpg', alt: 'Cuplu sărutându-se într-un peisaj cu dealuri', note: 'în orice loc', className: 'md:col-span-2' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desc%C4%83rcare%20%286%29-Iku7xLQQD5v1Ga7ILphZdSxGHiGsB2.jpg', alt: 'Cuplu întins în iarbă și zâmbind', note: 'acasă, oriunde', className: 'md:col-span-2' },
]

const reasons = [
  ['Zâmbetul tău', 'Pentru că zâmbetul tău reușește să-mi facă și cele mai obișnuite zile mai frumoase.', '01'],
  ['Felul în care mă faci să mă simt', 'Pentru că lângă tine pot fi eu însumi și mă simt exact acolo unde trebuie să fiu.', '02'],
  ['Râsul tău', 'Pentru că râsul tău este unul dintre sunetele mele preferate din lume.', '03'],
  ['Îmbrățișările tale', 'Pentru că în brațele tale găsesc mereu liniștea de care am nevoie.', '04'],
  ['Felul tău de a fi', 'Pentru că ești tu, cu toate lucrurile mici care te fac atât de specială.', '05'],
  ['Amintirile noastre', 'Pentru că fiecare moment petrecut împreună devine o amintire pe care vreau să o păstrez.', '06'],
  ['Pentru că mă susții', 'Pentru că ești lângă mine atât în zilele bune, cât și în cele dificile.', '07'],
  ['Micile lucruri', 'Pentru că uneori cele mai mici gesturi ale tale sunt cele care înseamnă cel mai mult.', '08'],
  ['Pentru că ești acasă', 'Pentru că oriunde aș fi, lângă tine simt că sunt acasă.', '09'],
  ['Pentru că ești tu', 'Pentru că nu am nevoie de un motiv perfect. Te iubesc pur și simplu pentru că ești tu.', '10'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-primary/15 bg-background/80 px-5 py-3 shadow-sm backdrop-blur-md">
          <a href="#inceput" className="font-serif text-lg font-semibold tracking-tight text-primary">A &amp; M</a>
          <button aria-label="Deschide meniul" className="rounded-full p-2 text-primary md:hidden" onClick={() => setMenuOpen(!menuOpen)}><ChevronDown className={menuOpen ? 'rotate-180 transition-transform' : 'transition-transform'} size={18} /></button>
          <div className={`${menuOpen ? 'flex' : 'hidden'} absolute left-4 right-4 top-16 flex-col gap-4 rounded-2xl border border-primary/15 bg-background p-5 text-sm text-muted-foreground md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}>
            <a href="#galerie" className="hover:text-primary">Galeria noastră</a><a href="#motive" className="hover:text-primary">De ce te iubesc</a><a href="#ziua" className="hover:text-primary">Ziua noastră</a><a href="#locul" className="hover:text-primary">Locul nostru</a>
          </div>
          <span className="hidden text-xs tracking-[0.2em] text-muted-foreground md:block">20 · 08 · 2025</span>
        </nav>
      </header>

      <section id="inceput" className="relative flex min-h-screen items-center justify-center px-6 pb-16 pt-32 text-center">
        <div className="heart-float heart-one"><Heart size={20} fill="currentColor" /></div><div className="heart-float heart-two"><Heart size={14} fill="currentColor" /></div><div className="heart-float heart-three"><Sparkles size={16} /></div>
        <div className="relative z-10 max-w-4xl">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.4em] text-primary">o scrisoare pentru noi doi</p>
          <h1 className="font-serif text-6xl leading-[0.9] tracking-tight text-primary sm:text-8xl md:text-[9.5rem]">Un an cu<br /><em className="font-serif font-normal text-secondary-foreground">noi împreună</em></h1>
          <p className="mx-auto mt-8 font-serif text-3xl text-primary sm:text-4xl">La mulți ani nouă! <span aria-hidden="true">♥</span></p>
          <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-muted-foreground">365 de zile. Nenumărate amintiri. Și încă un infinit de momente de trăit împreună.</p>
          <a href="#galerie" className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-transform hover:-translate-y-1">Descoperă povestea noastră <ArrowDown size={16} /></a>
        </div>
        <div className="absolute bottom-8 left-1/2 h-16 w-px bg-primary/20" />
      </section>

      <section id="galerie" className="border-y border-primary/10 bg-card px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-kicker">capitolul unu</p><h2 className="section-title">Povestea noastră<br /><em>în fotografii</em></h2></div><p className="max-w-xs text-sm leading-6 text-muted-foreground">Un an plin de momente pe care nu vrem să le uităm niciodată.</p></div>
          <div className="photo-grid">{photos.map((photo, i) => <figure key={photo.src} className={`polaroid ${photo.className} rotate-${i}`}><div className="aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-muted"><img src={photo.src} alt={photo.alt} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" /></div><figcaption className="flex items-center justify-between px-1 pt-3 font-serif text-sm text-primary"><span>{photo.note}</span><Heart size={12} fill="currentColor" /></figcaption></figure>)}</div>
        </div>
      </section>

      <section id="motive" className="bg-background px-6 py-24 md:px-12 lg:px-20"><div className="mx-auto max-w-6xl"><div className="mx-auto mb-14 max-w-xl text-center"><p className="section-kicker">capitolul doi</p><h2 className="section-title">10 motive pentru<br /><em>care te iubesc</em></h2><p className="mt-5 text-sm leading-6 text-muted-foreground">Aș putea să-ți dau o mie de motive, dar hai să începem cu acestea.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{reasons.map(([title, text, number], i) => <article key={number} className={`reason-card ${i % 3 === 0 ? 'bg-accent' : i % 3 === 1 ? 'bg-card' : 'bg-secondary/60'}`}><span className="font-mono text-xs text-primary/60">{number}</span><Heart className="my-7 text-primary/70" size={19} fill={i === 0 ? 'currentColor' : 'none'} /><h3 className="font-serif text-xl leading-tight text-primary">{title}</h3><p className="mt-3 text-xs leading-5 text-muted-foreground">{text}</p></article>)}</div></div></section>

      <section id="ziua" className="bg-secondary/55 px-6 py-24 md:px-12 lg:px-20"><div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center"><div><p className="section-kicker">capitolul trei</p><h2 className="section-title">Ziua în care a început<br /><em>povestea noastră</em></h2><p className="mt-6 max-w-sm text-sm leading-6 text-muted-foreground">Un singur 20 August a fost suficient pentru ca doi oameni să înceapă să scrie aceeași poveste.</p><div className="mt-8 flex items-center gap-3 font-serif text-lg text-primary"><Heart size={18} fill="currentColor" /> De aici a început totul.</div></div><div className="calendar-card"><div className="mb-8 flex items-center justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">20 · 08 · 2025</p><h3 className="mt-2 font-serif text-4xl text-primary">August</h3></div><CalendarDays className="text-primary/60" size={28} /></div><div className="grid grid-cols-7 gap-y-4 text-center font-mono text-xs"><span>L</span><span>Ma</span><span>Mi</span><span>J</span><span>V</span><span>S</span><span>D</span>{Array.from({length: 4}).map((_, i) => <span key={`blank-${i}`} />)}{Array.from({length: 31}, (_, i) => <span key={i + 1} className={`relative flex h-8 items-center justify-center ${i + 1 === 20 ? 'date-heart font-bold text-primary-foreground' : 'text-muted-foreground'}`}>{i + 1}</span>)}</div><p className="mt-8 border-t border-primary/15 pt-5 text-center font-serif text-sm italic text-primary">ziua noastră ♥</p></div></div></section>

      <section id="locul" className="paris-section px-6 py-24 md:px-12 lg:px-20"><div className="mx-auto max-w-5xl"><div className="mb-12 text-center"><p className="section-kicker text-secondary/80">capitolul patru</p><h2 className="section-title text-card">Locul în care a început<br /><em>povestea</em></h2><p className="mt-5 font-serif text-3xl text-secondary">Paris <span aria-hidden="true">♥</span></p></div><figure className="map-frame"><img src="/paris-map.png" alt="Hartă cu marcaj pe Rue de Rivoli, Paris" className="map-image" loading="lazy" /><figcaption className="map-link">Rue de Rivoli · locul în care ne-am întâlnit · <a href="https://www.openstreetmap.org/?mlat=48.8584&mlon=2.3522#map=16/48.8584/2.3522" target="_blank" rel="noreferrer">Deschide locația</a></figcaption></figure><div className="mx-auto mt-10 max-w-md text-center"><h3 className="font-serif text-3xl text-card">Aici a început totul.</h3><p className="mt-4 text-sm leading-6 text-secondary/70">Poate că atunci a fost doar un loc din Paris. Pentru noi, va rămâne mereu locul în care a început povestea.</p></div></div></section>

      <footer className="bg-accent px-6 py-24 text-center"><Heart className="mx-auto mb-7 text-primary" size={22} fill="currentColor" /><h2 className="font-serif text-5xl leading-none text-primary sm:text-7xl">La mulți ani nouă!</h2><p className="mt-5 text-sm text-muted-foreground">Primul nostru an s-a încheiat. Povestea abia începe.</p><div className="mx-auto mt-12 flex max-w-xs items-center justify-center gap-3 text-xs text-muted-foreground"><span className="h-px flex-1 bg-primary/20" /> websitepentrucupluri.com <span className="h-px flex-1 bg-primary/20" /></div><p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">transformăm poveștile de iubire în amintiri digitale.</p></footer>
    </main>
  )
}

void ArrowRight
void MapPin
void Star
void Heart
void Sparkles
void useState

// Nicio fotografie nu este stocată local: demo-ul folosește sursele furnizate de client.
