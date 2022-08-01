import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
        <Hero heading='Контакты' message='Отправьте форму ниже для получения дополнительной работы и котировок.'/>
        <Contact/>
    </div>
  )
}

export default contact