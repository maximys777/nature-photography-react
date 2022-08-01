import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

const work = () => {
  return (
    <div>
        <Hero heading='Мои Работы' message='Это некоторые из моих последних работ путешествия по миру.'/>
        <Portfolio/>
    </div>
  )
}

export default work