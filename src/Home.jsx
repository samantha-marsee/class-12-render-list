import { useState } from 'react'

import BusinessCard from './components/BusinessCard'
import ImageSelector from './components/ImageSelector'
import Gallery from './components/Gallery'
import Accordion from './components/Accordion'
import ChatBot from './components/ChatBot'
import DarkModeSwitcher from './components/DarkModeSwitcher'

export default function Home() {
  const [cardInfo, setCardInfo] = useState({
    name: "Ezra Cornell",
    email: "ezra@cornell.edu",
    description: "Ezra Cornell co-founded Cornell University in 1865.",
    image: "/images/cornell-seal-black.svg"
  })

  return (
    <main>
      <DarkModeSwitcher />

      <h2>Business Card</h2>
      <BusinessCard
        image={cardInfo.image}
        name={cardInfo.name}
        email={cardInfo.email}
        description={cardInfo.description}
      />
      <ImageSelector onChange={(url) => setCardInfo(
        (v) => ({ ...v, image: url })
      )} />
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input id="name"
          value={cardInfo.name}
          onChange={(e) => setCardInfo(
            (v) => ({ ...v, name: e.target.value })
          )} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email"
          value={cardInfo.email}
          onChange={(e) => setCardInfo(
            (v) => ({ ...v, email: e.target.value })
          )} />
      </div>

      <h2>Gallery Example</h2>
      <Gallery />

      <h2>Accordion Example</h2>
      <Accordion />

      <h2>ChatBot UI</h2>
      <ChatBot />

      <h2>Rendered Date</h2>
      <p>{new Date().toLocaleString()}</p>
    </main>
  )
}
