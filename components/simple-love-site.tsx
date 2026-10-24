'use client'

import { useState } from 'react'

const photos = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desc%C4%83rcare%20%288%29-I390grwPKHZEJmIoxtF5iZrw5k4NNv.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Couple%20photos-84SyiA3xGVcNN1lACQ1OchhbhDvw7H.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desc%C4%83rcare%20%287%29-FW5DJDk8xjqtrVd2WDnjWAfZzAZys2.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desc%C4%83rcare%20%286%29-LtHoaxT9T2Vlk3RgvJzG6J3F30fZMV.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desc%C4%83rcare%20%289%29-1lLYCq63DGpB0MUXh4zzsz6ZZXJpnz.jpg',
]

export function SimpleLoveSite() {
  const [currentPhoto, setCurrentPhoto] = useState(0)

  function previousPhoto() {
    setCurrentPhoto((photo) => (photo === 0 ? photos.length - 1 : photo - 1))
  }

  function nextPhoto() {
    setCurrentPhoto((photo) => (photo === photos.length - 1 ? 0 : photo + 1))
  }

  return (
    <main>
      <header>
        <nav aria-label="Navigare principală">
          <a href="#inceput">Început</a> | <a href="#poze">Poze</a> | <a href="#scrisoare">Scrisoare</a>
        </nav>
      </header>

      <section id="inceput" aria-labelledby="titlu">
        <h1 id="titlu">Pentru tine</h1>
        <p>Am făcut acest mic website pentru noi.</p>
        <p><a href="#poze">Vezi pozele</a></p>
      </section>

      <section id="poze" aria-labelledby="titlu-poze">
        <h2 id="titlu-poze">Poze</h2>
        <figure>
          <img src={photos[currentPhoto]} alt={`Fotografie ${currentPhoto + 1} cu un cuplu`} />
          <figcaption>Fotografia {currentPhoto + 1} din {photos.length}</figcaption>
        </figure>
        <p>
          <button type="button" onClick={previousPhoto} aria-label="Fotografia anterioară">Anterior</button>{' '}
          <button type="button" onClick={nextPhoto} aria-label="Fotografia următoare">Următor</button>
        </p>
      </section>

      <section id="scrisoare" aria-labelledby="titlu-scrisoare">
        <h2 id="titlu-scrisoare">Scrisoare</h2>
        <p>Dragă,</p>
        <p>
          Îți mulțumesc pentru toate momentele noastre, pentru râsete și pentru liniște.
          Îmi place viața când o trăiesc alături de tine.
        </p>
        <p>Te iubesc.</p>
        <p>Cu drag,<br />Eu</p>
      </section>

      <footer>
        <p><a href="#inceput">Înapoi la început</a></p>
      </footer>
    </main>
  )
}

export default SimpleLoveSite
