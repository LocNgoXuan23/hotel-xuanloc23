import React from 'react'
import { FeaturedRooms, Hero, BookingForm, Services, Contact } from '../components'
const HomePage = () => {
  return <main>
    <BookingForm />
    <Hero />
    <FeaturedRooms />
    <Services />
    <Contact />
  </main>
}

export default HomePage
